# $eventBus 的使用、问题

### 1.uniapp

#### 两种情况

- A接收、B传值
- A传值、B接收

#### 第一种情况

- A接收、B传值，这种情况是我们使用 `uni.navigateTo` 跳转，不销毁当前页面，也是我们用的最多的一种

  - 如果 `$on` 写在 `onLoad` 生命周期的话，我们可以不用销毁事件，因为 `onLoad` 只加载一次
    ```js
    uni.$on('selectDate',item => {
      console.log(item)
    })
    ```

  - 如果你不在 `onLoad` 使用，且又不想销毁事件的话，可以使用 `$once`

    ```js
    uni.$once('selectDate', item => {
      console.log(item)
    })
    ```

  - 如果出现 `$on` 接收不到值的情况的话，其实你可以给 `$emit` 添加个延时器，最好大于500ms
    ```js
    setTimeout(() => {
      uni.$emit('selectDate', this.selectDate);
      uni.navigateBack();
    }, 800);
    ```

#### 第二种情况

- A传值、B接收
  - 直接用跳转传值、`onLoad` 接收参数即可

<br>



### 2.vue

这里根据原文链接文章进行一些补充，[原文链接](https://blog.csdn.net/GrootBaby/article/details/100534589)

#### 两种情况

- A接收、B传值
- A传值、B接收

#### 这里我们说第二种的情况，因为第一种情况就是第二种情况相反

#### 两个问题：

- 问题1： 为什么第一次触发的时候页面B中的on事件没有被触发
- 问题2： 为什么后面再一次依次去触发的时候会出现，每一次都会发现好像之前的on事件分发都没有被撤销一样，导致每一次的事件触发执行越来越多。

#### 问题一

​    第一次触发的时候页面B中的on事件没有被触发

#### **产生原因**

当我们还在页面A的时候，页面B还没生成，也就是页面B中的 created中所监听的来自于A中的事件还没有被触发。这个时候当你A中emit事件的时候，B其实是没有监听到的。

> 旧组件(mounted) —>新组建(beforecreate—>created—>beforemount) —>旧组件销毁(beforeDestroy—>destroyed)—>新组件(mounted)

#### 解决办法

我们可以把A页面组件中的emit事件写在beforeDestory中去。因为这个时候，B页面组件已经被created了，也就是我们写的on事件已经触发了，所以可以在beforeDestory的时候， on事件已经触发了，所以可以在beforeDestory的时候，on事件已经触发了，所以可以在beforeDestory的时候，emit事件

````js
//A页面
beforeDestory () {
	this.$EventBus.$emit('send', this.sendData)
}


//B页面
created () {
  this.$EventBus.$on('send', item => {
    console.log(item)
  })
}
````

#### 问题二

后面再一次依次去触发的时候会出现，每一次都会发现好像之前的on事件分发都没有被撤销一样，导致每一次的事件触发执行越来越多。

#### 产生原因

就是说，这个$on事件是不会自动清楚销毁的，需要我们手动来销毁。

#### 解决办法

在B组件页面beforeDestroy中添加this.$EventBus.$off来关闭

````js
// 在B组件页面中添加以下语句，在组件beforeDestory的时候销毁。
beforeDestroy () {
    this.$EventBus.$off('get')
},
````

### 总结

所以，如果想要用 bus 来进行页面组件之间的数据传递，需要注意两点：

一、组件A emit 事件应在beforeDestory生命周期内。

二、组件B内的 on 记得要销毁