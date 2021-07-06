// 1. 导入createContext
import React, { PureComponent, createContext } from 'react'
import './index.css'
// 2. 定义一个 createContext() 容器
const UsernameContext = createContext()
const { Provider, Consumer } = UsernameContext
export default class Parent extends PureComponent {
  state = { username: "jerry" }
  render () {
    const { username } = this.state
    return (
      <div className="parent">
        <h2>我是parent组件</h2>
        <h3>我的用户名是:{username}</h3>
        <Provider value={username}> {/* 3. 将需要传值的容器用Provider标签包起来，并且将要传的变量赋值给value */}
          <Child />
        </Provider>
      </div>
    )
  }
}

class Child extends PureComponent {
  render () {
    return (
      <div className="child" >
        <h2>我是child组件</h2>
        <h3>我的用户名是:</h3>
        <GrandSon />
      </div>
    )
  }
}
class GrandSon extends PureComponent {

  // 3. 接收context
  // 3.1 第一种方法:  UsernameContext 为之前定义的createContext容器名称
  // static contextType = UsernameContext
  render () {
    return (
      <div className="grandson" >
        <h2>我是grandson组件</h2>
        {/* <h3>我的用户名是:{this.context}</h3> */}
        <Consumer>
          {
            value => <h3>我的用户名是:{value}</h3>
          }
        </Consumer>
      </div>
    )
  }
}
