const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(id);
      resolve({ id: id, gitHubRepo: "techstackmedia" });
    }, 1000);
  });
};

const getRepository = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(username);
      resolve(["repo1", "repo2", "repo3"]);
    }, 1000);
  });
};

const getCommit = (commit) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(commit);
      resolve(["First commit", "Last commit"]);
    }, 1000);
  });
};

const callbackHell = (commit) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(commit);
      resolve(["This is a callback hell", "This is a christmas tree problem"]);
    }, 1000);
  });
};

getUser(1)
  .then((user) => getRepository(user.gitHubRepo))
  .then((repo) => getCommit(repo[0]))
  .then((commit) =>
    callbackHell(commit).then((comment) => console.log(comment))
  )
  .catch((err) => console.error(err.message));
