
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const item  = useLoaderData()
    console.log(item);
    return (
        <div className='pt-[100px]'>
        
        <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
        
          <div className=' lg:w-1/2 h-full'>
            <img
              src={''}
              alt='product image'
              className='object-cover w-full  lg:h-full'
            />
          </div>
          {/* Details Container */}
          <div className=' p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
            <div>
              <p className='badge'>Name</p>
            </div>
            <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
             
            </h5>
            <p className=' text-gray-900'>Size: </p>
            <p className=' text-gray-900'>Price: </p>
            <p className=' text-gray-900'>Category: </p>
            <p className='mb-5 text-gray-900'>Rating: </p>
            
  
            <div className='flex gap-5 mt-8 items-center'>
              <a href={''} target='_blank' className='btn'>
                Buy Now
              </a>
              <p className='items-center font-extrabold text-gray-600 '>
                Price: {}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }



export default CardDetails;
