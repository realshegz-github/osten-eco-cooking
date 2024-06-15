import { LuChefHat } from "react-icons/lu";
import chef from '../assets/chef.jpg'
import { Link } from 'react-router-dom';
const HeroBanner = () => {
  return (
    <section
    className="font-sans flex flex-col items-center justify-center w-full md:h-screen">
  <div className="flex md:flex-row flex-col-reverse w-full md:h-screen">
  <div className='h-[350px] md:h-screen md:w-[50%]'>
  <img src={chef} alt="chef" className='object-center w-full h-full'/>
  </div>
  
  <div className="bg-[#FBBD02] text-white w-full md:w-[50%] px-5 pl-[5%] py-20 sm:py-16 md:h-screen">
  <div className="flex flex-col justify-center items-center h-full">
  <div className='mb-5'><LuChefHat fontSize="64px"/></div>
  
  <div>
  <h2 className="text-[48px] sm:text-[64px] mb-5 leading-tight font-bold text-center max-w-[450px] font-poppins">
    The Art <br/>of Cooking
  </h2>
  <p className="text-center mb-8 max-w-[500px]">
          Promoting the use of cooking gas over firewood and stoves, aligning with Osten's "Cook Clean" campaign.
        </p>
        
        <Link to="#contact" className='flex justify-center '>
        <button
                  className="flex items-center bg-[#333] hover:opacity-85 justify-center rounded-3xl font-semibold text-base text-white px-8 py-3"
                  type="button"
                >
                  Join Us
                </button>
              </Link>
  </div>
  </div>
  </div>
  
  </div>
  </section>
  )
}

export default HeroBanner
