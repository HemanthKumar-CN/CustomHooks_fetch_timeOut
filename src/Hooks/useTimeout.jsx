import { useEffect, useState } from "react";




export function useTimeOut(delay){

    const [ready, setReady] = useState(false)

    useEffect(() => {
      let timer = setTimeout(() => setReady(true),delay);
    
      return () => clearTimeout(timer);
    }, [])

    return ready;
    
}