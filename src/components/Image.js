import { useState } from "react"

export default function Image ({className, src}) {
    
    const [hovered, setHovered] = useState(false)

    return(
        <div 
            onMouseOver={()=>setHovered(true)} 
            onMouseLeave={()=>setHovered(false)} 
            className={`${className} image-container`}
        >
            {hovered && 
                <>
                <i className="ri-heart-line favorite"></i>
                <i className="ri-add-circle-line cart"></i>
                </>
            }
            <img src={src} alt="img" className="image-grid"/>
        </div>
    )
}