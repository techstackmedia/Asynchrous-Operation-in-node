const getUser = (id, callback) => {
  setTimeout(() => {
    callback({ id: id, gitHubUsername: "techstackmedia" });
  }, 1000);
};

const getRepositories = (username, callback) => {
  setTimeout(() => {
    callback(["repo1", "repo2", "repo3"]);
  }, 1000);
};

const getCommits = (commit, callback) => {
  setTimeout(() => {
    callback(["First commit", "Last commit"]);
  }, 1000);
};

const getComment = (comment, callback) => {
  setTimeout(() => {
    callback(["This is a callback hell", "This is a christmas tree problem"]);
  }, 1000);
};

const getCommentFunc = (comment) => {
  console.log(comment);
};

const getCommitsFunc = (commit) => {
  console.log(commit);
  getComment(commit[1], getCommentFunc);
};

const getReposFunc = (repo) => {
  console.log(repo);
  getCommits(repo[0], getCommitFunc);
};

const getUserFunc = (user) => {
  console.log(user);
  getRepositories(user.gitHubUsername, getReposFunc);
};

getUser(1, getUserFunc);
