-   实习

    -   最好的项目讲讲
        -   低代码
            -   schema 生成
            -   div 包裹 vue react 共存（）
            -   umd 对应每个组件展示在页面
        -   活动页

-   数据编辑器

    -   网关层存储数据
    -

-   打卡活动模板

    -   低代码
    -   打卡 c 端 中台
    -   渐进式玩法
    -   可拓展

-   技术栈如何选择？
    -   部门封装模板？
    -   Vue React 共存？
    -   主 Vue， React 的兼容性问题？
    -   有没有遇到过 React 的兼容性问题？
-   相对小米的收货

    -   小米偏宣传方向，动画
    -   b 站 平台这边，对 UI 要求不高，服务于运营，低代码，降本增效

-   降本增效数据

    -   打卡活动，人力，每个活动页都要人力重新生成
    -   微前端 iframe
    -   不太需要开发人员介入，
    -   运营人力节约？

-   iframe ？

    -   塞入原有项目中，无法获取原项目代码
    -   微前端?
        -   兼容多种框架
        -   qiankun SPA
        -   京东的微应用
    -   缺点？
        -   页面通信？
        -   隔离性

-   浏览器架构

-   浏览器前端渲染？

    -   dom 树？render tree ？
    -   有很多图层？
    -   GPU 渲染？跳过回流重绘？
    -   图层分块？可视区域附近图层优先生成
    -   回流重绘
        -   优化：
            -   给 class ，批量操作样式
            -   硬件加速？
            -   x x x
    -   CPU 渲染？
        -   CPU 渲染需要经历回流重绘？
        -   CPU 和 GPU 的区别？ //知乎
        -   CPU 调度算法？  //知乎

-   Vue 和 React 开发区别？

    -   Vue2 更像模板？比较死板，减少用户心智， V-model
    -   Vue3 ？结构混乱
    -   React JSX ，hooks？ 灵活性？
    -   TurboPack rust ？缓存？swc ？
    -   diff 算法对比？
        -   react：层级对比？
        -   vue：双端对比?
        -   fiber 链表数 后序遍历
        -   requestAnimation? 宏任务？x x x

-   React 原理？
    -   React 的请求应该放在哪个生命周期中?
    -   请求竞态？
    -   setState 是同步还是异步？
    -   react 状态管理？
        -   redux：数据放到顶层
        -   自带 hooks
        -   jotai
    -   你是如何理解 fiber 的?
        -   react diff 的升级版？
    -   router 实现？
        -   hash
            -   hashChange？对 SEO 不友好
        -   history
            -   存在历史记录，API
            -   对 SEO 比较友好
-   https 和 http 的关系？

    -   区别： 端口，SSL/TLS. 公钥秘钥
    -   基于 SSL/TLS
    -   rpc

-   webpack ?

    -   优化，动态引入？ tree shaking？
    -   HMR ？维护了 socket 通信?
    -   场景：webpack 不打包第三方库？

        -   一个数组配置，忽略第三方库
        -   CDN 引入？

    -   require 和 import 的区别？ esm 和 cmj
        -   cmj 用在 node 后端
        -   esm 用在 前端
