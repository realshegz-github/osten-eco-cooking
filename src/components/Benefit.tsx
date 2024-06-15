import gas from '../assets/gas-cooker.jpg'
import { GoSquareFill } from 'react-icons/go'
import { IoIosCheckmarkCircle} from 'react-icons/io'
import {Fade} from 'react-reveal'

const Benefit = () => {
  return (
    <section
      className="font-sans flex flex-col items-center justify-center w-full md:min-h-screen">
    <div className="flex flex-col md:flex-row w-full md:min-h-screen">
    <div className="bg-[#37393F] text-white w-full md:w-[50%] px-5 pl-[5%] py-20 sm:py-16 md:min-h-screen">
    <div className="flex flex-col justify-center h-full">
    <div className='flex flex-col '>
    <Fade left duration="1500">
    <h4 className="text-[24px] sm:text-lg max-w-[370px] text-center mb-10 font-semibold">Experience Cleaner and Safer Cooking</h4>
    <div className="flex items-center gap-1 mb-4">
    <GoSquareFill color="#FBBD02"/>
    <p className="text-[20px] font-semibold ">Benefits of using cooking gas</p>
    </div>
    </Fade>
    </div>
   
    <Fade up duration="2000">
    <div className='flex flex-col gap-2 items-start'>
    <div className='flex items-center gap-2'>
    <IoIosCheckmarkCircle color="#FBBD02" fontSize="18px"/>
    <span className='sm:text-base'>Minimizes indoor air pollution and respiratory issues.</span>
    </div>
    
    <div className='flex items-center gap-2'>
    <IoIosCheckmarkCircle color="#FBBD02" fontSize="18px"/>
    <span className='sm:text-base'>Saves money on fuel in the long run</span>
    </div>
    <div className='flex items-center gap-2'>
    <IoIosCheckmarkCircle color="#FBBD02" fontSize="18px"/>
    <span className='sm:text-base'>Reduces deforestation and carbon emissions.</span>
    </div>
    <div className='flex items-center gap-2'>
    <IoIosCheckmarkCircle color="#FBBD02" fontSize="18px"/>
    <span className='sm:text-base'>Environmentally Friendly</span>
    </div>
    
          
    </div>
    </Fade>
    </div>
    </div>
    
    <div className='h-[350px] md:h-screen md:w-[50%]'>
    <img src={gas} alt="gas" className='object-cover w-full h-full'/>
    </div>
    </div>
    </section>
  )
}

export default Benefit
