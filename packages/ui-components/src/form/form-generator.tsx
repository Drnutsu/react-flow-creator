import React from 'react'
import { Form, Input, InputNumber, Select, DatePicker, Button } from 'antd'
import { FormItemProps, FormGeneratorProps, FormElementTypeKeys } from './types'

export default function FormGenerator({
  form,
  formItems,
  submitText = 'save',
  onSubmit,
  onFailed,
  isInline = false,
  submitButtonLoading = false,
  ...props
}: FormGeneratorProps) {
  const renderSearchItemByType = (type: string, item: FormItemProps) => {
    switch (type) {
      case 'input':
        return <Input {...item} />
      case 'inputNumber':
        return <InputNumber {...item} />
      case 'textArea':
        return <Input.TextArea rows={4} {...item} />
      case 'select':
        return (
          <Select {...item}>
            {item.options &&
              item.options.map(({ value, text }) => (
                <Select.Option className='text-black' key={value} value={value}>
                  {text}
                </Select.Option>
              ))}
          </Select>
        )
      case 'date':
        return <DatePicker {...item} />
      case 'rangeDate':
        // TODO : range date picker not include in the passing props, bacause type is conflict
        const { placeholder, ...rest } = item
        return <DatePicker.RangePicker format='YYYY-MM-DD' {...rest} />
      default:
        throw new Error(
          `Component Type ${type} is not support. please check searchItems data.`
        )
    }
  }

  const renderFormItems = () => (
    <div className={`flex ${!isInline && 'flex-col'}`}>
      {formItems.map(
        ({ type, ...item }: { type: FormElementTypeKeys } & FormItemProps) =>
          isInline ? (
            <Form.Item name={item.name} className='mb-0' label={item.label}>
              {renderSearchItemByType(type, item)}
            </Form.Item>
          ) : (
            <div
              key={item.name}
              className={`w-${item.span ? item.span / 2 : 12}/12`}
            >
              <Form.Item name={item?.name} label={item.label}>
                {renderSearchItemByType(type, item)}
              </Form.Item>
            </div>
          )
      )}
    </div>
  )

  return (
    <Form
      className='search-area'
      {...props}
      onFinish={onSubmit}
      onFinishFailed={onFailed}
    >
      {isInline ? (
        <div className='inline-flex'>
          <div className='flex items-center'>{renderFormItems()}</div>
          <div className='flex items-center'>
            <Button
              children={submitText}
              color='default'
              htmlType='submit'
              key='submit'
              loading={submitButtonLoading}
            />
          </div>
        </div>
      ) : (
        <div className='flex flex-col'>
          <div className='flex-1'>{renderFormItems()}</div>
          <div className='flex-1'>
            <Button
              children={submitText}
              color='default'
              htmlType='submit'
              key='submit'
              loading={submitButtonLoading}
            />
          </div>
        </div>
      )}
    </Form>
  )
}
