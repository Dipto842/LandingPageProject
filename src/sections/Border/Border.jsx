import '../../Style/style.css'
import img1 from '../../../public/Imges/Website-Page/Group 449.svg'

const Border = () => {
    return (
        <div className="mt-48">
            <div className=" border  box-border w-full text-left bg-[#D9ECFF] flex items-center -rotate-3 pl-4">
<div className='flex items-center gap-10'>
    <img src={img1} alt="" />
    <h1 className="font_medium text-black text-2xl h-[95px] pt-6">quality product</h1>
</div>
<div className='flex items-center gap-10'>
    <img src={img1} alt="" />
    <h1 className="font_medium text-black text-2xl h-[95px] pt-6">shipping across India</h1>
</div>
<div className='flex items-center gap-10'>
    <img src={img1} alt="" />
    <h1 className="font_medium text-black text-2xl h-[95px] pt-6">quality product</h1>
</div>
<div className='flex items-center gap-10'>
    <img src={img1} alt="" />
    <h1 className="font_medium text-black text-2xl h-[95px] pt-6">shipping across India</h1>
</div>
            </div>
        </div>
    );
};

export default Border;