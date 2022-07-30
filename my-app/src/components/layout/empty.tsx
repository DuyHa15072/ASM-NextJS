import React from 'react'
import { LayoutProps } from '../../model/layout'

type Props = {}

const emptyLayout = ({children}: LayoutProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default emptyLayout