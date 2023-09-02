# Vue3 设置动态路由出现Error: Unknown variable dynamic import

### 1.问题：vue3做动态路由时出现了报错

- 这个问题报错的出现因为我们定义 `component` 路径的时候报错的，我用的是拼接的形式，但官方不支持,下面是错误的代码：
  ````js
  router.addRoute('main', {
    path: '/main/analysis/overview',
    //这样的做法官方会直接给我们报错
  	component: () => import(`../views${subMenu.url}/${subMenu.url.split('/')[3]}.vue`)
  })
  ````

### 2.解决：使用 `import.meta.glob`

- 解决方法就是使用 `import.meta.glob`，获取vue文件的相应路径,它返回的一个对象
  ````js
  {
    ../views/main/Main.vue: () => import("/src/views/main/Main.vue?t=1693659027055")
  	../views/main/product/goods/goods.vue: () => import("/src/views/main/product/goods/goods.vue")
  }
  ````

  解决代码：

  ````js
  //匹配相应路径的所有文件
  const modules = import.meta.glob('../views/main/**/*.vue')
  const filePath = modules['../views/main/product/goods/goods.vue']
  router.addRoute('main', {
    path: '/main/product/goods',
  	component: filePath
  })
  ````

<br>



> 总结：vue2好像是可以用拼接的方式，但vue3的时候就会出现报错，只能用 `import.meta.glob` 获取路径的方式，目前只知道这种方式处理，如果有更好的方法请告诉我！！！！谢谢！！！