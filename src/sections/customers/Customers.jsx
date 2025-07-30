import imge1 from '../../../public/Imges/Website-Page/Frame (1).png'
import imge2 from '../../../public/Imges/Website-Page/Frame (2).png'
import imge3 from '../../../public/Imges/Website-Page/Frame (3).png'

const Customers = () => {
    return (
        <div>
            <div className="max-w-[1200px] w-full mx-auto mt-32 bg-[#002B55] rounded-2xl h-auto px-4 py-10">
                <h1 className="font_medium text-center text-[32px] md:text-[42px]">
                    Trusted by over 6K+ customers
                </h1>

                <div className='flex flex-wrap items-center justify-center mt-10 gap-10 md:gap-16'>
                    {/* Card 1 */}
                    <div className='flex items-center justify-center gap-5 md:gap-8'>
                        <div className="w-[80px] h-[80px] rounded-full text-center bg-white">
                            <img className='mx-auto pt-4' src={imge1} alt="" />
                        </div>
                        <div>
                            <h4 className="font_medium text-2xl md:text-3xl text-white">Premium</h4>
                            <h5 className="font_medium text-xl md:text-2xl text-white">Products</h5>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='flex items-center justify-center gap-5 md:gap-8'>
                        <div className="w-[80px] h-[80px] rounded-full text-center bg-white">
                            <img className='mx-auto pt-4' src={imge2} alt="" />
                        </div>
                        <div>
                            <h4 className="font_medium text-2xl md:text-3xl text-white">4000+</h4>
                            <h5 className="font_medium text-xl md:text-2xl text-white">Google Review</h5>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='flex items-center justify-center gap-5 md:gap-8'>
                        <div className="w-[80px] h-[80px] rounded-full text-center bg-white">
                            <img className='mx-auto pt-4' src={imge3} alt="" />
                        </div>
                        <div>
                            <h4 className="font_medium text-2xl md:text-3xl text-white">Delivery</h4>
                            <h5 className="font_medium text-xl md:text-2xl text-white">Across India</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;
