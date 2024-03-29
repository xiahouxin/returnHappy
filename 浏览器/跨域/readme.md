！！！重要


# 什么是跨域
浏览器都具有同源策略 --- 协议+主机+端口 都相同

# 浏览器的同源策略
同源策略是一个重要的安全策略，它用于限制一个源的文档或者它加载的脚本如何能与另一个源的资源进行交互。

它能帮助阻隔恶意文档，减少可能被攻击的媒介。例如，它可以防止互联网上的恶意网站在浏览器中运行 JS 脚本，从第三方网络邮件服务（用户已登录）或公司内网（因没有公共 IP 地址而受到保护，不会被攻击者直接访问）读取数据，并将这些数据转发给攻击者。

# 源的定义
如果两个 URL 的协议、端口 (en-US)（如果有指定的话）和主机都相同的话，则这两个 URL 是同源的。

- 同源策略限制了ajax请求

- 没有被同源策略所影响的三个标签
- <img src=""> 
- <link href="">
- <script src="">

# 常见的跨域场景
http://www/a.com/a.js
http://www/a.com/b.js  同一域名。允许通信

http://www/a.com/a.js
https://www/a.com/b.js  协议不同，跨域

http://www/a.com/a.js
http://script.a.com/a.js   主域相同，子域不同，跨域

# 特别说明
1. 如果是端口和协议造成的跨域，前端是没有办法解决的
2. 跨域仅仅是根据URL的首部来识别，不会根据这个首部对应的ip地址来判断
3. 跨域并不是请求没有发出去，请求时能发出去，服务期也能响应，只是响应结果被浏览器拦截了

# 跨域的解决方案
1. jsonp
 原理： 利用 script 标签中的 src 属性不会被同源策略所拦截的这一机制，将我们要请求的URL 地址，添加到script的src属性中，并且携带上前端的一个函数名作为参数给到后端，后端获取到前端传递的函数名，返回该函数的调用语法，将要返回的数据放在该函数中作为参数，当浏览器接收到全局下的函数被调用的后端响应时，会自动执行该函数，从而从参数中获取到后端返回的数据

 缺点：
  1. 需要对方的服务期做主持才可以
  2. 只支持 get 请求，有局限性，可能会遇到xss攻击

 

2. cors
  cors是W3C的标准，它允许浏览器向跨源服务器，发出 XMLHttpRequest 请求。也就是说浏览器发请求是不会被跨域的，跨域的核心是后端不能成功响应。
  要让后端响应内容能够不被浏览器拦截，关键在于后端。如果后端也能遵从 cors标准的话，后端的响应也可以跨源

  我们在开发网站时经常会用到跨域资源共享（简称cors）来解决跨域问题，但是在使用cors的时候，http请求会被划分为两类，简单请求和复杂请求，而这两种请求的区别主要在于是否会触发cors预检请求。
　　首先我们要明白cors的原理（引自MDN）：
    跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源。
    另外，规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是GET以外的 HTTP 请求，或者搭配某些 MIME 类型的POST请求），浏览器必须首先使用 OPTIONS方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。
    服务器确认允许之后，才发起实际的 HTTP 请求。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 Cookies 和 HTTP 认证相关数据）。


  - 简单请求
    · 使用get、post、head
    · Content-Type的值仅限于 
      text/plain  || multipart/form-data  || appplication/x-www-http-urlencoded
    . 请求中的任意XMLHttpRequestUpload 对象均没有注册任何事件监听器；XMLHttpRequestUpload 对象可以使用 XMLHttpRequest.upload 属性访问
    . 请求中没有使用 ReadableStream 对象

　　简单请求的部分响应头及解释如下：
      1.Access-Control-Allow-Origin（必含）- 不可省略，否则请求按失败处理。该项控制数据的可见范围，如果希望数据对任何人都可见，可以填写"*"。
      2.Access-Control-Allow-Credentials（可选） – 该项标志着请求当中是否包含cookies信息，只有一个可选值：true（必为小写）。如果不包含cookies，请略去该项，而不是填写false。这一项与XmlHttpRequest2对象当中的withCredentials属性应保持一致，即withCredentials为true时该项也为true；withCredentials为false时，省略该项不写。反之则导致请求失败。
      3.Access-Control-Expose-Headers（可选） – 该项确定XmlHttpRequest2对象当中getResponseHeader()方法所能获得的额外信息。通常情况下，getResponseHeader()方法只能获得如下的信息：
      Cache-Control
      Content-Language
      Content-Type
      Expires
      Last-Modified
      Pragma
      当你需要访问额外的信息时，就需要在这一项当中填写并以逗号进行分隔

  - 复杂请求
    · 不满足简单请求的条件的就是复杂请求------非简单请求即为复杂请求。复杂请求我们也可以称之为在实际进行请求之前，需要发起预检请求的请求。
    · 复杂请求的cors请求，会在正式通信之前，增加一次http查询请求，称为“预检”，预检是用来知道服务端是否允许跨域请求，预检请求发的是options方法
    复杂请求的部分响应头及解释如下：
      Access-Control-Allow-Origin（必含） – 和简单请求一样的，必须包含一个域。
      Access-Control-Allow-Methods（必含） – 这是对预请求当中Access-Control-Request-Method的回复，这一回复将是一个以逗号分隔的列表。尽管客户端或许只请求某一方法，但服务端仍然可以返回所有允许的方法，以便客户端将其缓存。
      Access-Control-Allow-Headers（当预请求中包含Access-Control-Request-Headers时必须包含） – 这是对预请求当中Access-Control-Request-Headers的回复，和上面一样是以逗号分隔的列表，可以返回所有支持的头部。这里在实际使用中有遇到，所有支持的头部一时可能不能完全写出来，而又不想在这一层做过多的判断，没关系，事实上通过request的header可以直接取到Access-Control-Request-Headers，直接把对应的value设置到Access-Control-Allow-Headers即可。
      Access-Control-Allow-Credentials（可选） – 和简单请求当中作用相同 Access-Control-Max-Age（可选） – 以秒为单位的缓存时间。预请求的的发送并非免费午餐，允许时应当尽可能缓存。



3. postMessage 
  html5 中的 xhr 提供的API，postMessage()方法允许来自不同源的脚本采用异步的方式进行有限通信，可以实现跨文本，多窗口，跨域消息传递
  
  可以解决这么几个问题：
  - 页面和其他新的窗口的数据传递
  - 多窗口之间的消息传递
  - 页面与嵌套的iframe消息传递
  - 上面三个场景的跨域数据传递

  otherWindow.postMessage(message, targetOrigin, [transfer])
    - message: 要发送给其他window的数据
    - targetOrigin：目标窗口
    - transfer（可选）和message一起传递的一个对象，这个对象的所有权将移交给消息接收方


