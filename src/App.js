import React from 'react'
import Navbar from './Navbar'
import Shop from './Shop'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Shop />
      </div>
    </>
  )
}