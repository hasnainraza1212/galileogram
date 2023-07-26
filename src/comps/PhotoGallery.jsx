import '.././index.css'
import React from 'react'
import { UseFirestore } from '../hooks/UseFirestore'


const PhotoGallery = () => {
    const {docs} = UseFirestore('images');
    // console.log(docs)

        // docs.map(pic=>console.log(pic.url))
        for(let i = 0; i < docs.length; i++){
            for (let j = 0; j > 2; j++){
                console.log(j)
            }
            // console.log(docs[i].url)
        }
    return (
    <div className="photoGallery">
        <div className="column" id='column1'>
            <div className="photo">
                <img src="https://images.unsplash.com/photo-1688889716860-c9b94cc3db63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
            <div className="photo">
                <img src="https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
            <div className="photo">
                <img src="https://images.unsplash.com/photo-1690016024119-da444e8451fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
        </div>
        <div className="column" id='column2'>
            <div className="photo">
                <img src="https://images.unsplash.com/photo-1682687220795-796d3f6f7000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
            <div className="photo">
                <img src="https://images.unsplash.com/photo-1689613188426-130b2d01c9ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
            <div className="photo">
                <img src="https://images.unsplash.com/photo-1689941507772-912f696b3b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
        </div>
        <div className="column" id='column3'>
            <div className="photo">
                <img src="https://images.unsplash.com/photo-1610538216006-ff8246335182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
            <div className="photo">
                <img src="https://plus.unsplash.com/premium_photo-1664202526793-fca03a9cab29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
            <div className="photo">
                <img src="https://images.unsplash.com/photo-1682685797857-97de838c192e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
            
        </div>

        


       
</div>

  )
}

export default PhotoGallery