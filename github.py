import requests

from constant.constant import GITHUB_API_URL

# Headers for authentication
headers = {"Accept": "application/vnd.github+json"}


def get_repos(username: str) -> [dict]:
    """Get the list of repositories for a given user or organization."""
    repos_url = f"{GITHUB_API_URL}/users/{username}/repos"
    response = requests.get(repos_url, headers=headers)
    response.raise_for_status()
    all_repos_data = response.json()

    key_info_list = []
    for repo_data in all_repos_data:
        key_info = {
            "name": repo_data["name"],
            "full_name": repo_data["full_name"],
            "html_url": repo_data["html_url"],
            "description": repo_data["description"],
            "created_at": repo_data["created_at"],
            "stargazers_count": repo_data["stargazers_count"],
            "watchers_count": repo_data["watchers_count"],
            "language": repo_data["language"],
            "forks_count": repo_data["forks_count"],
            "topics": repo_data["topics"],
        }
        key_info_list.append(key_info)

    return key_info_list


def extract_repo_readme(username, repository) -> dict | None:
    """Get the README content for a given repository."""
    readme_url = f"{GITHUB_API_URL}/repos/{username}/{repository}/readme"
    response = requests.get(readme_url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"No README found for {repository}. Status code: {response.status_code}")
        return None
