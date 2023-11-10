"use client";

import axios from "axios";
import { useState } from "react";
import { GITHUB_API_URL } from "@/constants/constant";
import { Select, Input, SelectItem, Button } from "@nextui-org/react";
import { GitHubRepo } from "@/types/repo";
import { compareDesc } from "date-fns";

export default function Page() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [username, setUsername] = useState<string>("");
  const [values, setValues] = useState<Set<string>>(new Set());

  const getRepos = async (username: string) => {
    try {
      const response = await axios.get(
        `${GITHUB_API_URL}/users/${username}/repos`
      );
      const repos: GitHubRepo[] = response.data;
      const sortedRepo = repos.sort((a, b) =>
        compareDesc(new Date(a.updated_at), new Date(b.updated_at))
      );

      setRepos(sortedRepo);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    getRepos(username);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input
          type="text"
          value={username}
          label="Username"
          className="w-32"
          variant="bordered"
          onValueChange={setUsername}
        />
        <Button type="submit" variant="solid">
          Search
        </Button>
      </form>
      <Select
        isRequired
        size="lg"
        radius="md"
        label="Github Repo"
        placeholder="Select a user"
        selectionMode="multiple"
        selectedKeys={values}
        className="max-w-xs"
        onSelectionChange={setValues}
      >
        {repos.map((repo) => (
          <SelectItem key={repo.name} textValue={repo.name}>
            {repo.name}
          </SelectItem>
        ))}
      </Select>
      <p className="text-small text-default-500">
        Selected: {Array.from(values).join(", ")}
      </p>
    </
  );
}
