import React from 'react'
import { Form as AntdForm, Input as AntdInput } from 'antd'

export default function FormBase() {
  return (
    <div className='flex p-12 bg-blue-500'>
      <AntdForm
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={() => {}}
        onFinishFailed={() => {}}
      >
        <AntdForm.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <AntdInput />
        </AntdForm.Item>
      </AntdForm>
    </div>
  )
}
