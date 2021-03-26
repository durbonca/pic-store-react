import { useState } from "react"

export default function Photos (){

    const [photos, setPhotos] = useState([])

    return(
        <main className="photos">
            <h1>Images go here</h1>
        </main>
    )
}