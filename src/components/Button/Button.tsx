import React from 'react'
import type {ReactNode} from 'react'

export const Button = (children: ReactNode) => {
  return (
    <button>
      {children}
    </button>
  )
}