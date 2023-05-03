let leftArrow = document.querySelector('.icon-arrow-left-bold')
let rightArrow = document.querySelector('.icon-arrow-right-bold')

let imgNums = document.querySelectorAll('.slide-show li').length

let slideShow = document.querySelector('.slide-show') // ul
let width = 800 // 图片的宽度

let picN = 0 // 当前显示图片的下标
let cirN = 0 // 当前显示的小圆点的下标
let rate = 15  // 切换的速度 px
let timer = null

leftArrow.onclick = function() {
  move(0)
}

rightArrow.onclick = function () {
  // 图片往左移动一张
  move(1)
}


function move(i) {
  if (i) {
    picN++
  } else {
    picN--
    if (picN < 0) {
      picN = imgNums - 1
    }
  }
    // 5
  if (picN > imgNums - 1) {
    picN = 0
  }
  Roll(-picN * width) // ul移动
  
}

// 自动轮播
// timer = setInterval(move, 2000)


// 移动的效果
function Roll(distance) {
  slideShow.style.left = distance + 'px'
}



// 把页面上的所有的图片url存在在一个数组中
// 当点击有点按钮时，往数组中push一份相同的数据
// 当前点击左边按钮时，往数组头部一条条插入相同的数据