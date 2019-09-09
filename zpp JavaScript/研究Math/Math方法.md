##abs
1. Math.abs([number])
2. 方法返回number的绝对值
3. 不能转换为数字的默认都为NaN
##ceil/floor
1. Math.ceil/floor([number])
2. 把一个数向上(ceil)取整或者向下(floor)取整
##Math.round 四舍五入
1. console.log(Math.round(-12.5)) //=>-12
##Math.max/min
1. Math.max/min(number++) 最大值&最小值
##Math.sqrt/pow() //开不了返回NaN
1. sqrt:给一个数开平方
2. pow:计算一个数的多少次幂
##Math.random()
1. 获取0-1随机数
2. 获取随机[n-m]整数
3. Math.round(Math.random()*(m-n)+n) 
```
function getRandomIntInclusive(min, max) {        
  min = Math.ceil(min);     
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}```
