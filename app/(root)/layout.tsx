import Navbar from '@/components/Navbar'
import React from 'react'
import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode}) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default layout