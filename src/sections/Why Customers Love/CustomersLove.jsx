import '../../Style/style.css'
import './style.css'
import img1 from '../../../public/Imges/Website-Page/Vector.png'
import img2 from '../../../public/Imges/Website-Page/Frame (4).png'
import img3 from '../../../public/Imges/Website-Page/Frame (5).png'
import img4 from '../../../public/Imges/Website-Page/image 43.png'


const CustomersLove = () => {
    return (
        <div>
           <h1 className='font_medium text-[42px] text-center text-black mt-36 mb-10'>Why Customers Love ❤️ Us?</h1>
           <div className='flex justify-between items-center gap-10 mx-auto w-[1200px] h-[608px]'>
            <div className='text-left bg-[#F2F4F6] w-[881px] h-[608px] pl-20 pt-10 rounded-3xl '>
<div className='flex gap-1'>
    <div><img src={img1} alt="" /></div>

    <div><img src={img1} alt="" /></div>
</div>
<p className='text-[#000000b7] font_regular text-[22px] w-[706px] mt-10'>I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product</p>

<div className='bakcround mt-64 flex items-center justify-between'>
<h1 className='text-black font_semibold text-[32px] ml-2'>- Samuel Varughese</h1>
<div className='flex gap-2 justify-end mr-7 items-center -mt-'>
    <div className='w-14 h-14 rounded-full border border-black  bg-white '> <img className='mx-auto pt-4' src={img2} alt="" /></div>
    <div className='w-14 h-14 rounded-full border border-black bg-white t'> <img  className='mx-auto pt-4' src={img3} alt="" /></div>

<div></div>
</div>
</div>
            </div>


            {/* imges */}
            <div className='w-[359px] h-[590px] bg-[#F2F4F6] text-center rounded-3xl'>

<img className='pt-[10px] pl-2' src={img4} alt="" />

            </div>
           </div>
        </div>
    );
};

export default CustomersLove;