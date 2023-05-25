// #Promise Static Method

// #Promise All
const promise1 = new Promise((resolve) =>
  setTimeout(() => {
    resolve(1);
  }, 1000)
);
// const promise2 = new Promise((resolve) =>
//   setTimeout(() => {
//     resolve(2);
//   }, 2000)
// );

// contoh rejection
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => {
    reject(new Error("reject here"));
  }, 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => {
    resolve([3, 4, 5]);
  }, 3000)
);

Promise.all([promise1, promise2, promise3])
  .then((val) => console.log(val))
  .catch((err) => {
    console.log(err.message);
  });
// end of Promise All

// #Promise Race
function race() {
  //   const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));

  //contoh rejection
  const promise1 = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("stop?")), 1000)
  );
  const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
  const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

  Promise.race([promise1, promise2, promise3])
    .then((val) => console.log(val))
    .catch((err) => console.log(err.message));
}
race();
// end of Promise Race

// #Promise allSettled
function allSettled() {
  const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
  const promise2 = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("sett error")), 2000)
  );
  const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

  Promise.allSettled([promise1, promise2, promise3]).then((res) =>
    console.log(res)
  );
  // .catch((err) => console.log(err.message));
}
allSettled();

// end of Promise allSettled

// #Promise any
// fulfilled sample
function fulfilledAny() {
  const promiseResolve1 = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("ful error")), 1000)
  );
  const promiseResolve2 = new Promise((resolve, reject) =>
    setTimeout(() => resolve("13"), 1000)
  );
  const promiseResolve3 = new Promise((resolve, reject) =>
    setTimeout(() => resolve("3"), 500)
  );

  Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
    .then((val) => console.log(val))
    .catch((err) => console.log(err.message));
}
fulfilledAny();

// rejected sample
function rejectedAny() {
  const promiseReject1 = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("1")), 1000)
  );
  const promiseReject2 = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("2")), 2000)
  );
  const promiseReject3 = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("3")), 3000)
  );

  Promise.any([promiseReject1, promiseReject2, promiseReject3])
    .then((value) => console.log(value))
    .catch((error) => console.log(error.message)); // All Promises were rejected
}
rejectedAny();
// end of Promise any
