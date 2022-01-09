const isGitHub = true;

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, gitHubUsername: "techstackmedia" });
    }, 1000);
  });
};

const getUsersRepos = (repos) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo1", "repo2", "repo3"]);
    }, 1000);
  });
};

const getCommits = (commits) => {
  return new Promise((resolve, reject) => {
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

const displayMessage = async () => {
  try {
    const user = await getUser(1);
    const repos = await getUsersRepos(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    const comment = await getComment(commits[1]);
    console.log(`${commits[1]}: ${comment}`);
  } catch (err) {
    console.error("Comment is rejected");
  } finally {
    console.log("Task submitted on repository");
  }
};

displayMessage();
