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

getUser(1, (user) => {
  getRepository(user.gitHubUsername, (repo) => {
    getCommit(repo[0], (commit) => {
      callbackHell(commit[1], (comment) => {
        // console.log(`${commit[1]} of ${repo[0]}`);
        console.log(user, commit, repo, comment);
      });
    });
  });
});
