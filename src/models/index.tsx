// 这就是一个 Model。
// 插件所做的工作就是将其中的状态或数据变成了全局数据，
// 不同的组件在使用该 Model 时，
// 拿到的是同一份状态或数据。

// Model 中允许使用其它 hooks
export default () => {
  return {
    author: 'tiezhu'
  }
}


// 使用 Model
// 只需要调用 useModel 这一钩子函数：
