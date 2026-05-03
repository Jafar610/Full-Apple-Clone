import React from 'react'
import Slide from '../Pages/Slide/Slide'
import Store from '../Pages/Apple_Store/Store'
import MacCategory from '../Pages/Apple_Store/MacCategory'
import IpadCategory from '../Pages/Apple_Store/IpadCategory'
import IphoneCategory from '../Pages/Apple_Store/IphoneCategory'
import AirPodCategory from '../Pages/Apple_Store/AirPodCategory'
import WatchCategory from '../Pages/Apple_Store/WatchCategory'

function SharedSlide() {
  return (
    <>
      <Slide/>
      <Store/>
      <MacCategory/>
      <IpadCategory/>
      <IphoneCategory/>
      <AirPodCategory/>
      <WatchCategory/>
    </>
  )
}

export default SharedSlide