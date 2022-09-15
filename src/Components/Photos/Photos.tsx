import React from 'react'
import style from './photos.module.scss' 
import weddingPhoto from "../../Assets/img/main-wedding-photo.jpg"  
import weddingPhoto1 from "../../Assets/img/wedding1.jpg"  
import weddingPhoto2 from "../../Assets/img/wedding2.jpg"  
import weddingPhoto3 from "../../Assets/img/wedding3.jpg"  
import weddingPhoto4 from "../../Assets/img/wedding4.jpg"  

export default function Photos() {
  return (
    <div className={style.photosContainer}>
        <img src={weddingPhoto} alt="wedding photos" />
        <img src={weddingPhoto1} alt="wedding photos" /> 
        <img src={weddingPhoto2} alt="wedding photos" /> 
        <img src={weddingPhoto3} alt="wedding photos" /> 
        <img src={weddingPhoto4} alt="wedding photos" />     
    </div>
  )
}
