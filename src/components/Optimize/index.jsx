import React, { PureComponent } from 'react'
import './inde.css'
export default class Parent extends PureComponent {
  state = { faceModel: '张飞' }
  changeFace = () => {
    this.setState({ faceModel: '如花' })
  }
  render () {
    const { faceModel } = this.state;
    return (
      <div className="parent">
        <h2>faceModel:{faceModel}</h2>
        <button onClick={this.changeFace}>换脸</button>
        <Child faceModel={faceModel} />
      </div>
    )
  }
}
class Child extends PureComponent {
  /* 
    在没用到子组件的数据时也渲染子组件，这是不合理的 所以我们需要控制，
    只有在用到子组件的数据才来判断，shouldComponentUpdate 返回true
    react官方重新提供了一个类PureComponent来优化这一现象
   */
  render () {
    console.log(`child render`); // => child render
    const { faceModel } = this.props
    return (
      <div className="child">
        <h2>Child Face: {faceModel}</h2>
      </div>
    )
  }
}