import React from 'react';
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Agricultural Products/style.css';
import { Navigation, Pagination } from 'swiper/modules';

// images import
import imges1 from "../../../public/Imges/Website-Page/image (4).png";
import imges2 from "../../../public/Imges/Website-Page/image (6).png";
import imges3 from "../../../public/Imges/Website-Page/image (7).png";
import imges4 from "../../../public/Imges/Website-Page/image (8).png";

const products = [
  {
    id: 1,
    img: imges1,
    title: "Antiqo Fence",
    price: "₹10,024.00-₹14,984.82",
    btnMarginBottom: "mb-7",
    imgMarginTop: "",
    titleMarginLeft: "-ml-[28px]",
    priceMarginLeft: "ml-[-7rem]",
  },
  {
    id: 2,
    img: imges2,
    title: "JF Australian Trellis",
    price: "₹6,962.00",
    btnMarginBottom: "mb-20",
    imgMarginTop: "mt-16",
    titleMarginLeft: "-ml-[42px]",
    priceMarginLeft: "-ml-[14rem]",
  },
  {
    id: 3,
    img: imges3,
    title: "JF Polyhex Mesh",
    price: "₹4,050.00-₹10,770.00",
    btnMarginBottom: "mb-7",
    imgMarginTop: "",
    titleMarginLeft: "-ml-[28px]",
    priceMarginLeft: "-ml-28",
  },
  {
    id: 4,
    img: imges4,
    title: "JF Privezy Grass Wall",
    price: "₹3,067.50 - ₹6,362.50",
    btnMarginBottom: "mb-7",
    imgMarginTop: "",
    titleMarginLeft: "-ml-[28px]",
    priceMarginLeft: "-ml-28",
  },
  // You had duplicate of product 4, if needed add again here with different id
];

const LandscapeProducts = () => {
  return (
    <div className="px-6">
      <h1 className="text-black font-medium text-[42px] text-start mt-14 mb-8">
        Landscape Products
      </h1>

      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{ type: 'fraction' }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map(({ id, img, title, price, btnMarginBottom, imgMarginTop, titleMarginLeft, priceMarginLeft }) => (
          <SwiperSlide
            key={id}
            className="!w-[305px] !pt-0 !bg-[#F2F4F6] !text-black !h-[383px] !rounded-2xl rounded-b-2xl"
          >
            <div className="card -mt-[3.5rem] shadow-sm rounded-2xl">
              <figure className={`w-[255px] rounded-xl bg-white ${imgMarginTop}`}>
                <img className="bg-white rounded-2xl" src={img} alt={title} />
              </figure>
              <div className="card-body">
                <h2 className={`card-title font-medium ${titleMarginLeft}`}>
                  {title}
                </h2>
                <p className={`font-medium text-[14px] text-[#1e1c1c7f] ${priceMarginLeft}`}>
                  {price}
                </p>
                <button className={`btn bg-[#B0DD1D] rounded-full w-[128px] h-[38px] -ml-8 ${btnMarginBottom}`}>
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LandscapeProducts;
