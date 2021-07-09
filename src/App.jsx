// import React, { useState, useEffect } from 'react';
import React from 'react'
import { BrowserRouter, Route, Link } from 'react-dom'
// import Child from './components/Child'
// import Context from './components/Context'
// import Optimize from './components/Optimize'
// import RenderProps from './components/RenderProps'
// import Home from './components/Home';
// import About from './components/About';
import './App.css';

// function App () {
//   // useState中的值为初始值
//   const [count, setCount] = useState(0);
//   // console.log(count, setCount);
//   function add () {
//     // setCount(count+1) // 第一种写法
//     setCount(count => count + 1)  // 第二种写法
//   }

//   /*
//   []数组里面为useState中的值: 
//       如果为空数组则表示不监测任何值，仅在第一次render之后调用一次; 相当于类组件中的 componentDidmount
//       如果省略不写，则表示监测useState全部值的变化，有useState中的任何一个值发生变化都会触发callback
//   */
//   useEffect(() => {
//     console.log('触发useEffect');
//   }, [count]);

//   return (
//     <div className="App">
//       <h2>当前求和值为:{count}</h2>
//       <button onClick={add}>点我+1</button>
//     </div>
//   );
// }
// export default App;

/* export default class App extends PureComponent {
  render () {
    return (
      <div className='App'>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
      </div>
    )
  }
} */

function App () {
  return (
    <>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <BrowserRouter>
              <Link className="list-group-item active" to="/about">About</Link>
              <Link className="list-group-item" to="/home">Home</Link>
            </BrowserRouter>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <Route path="/about" component="{About}"></Route>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
