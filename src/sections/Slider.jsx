import './slider.css'

const Slider = () => {
  return (
    <div>
      <div>
        <img width={'111px'} height={'127px'} className='absolute  top-3 left-1/2' src="/Imges/Website-Page/Group 395.png" alt="" />
      </div>
      <div className="carousel w-full bg-[#F2F4F6]">
  <div id="slide1" className="carousel-item  relative   w-[1200px]">
  <div className='flex gap- items-center text-center'>
     
     <div className='backroundImg'>
       <img
       width={'400px'}
      
      src="Imges/Website-Page/Group 507.png"
      className=" rounded-2xl mx-auto pt-14 " />
     </div>
     
    <div className="w-[500p] ">
  <h1 className="text-[60px] text-black font-medium leading-tight ml-8">
    JF Privezy Grass
  </h1>
  <h1 className="text-[60px] font-medium w-3 ml-8 text-black">
    Wall
  </h1>
  <p className="text-[24px] font_regular w-[22.75rem] ml-8 text-black ">The perfact Blend of Greenery</p>
  <button className='font_medium text-[18px] w-[150px] h-[50px] mt-14 -ml-52   btn rounded-full bg-[#B0DD1D]'>Shop Now</button>
</div>
     
  </div>
    <div className="absolute -left-1 -right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle bg-[#B0DD1D]">❮</a>
      <a href="#slide2" className="btn btn-circle mr-5 bg-[#B0DD1D]">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item  relative   w-[1200px]">
  <div className='flex gap- items-center text-center'>
     
     <div className='backroundImg'>
       <img
       width={'400px'}
      
      src="Imges/Website-Page/Group 507.png"
      className=" rounded-2xl mx-auto pt-14 " />
     </div>
     
    <div className="w-[500p] ">
  <h1 className="text-[60px] font-medium leading-tight ml-8 text-black">
    JF Privezy Grass
  </h1>
  <h1 className="text-[60px] font-medium w-3 ml-8 text-black">
    Wall
  </h1>
  <p className="text-[24px] font_regular w-[22.75rem] ml-8 text-black">The perfact Blend of Greenery</p>
  <button className='font_medium text-[18px] w-[150px] h-[50px] mt-14 -ml-52   btn rounded-full bg-[#B0DD1D]'>Shop Now</button>
</div>
     
  </div>
    <div className="absolute -left-1 -right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle ml-[19px] bg-[#B0DD1D]">❮</a>
      <a href="#slide1" className="btn btn-circle bg-[#B0DD1D]">❯</a>
    </div>
  </div>

</div>
    </div>
  );
};

export default Slider;