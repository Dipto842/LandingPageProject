import React, {  useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Agricultural Products/style.css'
import { Navigation, Pagination } from 'swiper/modules';
// image import
import imges1 from "../../../public/Imges/Website-Page/image (4).png"
import imges2 from "../../../public/Imges/Website-Page/image (6).png"
import imges3 from "../../../public/Imges/Website-Page/image (7).png"
import imges4 from "../../../public/Imges/Website-Page/image (8).png"
const LandscapeProducts = () => {
     const [ setSwiperRef] = useState(null);
    return (
         <div>
      <div>
        <h1 className='text-black font_medium text-[42px] text-start mt-14'>Landscape Products</h1>
    </div>
     <>
  
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* 1 */}
        <SwiperSlide className='!w-[305px] !pt-0 !bg-[#F2F4F6] !text-black !h-[383px] !rounded-2xl rounded-b-2xl'>

<div className="card -mt-[3.5rem]  shadow-sm rounded-2xl">
  <figure className='w-[255px] rounded-xl bg-white'>
    <img
    
    className='bg-white rounded-2xl'
      src={imges1}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title -ml-[28px] font_medium ">
  Antiqo Fence
     
    </h2>
    <p className='ml-[-7rem] font_medium text-[14px] text-[#1e1c1c7f]'>₹10,024.00-₹14,984.82</p>
    <button className='btn bg-[#B0DD1D] rounded-full w-[128px] h-[38px] -ml-8 mb-7'>Shop Now</button>
 
  </div>
</div>

        </SwiperSlide>

        {/* 2 */}
        <SwiperSlide className='!w-[305px] !pt-0 !bg-[#F2F4F6] !text-black !h-[383px] !rounded-2xl rounded-b-2xl'>

<div className="card -mt-[3.5rem]  shadow-sm rounded-2xl">
  <figure className='w-[255px] mt-16 rounded-xl bg-white'>
    <img
    
    className='bg-white rounded-2xl '
      src={imges2}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title -ml-[42px] font_medium ">
  JF Australian Trellis
     
    </h2>
    <p className='-ml-[14rem] font_medium text-[14px] text-[#1e1c1c7f]'>₹6,962.00</p>
    <button className='btn bg-[#B0DD1D] rounded-full w-[128px] h-[38px] -ml-8 mb-20'>Shop Now</button>
 
  </div>
</div>

        </SwiperSlide>

{/* 3 */}
        <SwiperSlide className='!w-[305px] !pt-0 !bg-[#F2F4F6] !text-black !h-[383px] !rounded-2xl rounded-b-2xl'>

<div className="card -mt-[3.5rem]  shadow-sm rounded-2xl">
  <figure className='w-[255px] rounded-xl bg-white'>
    <img
    
    className='bg-white rounded-2xl'
      src={imges3}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title -ml-[28px] font_medium ">
  JF Polyhex Mesh
     
    </h2>
    <p className='-ml-28 font_medium text-[14px] text-[#1e1c1c7f]'>₹4,050.00-₹10,770.00</p>
    <button className='btn bg-[#B0DD1D] rounded-full w-[128px] h-[38px] -ml-8 mb-7'>Shop Now</button>
 
  </div>
</div>

        </SwiperSlide>

{/* 4 */}
        <SwiperSlide className='!w-[305px] !pt-0 !bg-[#F2F4F6] !text-black !h-[383px] !rounded-2xl rounded-b-2xl'>

<div className="card -mt-[3.5rem]  shadow-sm rounded-2xl">
  <figure className='w-[255px] rounded-xl bg-white'>
    <img
    
    className='bg-white rounded-2xl'
     src={imges4}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title -ml-[28px] font_medium ">
 JF Privezy Grass Wall
     
    </h2>
    <p className='-ml-28 font_medium text-[14px] text-[#1e1c1c7f]'>₹3,067.50 - ₹6,362.50</p>
    <button className='btn bg-[#B0DD1D] rounded-full w-[128px] h-[38px] -ml-8 mb-7'>Shop Now</button>
 
  </div>
</div>

        </SwiperSlide>


      
      </Swiper>

     
    </>
   </div>
    );
};

export default LandscapeProducts;