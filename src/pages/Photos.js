import React, {useContext} from "react"
import Image from "../components/Image"
import {getClass} from "../utils"
import {Context} from "../context/context"

export default function Photos (){

    const { allPhotos } = useContext(Context)

    const photoList = allPhotos.map( ( photo, id ) => 
    <Image key={photo.id} img={photo} className={getClass(id)}/>)

    return(
        <main className="photos">
            {photoList}
        </main>
    )
}