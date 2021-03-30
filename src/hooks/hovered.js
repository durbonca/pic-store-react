import {useState, useEffect, useRef} from "react"

export default function useHovered (){
    const [hover, setHover] = useState()
    const ref = useRef(null)
    
    useEffect(()=> {
        ref.current.addEvent
    }, [])

    function enter(){
        setHover(true)
    }
    function leave(){
        setHover(false)
    }

    return
}