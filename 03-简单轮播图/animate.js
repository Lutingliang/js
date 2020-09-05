// animate 函数可以实现让任何元素做匀速动画去任何left位置
// element ==> 指定做动画的元素
// target ==> 动画的目标值
// num    ==>  每次移动的距离
function animate (element, target, num) {
  clearInterval(element.timerId)
  element.timerId = setInterval(() => {
    let current = element.offsetLeft
    let step = current < target ? num : -num
    if (Math.abs(target - current) < Math.abs(step)) {
      clearInterval(element.timerId)
      element.style.left = target + 'px'
    } else {
      current += step
      element.style.left = current + 'px'
    }
  }, 30)
}

// 缓动函数
function animate2 (element, target) {
  clearInterval(element.timerId)
  element.timerId = setInterval(() => {
    let current = element.offsetLeft
    let step = (target - current) / 4
    step = step > 0 ? Math.ceil(step) : Math.floor(step)
    current += step
    element.style.left = current + 'px'
    if (current == target) {
      clearInterval(element.timerId)
    }
  }, 30)
}
