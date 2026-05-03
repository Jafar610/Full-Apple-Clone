import React from 'react'
import AirPodCategory from '../Pages/Apple_Store/AirPodCategory'
import AirPodsCategory from '../Pages/AirPodsProduct/AirPodsProduct'

function AirPodSharedLayout() {
  return (
    <>
     <AirPodsCategory/>
     <AirPodCategory/>
    </>
  )
}

export default AirPodSharedLayout