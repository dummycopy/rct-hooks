import React from 'react';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => {
  <div>
    <AddTodo>
      <VisibleTodoList />
      <Footer />
    </AddTodo>
  </div>
}

export default App