import React from 'react'
import Navbar from '../components/navbar'

const Layout = ({children}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
        <Navbar />
        {children}
    </div>
  )
}

export default Layout