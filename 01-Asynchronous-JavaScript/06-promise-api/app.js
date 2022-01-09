const isGithubRepository = Math.floor(Math.random() * 2) ? true : false;
console.log(isGithubRepository);

const getUser = (id) => {
  if (isGithubRepository) {
    setTimeout(() => {
      console.log("Kick off an asyn operation...");

      const resolvedPromise = Promise.resolve({
        id: id,
        gitHubRepository: "techstackmedia",
      });
      resolvedPromise.then((result) => console.log(result));
    }, 1000);
  } else {
    setTimeout(() => {
      console.log("Kick off an asyn operation...");

      const rejectedPromise = Promise.reject(new Error("Error Message"));
      rejectedPromise.catch((err) => console.error(err.message));
    }, 1000);
  }
};

getUser(1);
