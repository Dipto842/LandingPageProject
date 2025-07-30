import img from '../../../public/Imges/Website-Page/Group 395.png';

const Footer = () => {
  return (
    <footer className="bg-[#002b55] text-white rounded-3xl mt-10 py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col justify-around md:flex-row md:justify-between gap-12">
        {/* Left Side: Join Newsletter */}
        <div className="flex-1 max-w-md">
          <h1 className="text-3xl font-semibold mb-3">Join Our JF Products</h1>
          <p className="text-lg mb-6">We’ll tell you about store updates and discounts</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full text-black px-4 py-2 rounded-md mb-4"
          />
          <div className="flex items-center gap-2 mb-8">
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter" className="text-sm text-[#959393] cursor-pointer">
              Yes, subscribe me to your newsletter.
            </label>
          </div>
          <button className="bg-white text-black rounded-full px-8 py-2 font-semibold hover:bg-gray-200 transition">
            Join Now
          </button>

          <div className="flex items-center gap-4 mt-16">
            <img src={img} alt="Branches" className="w-20 h-auto" />
            <div>
              <h2 className="font-semibold text-lg">Our Branches</h2>
              <p className="text-sm mt-1">
                Coimbatore, Chennai, Hyderabad, Goa, Kochi
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Links */}
        <div className="flex flex-1 justify-between max-w-lg">
          <div>
            <h2 className="font-semibold text-lg mb-4">Information</h2>
            <ul className="space-y-2 text-sm cursor-pointer">
              <li>Home</li>
              <li>Shop</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-4">Helpful</h2>
            <ul className="space-y-2 text-sm cursor-pointer">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>My Account</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
