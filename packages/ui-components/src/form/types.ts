import { GetFieldDecoratorOptions, ValidationRule, FormInstance } from 'antd'

export interface FormGeneratorProps {
  form: Array<FormInstance>
  formItems: any
  submitText?: string
  isInline?: boolean
  submitButtonLoading?: boolean
  onSubmit: (v: any) => void
  onFailed: (e: any) => void
}

export interface FormOptionProps {
  value: string
  text: string
}

export interface FormItemProps {
  name: string
  label?: string
  placeholder?: string
  span?: number
  decorators: GetFieldDecoratorOptions
  options?: Array<FormOptionProps>
}

export type FormElementTypeKeys =
  | 'input'
  | 'inputNumber'
  | 'textArea'
  | 'select'
  | 'date'
  | 'rangeDate'

export interface CustomFieldDecoratorOptions extends GetFieldDecoratorOptions {
  customValidation: (allFields: any) => ValidationRule
}
