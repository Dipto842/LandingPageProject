import imge1 from '../../../public/Imges/Website-Page/Frame (1).png'
import imge2 from '../../../public/Imges/Website-Page/Frame (2).png'
import imge3 from '../../../public/Imges/Website-Page/Frame (3).png'

const Customers = () => {
    return (
        <div>
            <div className="w-[1200px] mx-auto mt-32 bg-[#002B55] rounded-2xl h-[332px]">

<h1 className="font_medium text-center pt-10 text-[42px]">Trusted by over 6K+ customers</h1>


<div className='flex items-center justify-center mt-10 gap-16'>

<div className='flex items-center justify-center gap-8'>
    <div className="w-[80px] h-[80px] rounded-full text-center bg-white mx-auto mt-10">

    <img className='mx-auto pt-4' src={imge1} alt="" />
    </div>
    <div className='mt-10'>
        <h4 className="font_medium text-3xl">Premium</h4>
        <h5 className="font_medium text-2xl mr-7 pt-1">Products</h5>
    </div>
</div>
<div className='flex items-center gap-8 '>
    <div className="w-[80px] h-[80px] rounded-full text-center pt-1 bg-white mx-auto mt-10 ">

    <img className='mx-auto pt-4' src={imge2} alt="" />
    </div>
    <div className='mt-10'>
        <h4 className="font_medium text-3xl mr-20">4000+</h4>
        <h5 className="font_medium text-2xl  pt-1">Google Review</h5>
    </div>
</div>
<div className='flex items-center gap-8 '>
    <div className="w-[80px] h-[80px] rounded-full text-center pt-1 bg-white mx-auto mt-10 ">

    <img className='mx-auto pt-4' src={imge3} alt="" />
    </div>
    <div className='mt-10'>
        <h4 className="font_medium text-3xl mr-7">Delivery</h4>
        <h5 className="font_medium text-2xl  pt-1">Across India</h5>
    </div>
</div>



</div>


            </div>
        </div>
    );
};

export default Customers;