import '../../Style/style.css'
import img1 from '../../../public/Imges/Website-Page/Frame-6.png'
import img2 from '../../../public/Imges/Website-Page/Frame-4.png'
import img3 from '../../../public/Imges/Website-Page/Frame-3.png'
import img4 from '../../../public/Imges/Website-Page/Frame-2.png'
import img5 from '../../../public/Imges/Website-Page/Frame-1.png'
import img6 from '../../../public/Imges/Website-Page/Frame.png'

const ContactUs = () => {
    return (
        <div>
            <div className="w-[1200px] mx-auto mt-20 rounded-3xl bg-[#FFFFFF] shadow-sm shadow-[#43424283] h-[880px]">
<div className='flex justify-center items-center pt-10 font_regular'>
    <div className='text-start  rounded-3xl w-[150px] hover:bg-[#B0DD1D1A]'>
        <img className='w-[120px]' src={img1} alt="" />
        <h1 className='text-black ml-4'>Coimbatore</h1>
    </div>
    <div className='text-start  rounded-3xl w-[150px]  hover:bg-[#B0DD1D1A]'>
        <img className='w-[120px]' src={img2} alt="" />
        <h1 className='text-black ml-7'>chennai</h1>
    </div>
    <div className='text-start  rounded-3xl w-[150px]  hover:bg-[#B0DD1D1A]'>
        <img className='w-[120px]' src={img3} alt="" />
        <h1 className='text-black ml-7'>hyderabad</h1>
    </div>
    <div className='text-start rounded-3xl w-[150px]  hover:bg-[#B0DD1D1A]'>
        <img className='w-[120px]' src={img4} alt="" />
        <h1 className='text-black ml-12'>goa</h1>
    </div>
    <div className='text-start rounded-3xl w-[150px]  hover:bg-[#B0DD1D1A]'>
        <img className='w-[120px]' src={img5} alt="" />
        <h1 className='text-black ml-10'>Kochi</h1>
    </div>
    <div className='text-start rounded-3xl w-[150px]  hover:bg-[#B0DD1D1A]'>
        <img className='w-[120px]' src={img6} alt="" />
        <h1 className='text-black ml-9 font_regular text-[14px]'>Mumbai</h1>
    </div>
</div>


<div className=' mt-20 flex items-center justify-between'>


<div className='w-[600px] h-[642px] bg-[#002b55] rounded-3xl text-white text-start '>
<h1 className='font_medium text-[38px] ml-[50px] pt-[50px] '>Contact Us</h1>
<div>
    <input className='w-[440px] h-[50px] font_light text-[20px]  rounded-3xl  pl-4 ml-[48px] mt-7 bg-[#1a4166]' placeholder='Your Name' type="text" />
    <input className='w-[440px] h-[50px] font_light text-[20px]  rounded-3xl  pl-4 ml-[48px] mt-7 bg-[#1a4166]' placeholder='Email' type="text" />
    <input className='w-[440px] h-[50px] font_light text-[20px]  rounded-3xl  pl-4 ml-[48px] mt-7 bg-[#1a4166]' placeholder='Phone *' type="text" />
    <input className='w-[440px] h-[80px] font_light text-[20px]  rounded-3xl  pl-4 ml-[48px] mt-7 bg-[#1a4166]' placeholder='Write message ' type="text" />

    <button className='bg-[#B0DD1D] w-[126px] h-[50px] rounded-3xl font_medium  text-[18px]  text-black ml-[48px] mt-14'>Submit </button>
</div>
</div>

{/* map */}
<div className='  rounded-3xl text-white text-start  '>
<iframe
className='rounded-3xl'
  src="https://www.google.com/maps/embed?pb=..."
  width="580px"
  height="642px"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


</div>

</div>




            </div>



<div>


</div>


        </div>
    );
};

export default ContactUs;