const isGithubRepository = Math.floor(Math.random() * 2) ? true : false;
console.log(isGithubRepository);

if (isGithubRepository) {
  const getUser = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: id, gitHubUsername: "techstackmedia" });
      }, 1000);
    });
  };

  const getUsersRepos = (repos) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["repo1", "repo2", "repo3"]);
      }, 1000);
    });
  };

  const getCommits = (commits) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["first commit", "last commit"]);
      }, 1000);
    });
  };

  const getComment = (comment) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("this is a callback hell");
      }, 1000);
    });
  };
  getUser(1)
    .then((user) => getUsersRepos(user.gitHubUsername))
    .then((repos) => getCommits(repos[0]))
    .then((commits) => getComment(commits[1]))
    .then((comment) => console.log(comment));
} else {
  const rejectedPromise = () => {
    return new Promise((reject) => {
      setTimeout(() => {
        reject(new Error("Error message"));
      }, 1000);
    });
  };
  rejectedPromise()
    .catch((err) => console.log(err.message))
    .finally((result) => console.log("Pending task rejected"));
}
