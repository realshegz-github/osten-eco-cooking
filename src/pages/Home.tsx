import Benefit from "../components/Benefit";
import ContactForm from "../components/ContactForm";
import HeroBanner from "../components/HeroBanner";



const Home = () => {
  return (
   <div className="w-full overflow-hidden">
      <HeroBanner/>
      <Benefit/>
      <ContactForm/>
   </div>
  );
};

export default Home;
