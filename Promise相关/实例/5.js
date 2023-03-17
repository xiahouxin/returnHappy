function fetchWithAutoRetry(fetcher, maximumRetryCount) {
    // your code here
    let total = 0;
    let err;
    return new Promise(async (resolve, reject) => {
      while (total++ <= maximumRetryCount) {
        try {
          const res = await fetcher(); //由于await遇到错误后会停止执行
          return resolve(res);
        } catch (error) {
          err = error;
        }
      }
      reject(err);
    });
  }