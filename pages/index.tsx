// import { getAllTodos } from '@/api';
import { useState, useEffect, useReducer } from 'react';
import Head from 'next/head';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import Todo from './components/Todo';
// import { isTemplateExpression } from 'typescript';


function reducer(state:any, action: any) {
    switch(action.type) {
      case 'ADD_TODO': 
      return [...state, newTodo(action.payload)];

      case 'TOGGLE_TODO':
        const newTodos = state.map((item: any) => {
          if (item.id === action.payload) {
            return {
              ...item,
              isCompleted: !item.isCompleted
            }
          } else {
            return item
          }
        });

        return newTodos

        case 'DELETE_TODO':
          return state.filter((item: any) => item.id !== action.payload)

      default:
        return state
    }
}

function newTodo(name: string) {
  return {id: Date.now(), body: name, isCompleted: false}
}



export default function Home() {

  const [todos, dispatch] = useReducer<any>(reducer, [])

  const [todo, setTodo] = useState('')

  function handleChange(event: any) {
    setTodo(event.target.value)
  }

  // function newTodo(name: string) {
  //   return {id: Date.now(), body: name, isCompleted: false}
  // }

  function handleSubmit(event: any) {
    event.preventDefault();
    dispatch({type: 'ADD_TODO', payload: todo})
    setTodo('')
  }
  // console.log(todos)


  const todoElements = todos.map((item: any) => {
    return (
      <Todo key={item.id} id={item.id} body={item.body} isCompleted={item.isCompleted} dispatch={dispatch} />
    )
  })

  // function handleToggle () {

  // }


  return (
    <>
      {/* <Head>
        <title>Todo App</title>
        <meta name="description" content="Simple Todo App built with NextJS 13" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}


      <main className='max-w-4xl mx-auto mt-8 p-6'>
        {/* <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">My Todo App</h1>
          <AddTask />
        </div> */}
        {/* <TodoList tasks={tasks}/> */}
        <form onSubmit={handleSubmit}>
          <input className='w-80 border border=[#eee] rounded text-lg px-5 py-3 ' type='text' placeholder='Input your todo' value={todo} onChange={(event) => handleChange(event)} />
        </form>

        {todoElements}

      </main>
    </>
  )
}
