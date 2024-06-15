import { useState, ChangeEvent, FormEvent } from 'react';
import { GoSquareFill } from 'react-icons/go';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Zoom} from 'react-reveal'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    emailjs.sendForm('service_s1umydk', 'template_rvhbix1', form, 'bX5uTuEepuVqmq7iy')
      .then((result) => {
        toast.success('Email sent successfully!', {
          autoClose: 2000,
        });
        console.log('Email sent successfully:', result.status);
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          companyName: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error('Please try again later.', {
          autoClose: 3000,
        });
      });
  };

  return (
    <div className='flex font-sans flex-col justify-center px-[5%] items-center py-14 sm:py-20 max-w-[1400px] mx-auto'  id="contact">
      <ToastContainer />
      <div className="flex items-center gap-1 mb-2">
        <GoSquareFill color="#FBBD02" />
        <p className="sm:text-base font-semibold">Ready to Cook Clean?</p>
      </div>
      <Zoom duration="2000">
      <h2 className="text-[24px] ss:text-lg font-sans text-center md:text-xl leading-tight mb-12">Join us in making a difference.<br/>Register now! </h2>
      </Zoom>
      
      <form className="w-full sm:w-3/4" onSubmit={handleSubmit} >
        <div className='flex gap-3 ss:gap-5 mb-4'>
          <div className="w-full">
            <label className="block text-[#37393F] text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 h-14 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full">
            <label className="block text-[#37393F] text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className='flex gap-3 ss:gap-5 mb-4'>
          <div className='w-full'>
            <label className="block text-[#37393F] text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className='w-full'>
            <label className="block text-[#37393F] whitespace-nowrap text-sm font-bold mb-2" htmlFor="companyName">
              Company (if Applicable)
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 h-14 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-[#37393F] text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded h-[140px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-primary hover:opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
