import gas from '../assets/gas-cooker.jpg'
import { GoSquareFill } from 'react-icons/go'
import { IoIosCheckmarkCircle} from 'react-icons/io'

const Benefit = () => {
  return (
    <section
      className="font-sans flex flex-col items-center justify-center w-full md:min-h-screen">
    <div className="flex w-full md:min-h-screen">
    <div className="bg-[#37393F] text-white w-full md:w-[50%] px-5 pl-[5%] py-20 sm:py-16 md:min-h-screen">
    <div className="flex flex-col justify-center h-full">
    <div className='flex flex-col '>
    <h4 className="text-[24px] sm:text-lg max-w-[370px] text-center mb-10 font-semibold">Experience Cleaner and Safer Cooking</h4>
    <div className="flex items-center gap-1 mb-4">
    <GoSquareFill color="#3BB3C3"/>
    <p className="text-[20px] font-semibold ">Benefits of using cooking gas</p>
    </div>
    
    </div>
   
    
    <div className='flex flex-col gap-2 items-start'>
    <div className='flex items-center gap-2'>
    <IoIosCheckmarkCircle color="#3BB3C3" fontSize="18px"/>
    <span className='sm:text-base'>Minimizes indoor air pollution and respiratory issues.</span>
    </div>
    
    <div className='flex items-center gap-2'>
    <IoIosCheckmarkCircle color="#3BB3C3" fontSize="18px"/>
    <span className='sm:text-base'>Saves money on fuel in the long run</span>
    </div>
    <div className='flex items-center gap-2'>
    <IoIosCheckmarkCircle color="#3BB3C3" fontSize="18px"/>
    <span className='sm:text-base'>Reduces deforestation and carbon emissions.</span>
    </div>
    <div className='flex items-center gap-2'>
    <IoIosCheckmarkCircle color="#3BB3C3" fontSize="18px"/>
    <span className='sm:text-base'>Environmentally Friendly</span>
    </div>
    
          
    </div>
    </div>
    </div>
    
    <div className='hidden md:block min-h-screen w-[50%]'>
    <img src={gas} alt="gas" className='object-cover w-full h-full'/>
    </div>
    </div>
    </section>
  )
}

export default Benefit
