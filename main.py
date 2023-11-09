import logging

from fastapi import FastAPI

from github import extract_repo_readme, get_repos

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/github/repos")
async def repos(username: str):
    return get_repos(username)


@app.get("/github/readme")
async def store(username: str, repository: list[str]):
    for repo in repository:
        logging.info(f"Storing {repo} for {username}")
        readme = extract_repo_readme(username, repo)
        if readme:
            # store_readme(username, repository, readme)
            pass
