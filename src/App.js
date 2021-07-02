import React, { useEffect, useState } from "react"; import './App.scss';
import ColorBox from './components/ColorBox/index'
import TodoList from './components/TodoList/index'
import TodoForm from './components/TodoForm/index'
import PostList from './components/PostList/index'

function App() {
  console.log("Render App ... ")
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Con cho HH ngu" },
    { id: 2, title: "Con cho HH ga" },
    { id: 3, title: "Con lon HH" }
  ]);
  const [postList, setPostList] = useState([])
  useEffect(() => {
    async function fetchPostList() {
      const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1'
      const response = await fetch(requestUrl)
      const responseJSON = await response.json()
      console.log({ responseJSON })
      setPostList(responseJSON.data)
    }
    fetchPostList()
  }, [])

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id)
    if (index < 0) return;
    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }
  function handleTodoFormSubmit(formValues) {
    //add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }
    const newTodoList = [...todoList]
    newTodoList.push(newTodo)
    setTodoList(newTodoList)
  }
  return (
    <div className="App">
      <h1> Welcome Nguyen Quoc Huy</h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList> */}
      <PostList posts={postList}></PostList>
    </div>
  );
}

export default App;
