import { GITHUB_API_URL } from "@/constants/constant";
import { GitHubRepo } from "@/types/repo";
import { compareDesc } from "date-fns";
import { NextRequest } from "next/server";
import axios from "axios";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const username = searchParams.get("username");

  if (!username || typeof username !== "string") {
    return Response.json(
      {
        error: "Username is required as a query parameter.",
      },
      { status: 200 }
    );
  }

  try {
    const response = await axios.get(
      `${GITHUB_API_URL}/users/${username}/repos`
    );
    const repos: GitHubRepo[] = response.data;
    const sortedRepos = repos.sort((a, b) =>
      compareDesc(new Date(a.updated_at), new Date(b.updated_at))
    );
    Response.json(sortedRepos, { status: 200 });
  } catch (error) {
    Response.json(
      { error: "Error fetching GitHub repositories" },
      { status: 500 }
    );
  }
}
