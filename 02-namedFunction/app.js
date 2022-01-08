const getUser = (id, callback) => {
  setTimeout(() => {
    callback({ id: id, gitHubUsername: "techstackmedia" });
  }, 1000);
};

const getRepository = (username, callback) => {
  setTimeout(() => {
    callback(["repo1", "repo2", "repo3"]);
  }, 1000);
};

const getCommit = (commit, callback) => {
  setTimeout(() => {
    callback(["First commit", "Last commit"]);
  }, 1000);
};

const callbackHell = (comment, callback) => {
  setTimeout(() => {
    callback(["This is a callback hell", "This is a christmas tree problem"]);
  }, 1000);
};

const getCommentFunc = (comment) => {
  console.log(comment);
};

const getCommitFunc = (commit) => {
  console.log(commit);
  callbackHell(commit[1], getCommentFunc);
};

const getRepoFunc = (repo) => {
  console.log(repo);
  getCommit(repo[0], getCommitFunc);
};

const getUserFunc = (user) => {
  console.log(user);
  getRepository(user.gitHubUsername, getRepoFunc);
};

getUser(1, getUserFunc);
