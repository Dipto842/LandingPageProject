import imges1 from "../../../public/Imges/Website-Page/Group 480.png";
import imges2 from "../../../public/Imges/Website-Page/Frame-8.png";
import imges3 from "../../../public/Imges/Website-Page/Frame-7.png";

const WhyUs = () => {
  return (
    <div className="w-[1200px] mx-auto mt-32">
      <div className="text-center mb-10">
        <h1 className="text-black text-[42px] font_medium ">Why Us</h1>
        <p className="font_regular text-[#0a0a0acd] text-[20px] text-center w-[840px] mx-auto">
          We specialize in delivering durable and innovative fencing solutions
          built to last. With a focus on quality and trust, we help secure
          spaces across industries and communities.
        </p>
      </div>

      <div className="flex items-center justify-center gap-10 mt-32 ">
        {/* 1  */}
        <div className="bg-[radial-gradient(circle_at_top_right,_#a5caee_20%,_#f2f4f6_60%)] froml w-[400px] h-[500px] transition-all duration-300 ease-in-out hover:-translate-y-24 p-6 rounded-xl">
          <div className="w-12 mb-8 ml-9 mt-4">
            <img src={imges1} alt="" />
          </div>
          <h2 className="text-[26px] text-black font_medium mb-2 text-center w-[320px] mx-auto">
            Unmatched Durability{" "}
            <span className="-ml-6"> with Corrosion-Free</span>{" "}
            <span className="mr-[8rem]">Technology</span>
          </h2>
          <p className="text-gray-700 font_regular text-[17px] w-[320px] mx-auto text-left mr-[-5px]">
            Our JF-270 barbed wire features a robust 270 GSM zinc coating,
            ensuring superior resistance against rust and corrosion. Paired with
            stainless steel binding wire, our fencing solutions are designed to
            withstand harsh environmental conditions, offering longevity and
            reliability.
          </p>
        </div>
        {/* 2 */}
        <div className="bg-[#002b55]  froml w-[400px] h-[500px]  p-6 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-24">
          <div className="w-12 mb-8 ml-9 mt-4">
            <img src={imges2} alt="" />
          </div>
          <h2 className="text-[26px] text-left text-white font_medium mb-2  w-[320px] mx-auto">
            Customer-Centric Approach
            
          </h2>
          <p className="text-white font_regular text-[17px] w-[320px] mx-auto text-left mr-[-5px]">
           At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.
          </p>
        </div>
        {/* 3 */}
        <div className="bg-[radial-gradient(circle_at_top_right,_#a5caee_20%,_#f2f4f6_60%)] froml w-[400px] h-[500px] transition-all duration-300 ease-in-out hover:-translate-y-24 p-6 rounded-xl">
          <div className="w-12 mb-8 ml-9 mt-4">
            <img src={imges3} alt="" />
          </div>
          <h2 className="text-[26px] text-black font_medium mb-2 text-left w-[320px] mx-auto">
            Innovative and Diverse Product Range
          </h2>
          <p className="text-gray-700 font_regular text-[17px] w-[320px] mx-auto text-left mr-[-5px]">
           We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.
          </p>
        </div>
      </div>
      <button className="bg-[#B0DD1D] mt-40  w-40 h-12 rounded-full text-black font_medium  text-lg">Contact us</button>



    
    </div>
  );
};

export default WhyUs;
