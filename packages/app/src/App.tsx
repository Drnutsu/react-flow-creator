import React, { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { ExampleComponent, AntdButton } from 'ui-components'
import { sayHello } from 'react-flow-core'

import './App.css'
import logo from './logo.svg'
import store from './store'

import {
  getPendingSelector,
  getTodosSelector,
  getErrorSelector
} from './store/todo/selectors'
import { fetchTodoRequest } from './store/todo/actions'

function Example() {
  const dispatch = useDispatch()
  const pending = useSelector(getPendingSelector)
  const todos = useSelector(getTodosSelector)
  const error = useSelector(getErrorSelector)

  useEffect(() => {
    dispatch(fetchTodoRequest())
  }, [])

  return (
    <div style={{ padding: '15px' }}>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        todos.map((todo, index) => (
          <div style={{ marginBottom: '10px' }} key={todo.id}>
            {++index}. {todo.title}
          </div>
        ))
      )}
    </div>
  )
}

function App() {
  console.log('#log -> sayHello', sayHello)
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <ExampleComponent text='test' />
          <AntdButton />
          <Example />
        </header>
      </div>
    </Provider>
  )
}

export default App
