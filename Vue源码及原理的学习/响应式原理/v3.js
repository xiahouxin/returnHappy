//ue3 响应式原理
//vue2.0默认递归，不支持新增属性的响应式，数组改变length是无效的

let toProxy = new WeakMap() //处理反复代理问题,若引用,原对象做key，代理后的位value
let toRaw  = new WeakMap() //
function isObject(val){
    return typeof val ==='object'&&val !==null
}
function reactive(target){
//创建响应式对象
return createReactiveObject(target)
}
function createReactiveObject(target){
    if(!isObject(target)){
        return target
    }
    function hasOwn(target,key){
        return target.hasOwnProperty(key)
    }
    let proxy = toProxy.get(target)
    if(proxy){  //防止多次代理（一个对象被reactive多次调用）
        return proxy
    }
    if(toRaw.has(target)){
        return target //防止多层代理（一个被代理的对象被reactive再次调用，然后被被代理的对象又被代理）
    }
    let baseHandler = {
        //Reflect的优点不会报错，进而影响后续代码的运行，而是返回boolean值,从而替代报错
        get(target,key,receiver){  //receiver被代理出来的对象
                // receiver[key] //会爆栈,不断套娃
            console.log('获取');
            // return target[key]
            let result = Reflect.get(target,key,receiver)

            console.log(result,'--');
            return  isObject(result) ? reactive(result) : result
        },
        set(target,key,value,receiver){
            let hadKey = hasOwn(target,key)
            let oldValue = target[key]
            console.log(key,oldValue,'before');
            let res = Reflect.set(target,key,value,receiver) 
            if(!hadKey){
                console.log('新增');    
            }else if(oldValue !==value){
                console.log('修改');
            }
            console.log(key,value,'after');
          //  target[key] = value //如果对象不可写，设置不成功的话没有返回
         console.log(res,'+++'); //设置是否成功返回的true,或false
         return res //如果没有返回值报错TypeError: 'set' on proxy: trap returned falsish for property '3'
        },
        deleteProperty(target,key){
            let res =Reflect.deleteProperty(target,key)
            console.log('删除');
            return res
        }
    }
    let observed = new Proxy(target,baseHandler)
    toProxy.set(target,observed)
    toRaw.set(observed,target)
    return observed
}
//代理对象，不需要重写对象上的key属性,value属性
let proxy = reactive({name:{n:'紫霞'}}) //多层对象，需要获取值的时候才递归
// console.log(proxy.name);

proxy.name.n='xhx'
console.log(proxy.name.n);
