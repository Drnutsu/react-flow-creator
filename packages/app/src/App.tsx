import React, { useCallback } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { Button } from 'antd'

import { FormBase, Card } from 'ui-components'
import { form } from 'react-flow-core'

import './App.css'
import './styles/tailwind.css'
import store from './store'

function Example() {
  const dispatch = useDispatch()
  const onChangeLayout = useCallback(() => {
    dispatch(
      form.actions.updateFormUI([
        {
          type: 'input',
          name: 'simple_text_input',
          label: 'Simple Text Input',
          placeholder: 'just simple text input type here.'
        }
      ])
    )
  }, [form])
  return (
    <div className='flex p-12 justify-center items-center gap-4 flex-col'>
      <Card className='w-full'>
        <div className='flex flex-col gap-2 items-center'>
          <span className='text-xl text-bold'>Form Controller</span>
          <Button onClick={onChangeLayout}>Change!</Button>
        </div>
      </Card>
      <FormBase />
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <Example />
    </Provider>
  )
}

export default App
