import React from 'react'
import image from "../image/todo.png"

const PackageCard = ({packageData}) => {
    // console.log(packageData)

  return (
    <div>
        <section className='main-card--cointainer'>
       {packageData.map((curElem)=> {
        return (
            <>
             <div className='card-container' key={curElem.id}>
        <div className='card'>
            <div className='card-body'>
                <span className='card-number card-circle subtle'>{curElem.id}</span>
                <span className='card-author  subtle'>{curElem.category}</span>
            <h2 className='card-title'> {curElem.name}</h2>
            <span className='card-description subtle'>
            {curElem.description}
            </span>
            <div className='card-read'> Read</div>
            </div>
            {/* <img src={{curElem.image}} alt="images" className='card-media'/> */}
            <span className='card-tag subtle'> order Now</span>
        </div>
      </div>
            </>
        )
       })}
      
      </section>
    </div>
  )
}

export default PackageCard
