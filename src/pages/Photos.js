import Image from "../components/Image"
import {getClass} from "../utils"
import React, {useContext} from "react"
import {Context} from "../context/context"

export default function Photos (){

    const {allPhotos} = useContext(Context)
    const photoList = allPhotos.map(photo => <Image key={photo.id} src={photo.url} className={getClass(photo.id - 1)}/>)

    return(
        <main className="photos">
            {photoList}
        </main>
    )
}