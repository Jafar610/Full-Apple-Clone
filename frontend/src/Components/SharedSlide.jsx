import React from 'react'
import Slide from '../Pages/Slide/Slide'
import Store from '../Pages/Apple_Store/Store'
import MacCategory from '../Pages/Apple_Store/MacCategory'

function SharedSlide() {
  return (
    <>
      <Slide/>
      <Store/>
      <MacCategory/>
    </>
  )
}

export default SharedSlide