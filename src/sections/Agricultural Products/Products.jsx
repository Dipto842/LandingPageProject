import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';
import '../../Style/style.css';
import { Navigation, Pagination } from 'swiper/modules';
// image import
import imgges1 from '../../../public/Imges/Website-Page/image1.png';
import imgges2 from '../../../public/Imges/Website-Page/image (1).png';
import imgges3 from '../../../public/Imges/Website-Page/image (2).png';
import imgges4 from '../../../public/Imges/Website-Page/image (5).png';

const Products = () => {
  const [setSwiperRef] = useState(null);

  return (
    <div>
      <div>
        <h1 className='text-black font_medium text-[42px] text-start mt-8'>Agricultural Products</h1>
      </div>
      <>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"

          // ✅ Responsive breakpoints added here:
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >

          {/* Slides unchanged below — kept as-is */}

          {/* 1 */}
          <SwiperSlide className='!w-[305px] !pt-0 !bg-[#F2F4F6] !text-black !h-[383px] !rounded-2xl rounded-b-2xl'>
            <div className="card -mt-[3.5rem] shadow-sm rounded-2xl">
              <figure className='w-[255px] rounded-xl bg-white'>
                <img className='bg-white rounded-2xl' src={imgges1} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title -ml-[28px] font_medium ">JF Barbed Wire- 270 GSM</h2>
                <p className='-ml-48 font_medium text-[14px] text-[#1e1c1c7f]'>₹4,995.00</p>
                <button className='btn bg-[#B0DD1D] rounded-full w-[128px] h-[38px] -ml-8 mb-7'>Shop Now</button>
              </div>
            </div>
          </SwiperSlide>

          {/* 2 */}
          <SwiperSlide className='!w-[305px] !pt-0 !bg-[#F2F4F6] !text-black !h-[383px] !rounded-2xl rounded-b-2xl'>
            <div className="card -mt-[3.5rem] shadow-sm rounded-2xl">
              <figure className='w-[255px] mt-16 rounded-xl bg-white'>
                <img className='bg-white rounded-2xl' src={imgges2} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title -ml-[42px] font_medium ">FGC RustFree Fencing Poles</h2>
                <p className='-ml-40 font_medium text-[14px] text-[#1e1c1c7f]'>₹499.00 -₹1,589.00</p>
                <button className='btn bg-[#B0DD1D] rounded-full w-[128px] h-[38px] -ml-8 mb-20'>Shop Now</button>
              </div>
            </div>
          </SwiperSlide>

          {/* 3 */}
          <SwiperSlide className='!w-[305px] !pt-0 !bg-[#F2F4F6] !text-black !h-[383px] !rounded-2xl rounded-b-2xl'>
            <div className="card -mt-[3.5rem] shadow-sm rounded-2xl">
              <figure className='w-[255px] rounded-xl bg-white'>
                <img className='bg-white rounded-2xl' src={imgges3} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title -ml-[28px] font_medium ">GI Poultry Mesh</h2>
                <p className='-ml-28 font_medium text-[14px] text-[#1e1c1c7f]'>₹1,260.00 - ₹10,750.00</p>
                <button className='btn bg-[#B0DD1D] rounded-full w-[128px] h-[38px] -ml-8 mb-7'>Shop Now</button>
              </div>
            </div>
          </SwiperSlide>

          {/* 4 */}
          <SwiperSlide className='!w-[305px] !pt-0 !bg-[#F2F4F6] !text-black !h-[383px] !rounded-2xl rounded-b-2xl'>
            <div className="card -mt-[3.5rem] shadow-sm rounded-2xl">
              <figure className='w-[255px] rounded-xl bg-white'>
                <img className='bg-white rounded-2xl' src={imgges4} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title -ml-[28px] font_medium ">JF Bluelink Mesh</h2>
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

export default Products;
