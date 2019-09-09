##ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
1. add()  =>添加
2. size   =>查询
3. delete() =>删除 返回true
4. has()  =>查询是否存在
5. 移除所有元素 clear()
6. .values() =>获取元素
7. 遍历方法 .values.next()
8. for of遍历
9. forEach((item,key,ownset))
10. new Set(['xx','xx'])
11. set数组去重
12. Set(Array)对数组去重 Array=[... Set(Array)转换为数组
13. [...new Set('ababbc')].join('') 字符串去重