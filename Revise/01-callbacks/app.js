const getUser = (id, callback) => {
  setTimeout(() => {
    callback({ id: id, gitHubUsername: "techstackmedia" });
  }, 1000);
};

const getUsersRepos = (repos, callback) => {
  setTimeout(() => {
    callback(["repo1", "repo2", "repo3"]);
  }, 1000);
};

const getCommits = (commits, callback) => {
  setTimeout(() => {
    callback(["first commit", "last commit"]);
  }, 1000);
};

const getComment = (comment, callback) => {
  setTimeout(() => {
    callback("this is a callback hell");
  }, 1000);
};

getUser(1, (user) => {
  getUsersRepos(user.gitHubUsername, (repos) => {
    getCommits(repos[0], (commits) => {
      getComment(commits[1], (comment) => {
        console.log(`${commits[1]}: ${comment}`);
      });
    });
  });
});
