import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
      <div className="w-full mt-20 sm:mt-24 flex justify-center min-h-[70vh]  px-5 font-poppins ">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <h1 className="text-lg font-semibold md:text-[2rem]">
            404 Not Found 😔
          </h1>
          <p className="text-center text-base font-medium">
            Sorry, the page you're looking for does not exist.
          </p>
          <Link
            to="/"
            className="text-black font-medium sm:font-medium flex items-center justify-center bg-secondary border-primary text-sm sm:text-base w-[166px] h-[44px] sm:h-[64px] rounded-[5px]"
          >
            Go Back Home
          </Link>
        </div>
      </div>
  );
};

export default NoPage;
