import React, { ReactChild } from 'react'
import cx from 'classnames'

export default function Card({
  children,
  className
}: {
  children: ReactChild
  className: string
}) {
  return (
    <div
      className={cx(
        'max-w-md py-4 px-8 bg-white shadow-lg rounded-lg',
        className
      )}
    >
      {children}
    </div>
  )
}
