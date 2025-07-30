import img from '../../../public/Imges/Website-Page/Group 395.png'

const Footer = () => {
    return (
        <div>
            <div className="w-[1200px] mx-auto mt-10 h-[642px] bg-[#002b55] rounded-3xl flex gap-52 items-center text-white">
<div>

<div className="">
    <h1 className="text-start text-[32px] ml-[270px]">Join Our JF Products</h1>
    <p className="text-start text-[18px] ml-[270px] mt-5">We’ll tell you about store updates and discounts</p>
    <input className="text-start text-[18px] ml-[120px] mb-6 mt-4" type="email"  />
  <div className="flex items-center gap-2 text-start text-[32px] ml-[270px]">
      <input type="checkbox"  /> <p className="text-[15px] text-[#959393]">Yes, subscribe me to your newsletter.</p>
  </div>
    <button className="w-[180px] rounded-full mt-12 h-[30px] text-center bg-white  ml-[70px] text-black">Join Now</button>

<div className='mt-24 flex  items-center gap-3   ml-[270px]'>
    <div>
        <img width={'80px'} src={img} alt="" />
    </div>

    <div>
        <h1 className='text-start'>Our Branches</h1>
        <p>Coimbatore, Chennai, Hyderabad, Goa, Kochi</p>
    </div>
</div>

</div>



</div>


<div className='flex justify-between gap-20 -mt-40 items-center '>

<div className=''>
    <h1>Information</h1>
    <p>Home</p>
    <p>Shop</p>
    <p>Blogs</p>
    <p>Contact</p>
</div>

<div>
    <h1 className=''>Helpful</h1>
    <p>Terms & Conditions</p>
    <p>Privacy Policy</p>
    <p>Shipping Policy</p>
    <p>My Account</p>
</div>
</div>




            </div>
        </div>
    );
};

export default Footer;