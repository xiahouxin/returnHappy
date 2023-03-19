function any(promises) {
    return new myPromise((resolve, reject) => {
        // 参数校验
        if (Array.isArray(promises)) {
            let errors = []; // 
            let count = 0; // 计数器

            // 如果传入的参数是一个空的可迭代对象，则返回一个 已失败（already rejected） 状态的 Promise。
            if (promises.length === 0) return reject(new AggregateError('All promises were rejected'));
            promises.forEach(item => {
                // 非Promise值，通过Promise.resolve转换为Promise
                Promise.resolve(item).then(
                    value => {
                        // 只要其中的一个 promise 成功，就返回那个已经成功的 promise 
                        resolve(value);
                    },
                    reason => {
                        count++;
                        errors.push(reason);
                        /**
                      * 如果可迭代对象中没有一个 promise 成功，就返回一个失败的 promise 和AggregateError类型的实例，
                       * AggregateError是 Error 的一个子类，用于把单一的错误集合在一起。
                       */
                        count === promises.length && reject(new AggregateError(errors));
                    }
                )
            })
        } else {
            return reject(new TypeError('Argument is not iterable'))
        }
    })
}