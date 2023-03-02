function allSettled(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError("argument must be a array");
    }
    const result = [];
    promises.forEach((promise, index) => {
      promise.then(
        (value) => {
          result[index] = {
            status: "fulfilled",
            value,
          };
        },
        (reason) => {
          result[index] = {
            status: "rejected",
            reason,
          };
        }
      );
    });
  });
}
