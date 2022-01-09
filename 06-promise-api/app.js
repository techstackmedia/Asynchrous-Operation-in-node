const getUser = (id) => {
  setTimeout(() => {
    console.log("Kick off an asyn operation...");

    const resolvedPromise = Promise.resolve({
      id: id,
      gitHubRepository: "techstackmedia",
    });
    resolvedPromise.then((result) => console.log(result));
  }, 1000);
};

getUser(1);