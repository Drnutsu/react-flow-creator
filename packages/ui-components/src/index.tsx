import * as React from 'react'
import 'antd/dist/antd.css'
import styles from './styles.module.css'
import { Button } from 'antd'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const AntdButton = () => {
  return <Button>CONFIRM!!</Button>
}
