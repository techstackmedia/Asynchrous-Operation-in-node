const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, gitHubUsername: "techstackmedia" });
    }, 1000);
  });
};

const getRepository = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo1", "repo2", "repo3"]);
    }, 1000);
  });
};

const getCommit = (commit) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["First commit", "Last commit"]);
    }, 1000);
  });
};

const callbackHell = (comment) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["This is a callback hell", "This is a christmas tree problem"]);
    }, 1000);
  });
};

getUser(1)
  .then((user) => getRepository(user.gitHubUsername))
  .then((repo) => getCommit(repo[0]))
  .then((commit) => callbackHell(commit))
  .then((comment) => console.log(comment))
  .catch((err) => console.error(err.message));
