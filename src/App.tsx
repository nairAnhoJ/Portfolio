import React from 'react'
import Header from './layouts/Header'
import BodySection from './layouts/Body.jsx'
import Background from './assets/images/background.jpg'

function App() {
  return (
    <>
      <div className='w-screen min-h-screen bg-neutral-700'>
          <Header></Header>
          <BodySection></BodySection>
          <div className='w-screen h-screen overflow-hidden opacity-50 block fixed top-0 left-0 z-[1]'>
            <img src={Background} alt="background" />
          </div>
      </div>
    </>
  )
}

export default App