import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {

  render () {
    return (
      <div className="parent">
        <h2>Parent Component</h2>
        {/* A标签的render属性接收一个回调函数，返回一个B标签 */}
        <A render={name => <B name={name} />} />
      </div>
    )
  }
}
class A extends PureComponent {
  state = { name: '这是给B的值' }
  render () {
    const { name } = this.state
    return (
      <div className="a">
        <h2>A Component</h2>
        {/* 这里渲染的是B组件，this.props.render()会渲染出A标签中的render回调返回的东西，若有参数会携带callback中的params */}
        {this.props.render(name)} 
      </div>
    )
  }
}

class B extends PureComponent {
  render () {
    return (
      <div className="b">
        <h2>B Component</h2>
        <h3>我是通过this.props.render()渲染出来的: {this.props.name}</h3>
      </div>
    )
  }
}