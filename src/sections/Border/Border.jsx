import '../../Style/style.css'
import img1 from '../../../public/Imges/Website-Page/Group 449.svg'

const Border = () => {
    return (
        <div className="mt-48">
            <div className="border box-border w-full text-left bg-[#D9ECFF] -rotate-3 pl-4 py-6">
                <div className="border  box-border w-full text-left bg-[#D9ECFF] flex items-center -rotate-3 pl-4">
                    <div className='flex items-center gap-4 sm:gap-10'>
                        <img src={img1} alt="" className='w-10 sm:w-auto' />
                        <h1 className="font_medium text-black text-xl sm:text-2xl h-[95px] pt-6 text-center sm:text-left">quality product</h1>
                    </div>
                    <div className='flex items-center gap-4 sm:gap-10'>
                        <img src={img1} alt="" className='w-10 sm:w-auto' />
                        <h1 className="font_medium text-black text-xl sm:text-2xl h-[95px] pt-6 text-center sm:text-left">shipping across India</h1>
                    </div>
                    <div className='flex items-center gap-4 sm:gap-10'>
                        <img src={img1} alt="" className='w-10 sm:w-auto' />
                        <h1 className="font_medium text-black text-xl sm:text-2xl h-[95px] pt-6 text-center sm:text-left">quality product</h1>
                    </div>
                    <div className='flex items-center gap-4 sm:gap-10'>
                        <img src={img1} alt="" className='w-10 sm:w-auto' />
                        <h1 className="font_medium text-black text-xl sm:text-2xl h-[95px] pt-6 text-center sm:text-left">shipping across India</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Border;
