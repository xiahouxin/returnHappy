//最优
function fib(n) {
    let a = 0, b = 1, sum;
    for(let i = 0; i < n; i++){
        sum = (a + b) % 1000000007;
        a = b;
        b = sum;
    }
    return a;
}

// 递归
function fib(n){
    if(n<=1) return n
    return fib(n-1)+fib(n-2)
}

// 动态方程
function fib1(n){
    if(n==0||n==1) return n
    let dp=new Array(n+1)
    dp[0]=0,dp[1]=1
    for(let i=2;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2]
    }
    return dp[n]
}

// 动态方程优化
function fib1(n){
    if(n==0||n==1) return n
    let fn0=0,fn1=1,temp
    for(let i=2;i<=n;i++){
        temp=fn0+fn1
        fn0=fn1
        fn1=temp
    }
    return fn1
}