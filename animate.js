function animate (ele, obj, fn) {
  clearInterval(ele.timerId)

  ele.timerId = setInterval(function () {
    let flag = true
    for (let k in obj) {
      let attr = k
      let target = obj[k]
      let current = window.getComputedStyle(ele, null)[attr]
      current = parseInt(current)
      let step = (target - current) / 10
      step = step > 0 ? Math.ceil(step) : Math.floor(step)
      current += step
      ele.style[attr] = current + 'px'
      if (current != target) {
        flag = false
      }
    }
    if (flag) {
      clearInterval(ele.timerId)
      fn && fn()
    }
  }, 30)
}
