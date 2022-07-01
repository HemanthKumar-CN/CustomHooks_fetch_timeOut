import React, { useEffect, useState } from 'react'
import { useTimeOut } from '../Hooks/useTimeout';



const CustomHooks = () => {

    const isReady = useTimeOut(2000);

  return (
    <div>
        <h1>CustomHooks</h1>
        <h2>{isReady ? "Ready" : "Not Ready"}</h2>
    </div>
  )
}

export default CustomHooks