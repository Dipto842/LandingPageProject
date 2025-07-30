import '../../Style/style.css'
import './style.css'
import img1 from '../../../public/Imges/Website-Page/Vector.png'
import img2 from '../../../public/Imges/Website-Page/Frame (4).png'
import img3 from '../../../public/Imges/Website-Page/Frame (5).png'
import img4 from '../../../public/Imges/Website-Page/image 43.png'

const CustomersLove = () => {
  return (
    <div>
      <h1 className="font_medium text-[42px] text-center text-black mt-36 mb-10">
        Why Customers Love ❤️ Us?
      </h1>
      <div className="flex flex-col xl:flex-row justify-between items-center gap-10 mx-auto w-full max-w-[1200px] h-auto xl:h-[608px] px-4">
        <div className="text-left bg-[#F2F4F6] w-full xl:w-[881px] h-auto xl:h-[608px] pl-6 md:pl-20 pt-10 rounded-3xl">
          <div className="flex gap-1">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img1} alt="" />
            </div>
          </div>
          <p className="text-[#000000b7] font_regular text-[22px] w-full md:w-[706px] mt-10">
            I had initial issue with stock availability and delivery. Once the product
            arrived on site the work has completed very fast(400ft.) Value for money and
            easy to install. Happy with the product
          </p>
          <div className="bakcround mt-20 xl:mt-64 flex flex-col xl:flex-row items-start xl:items-center justify-between">
            <h1 className="text-black font_semibold lg:text-[32px] ml-0 xl:ml-2 mb-4 xl:mb-0">
              - Samuel Varughese
            </h1>
            <div className="flex gap-2 justify-start xl:justify-end mr-0 xl:mr-7 items-center">
              <div className="w-14 h-14 rounded-full border border-black bg-white flex justify-center items-center">
                <img className="pt-2" src={img2} alt="" />
              </div>
              <div className="w-14 h-14 rounded-full border border-black bg-white flex justify-center items-center">
                <img className="pt-2" src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[359px] h-auto xl:h-[590px] bg-[#F2F4F6] text-center rounded-3xl flex justify-center pt-2">
          <img className="pt-[10px] pl-2 max-w-full h-auto" src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CustomersLove;
