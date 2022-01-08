const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, gitHubRepo: "techstackmedia" });
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

const displayMessage = async () => {
  try {
    const user = await getUser(1);
    const repo = await getRepository(user.gitHubRepo);
    const commit = await getCommit(repo[0]);
    const comment = await callbackHell(commit);
    console.log(user);
    console.log(repo);
    console.log(commit)
    console.log(comment);
  } catch (err) {
    console.error("Error occured");
  }
};

displayMessage();
