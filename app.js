const parallelPromise = (id) => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, gitHubRepoUsername: "techstackmedia" });
    }, 1000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo1", "repo2", "repo3"]);
    }, 1000);
  });

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["First commit", "Last commit"]);
    }, 1000);
  });

  const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["This is a callback hell", "This is a christmas tree problem"]);
    }, 1000);
  });

  const promiseResult = Promise.all([promise1, promise2, promise3, promise4]);
  promiseResult.then((result) => console.log(result));
};

parallelPromise(1);
