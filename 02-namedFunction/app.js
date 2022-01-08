const getUser = (id, callback) => {
  setTimeout(() => {
    console.log(id);
    callback({ id: id, gitHubRepo: "techstackmedia" });
  }, 1000);
};

const getRepository = (username, callback) => {
  setTimeout(() => {
    console.log(username);
    callback(["repo1", "repo2", "repo3"]);
  }, 1000);
};

const getCommit = (commit, callback) => {
  setTimeout(() => {
    console.log(commit);
    callback(["First commit", "Last commit"]);
  }, 1000);
};

const callbackHell = (comment, callback) => {
  setTimeout(() => {
    console.log(comment);
    callback(["This is a callback hell", "This is a christmas tree problem"]);
  }, 1000);
};

const getCommentFunc = (comment) => {
  console.log(comment);
};

const getCommitFunc = (commit) => {
  callbackHell(commit[1], getCommentFunc);
};

const getRepoFunc = (repo) => {
  getCommit(repo[0], getCommitFunc);
};

const getUserFunc = (user) => {
  getRepository(user.gitHubRepo, getRepoFunc);
};

getUser(1, getUserFunc);
