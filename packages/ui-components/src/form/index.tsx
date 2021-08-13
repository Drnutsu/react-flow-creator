import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Form as AntdForm } from 'antd'

import FormGenerator from './form-generator'

const { useForm } = AntdForm

// const mockConfigs = [
//   {
//     type: 'input',
//     name: 'simple_text_input',
//     label: 'Simple Text Input',
//     placeholder: 'just simple text input type here.'
//   },
//   {
//     type: 'select',
//     name: 'required_selector',
//     label: 'Choose to require or not',
//     placeholder: 'select should we require or not',
//     showSearch: true,
//     options: [
//       { value: true, text: 'required' },
//       { value: false, text: 'not required' }
//     ]
//   }
// ]

export default function FormBase() {
  const form = useForm()
  const onSubmit = useCallback((result) => {
    console.log(result)
  }, [])
  const onFailed = useCallback((err) => {
    console.log(err)
  }, [])
  const configs = useSelector((state: any) => state?.form?.form?.config)
  const Form = useCallback(
    () => (
      <FormGenerator
        formItems={configs || []}
        form={form}
        onSubmit={onSubmit}
        onFailed={onFailed}
      />
    ),
    [onSubmit, configs, form]
  )
  return (
    <div className='max-w-md py-4 px-8 bg-white shadow-lg rounded-lg'>
      <Form />
    </div>
  )
}
