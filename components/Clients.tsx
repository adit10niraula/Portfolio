import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-10  ' id="testimonials">
    <h1 className="heading">Kinds words from 
    <span className='text-purple'>satisfied clients</span>
    </h1>

    <div className="flex   flex-wrap items-center justify-center p-4 gap-x-24  mt-10">
      
      <InfiniteMovingCards 
      items={testimonials}
      direction='right'
      speed="slow"
      />


      <div className="flex mt-10 flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 ">
        {companies.map(({id, name, img, nameImg})=>(
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                <img src={img} alt="img"  className='md:w-10 w-5'/>
                <img src={nameImg} alt="name img"  className='md:w-24 w-5'/>

            </div>
        ))}
      </div>
        
      </div>
    </div>
  )
}

export default Clients
