// animate 函数可以实现让任何元素做匀速动画去任何left位置
// element ==> 指定做动画的元素
// target ==> 动画的目标值
// num    ==>  每次移动的距离
function animate(element, target, num) {
    num = num || 80; // num 参数设置了默认值 80

    clearInterval(element.timerId);

    // dom对象上添加timerId属性
    element.timerId = setInterval(function() {
        // 1. 获取div的现在为止
        var current = element.offsetLeft;

        // 2. 终点值 -- 提取成为target参数了

        // 3. 每次移动的距离
        var step = current < target ? num : -num;

        // 判断是否到了终点，到了就清定时器
        if (Math.abs(target - current) < Math.abs(step)) {
            clearInterval(element.timerId);
            element.style.left = target + "px";
        } else {
            // 4. 在当前位置往前移动10px
            current += step;

            // 5. 设置div位置
            element.style.left = current + "px";
        }
    }, 30)
}



// 缓动动画
function animate2(element, target) {

    clearInterval(element.timerId)

    element.timerId = setInterval(function() {
        // 1. 获取元素当前的位置
        var current = element.offsetLeft;

        // 2. 设置一个终点值 --提取成为参数

        // 3. 每次移动的距离
        var step = (target - current) / 4;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        console.log(step);

        // 4. 在当前位置上+10移动
        current += step;

        // 5. 设置位置
        element.style.left = current + "px";


        // 判断 元素的current 和target之间的关系
        if (current == target) {
            clearInterval(element.timerId)
        }
    }, 30)
}
