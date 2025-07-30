import '../../Style/style.css'
import img1 from '../../../public/Imges/Website-Page/Frame-6.png'
import img2 from '../../../public/Imges/Website-Page/Frame-4.png'
import img3 from '../../../public/Imges/Website-Page/Frame-3.png'
import img4 from '../../../public/Imges/Website-Page/Frame-2.png'
import img5 from '../../../public/Imges/Website-Page/Frame-1.png'
import img6 from '../../../public/Imges/Website-Page/Frame.png'

const ContactUs = () => {
    return (
        <div className="px-4">
            <div className="w-full max-w-[1200px] mx-auto mt-20 rounded-3xl bg-[#FFFFFF] shadow-sm shadow-[#43424283] min-h-[880px]">
                
                <div className='flex flex-wrap justify-center items-center gap-4 pt-10 font_regular'>
                    <div className='text-start rounded-3xl w-[150px] hover:bg-[#B0DD1D1A]'>
                        <img className='w-[120px] mx-auto' src={img1} alt="" />
                        <h1 className='text-black text-center'>Coimbatore</h1>
                    </div>
                    <div className='text-start rounded-3xl w-[150px] hover:bg-[#B0DD1D1A]'>
                        <img className='w-[120px] mx-auto' src={img2} alt="" />
                        <h1 className='text-black text-center'>Chennai</h1>
                    </div>
                    <div className='text-start rounded-3xl w-[150px] hover:bg-[#B0DD1D1A]'>
                        <img className='w-[120px] mx-auto' src={img3} alt="" />
                        <h1 className='text-black text-center'>Hyderabad</h1>
                    </div>
                    <div className='text-start rounded-3xl w-[150px] hover:bg-[#B0DD1D1A]'>
                        <img className='w-[120px] mx-auto' src={img4} alt="" />
                        <h1 className='text-black text-center'>Goa</h1>
                    </div>
                    <div className='text-start rounded-3xl w-[150px] hover:bg-[#B0DD1D1A]'>
                        <img className='w-[120px] mx-auto' src={img5} alt="" />
                        <h1 className='text-black text-center'>Kochi</h1>
                    </div>
                    <div className='text-start rounded-3xl w-[150px] hover:bg-[#B0DD1D1A]'>
                        <img className='w-[120px] mx-auto' src={img6} alt="" />
                        <h1 className='text-black text-center font_regular text-[14px]'>Mumbai</h1>
                    </div>
                </div>

                <div className='mt-20 flex flex-col lg:flex-row items-center justify-between gap-10 px-4'>
                    {/* Contact Form */}
                    <div className='w-full max-w-[600px] h-auto lg:h-[642px] bg-[#002b55] rounded-3xl text-white text-start'>
                        <h1 className='font_medium text-[32px] lg:text-[38px] ml-[30px] lg:ml-[50px] pt-[40px]'>Contact Us</h1>
                        <div>
                            <input className='w-[90%] max-w-[440px] h-[50px] font_light text-[18px] rounded-3xl pl-4 ml-[5%] mt-6 bg-[#1a4166]' placeholder='Your Name' type="text" />
                            <input className='w-[90%] max-w-[440px] h-[50px] font_light text-[18px] rounded-3xl pl-4 ml-[5%] mt-6 bg-[#1a4166]' placeholder='Email' type="text" />
                            <input className='w-[90%] max-w-[440px] h-[50px] font_light text-[18px] rounded-3xl pl-4 ml-[5%] mt-6 bg-[#1a4166]' placeholder='Phone *' type="text" />
                            <input className='w-[90%] max-w-[440px] h-[80px] font_light text-[18px] rounded-3xl pl-4 ml-[5%] mt-6 bg-[#1a4166]' placeholder='Write message ' type="text" />
                            <button className='bg-[#B0DD1D] w-[126px] h-[50px] rounded-3xl font_medium text-[18px] text-black ml-[5%] mt-10 mb-6'>Submit</button>
                        </div>
                    </div>

                    {/* Map */}
                    <div className='w-full max-w-[580px]'>
                        <iframe
                            className='rounded-3xl w-full h-[400px] lg:h-[642px]'
                            src="https://www.google.com/maps/embed?pb=..."
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
