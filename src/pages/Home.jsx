import NavBar from "../components/NavBar";
import Products from "../sections/Agricultural Products/Products";
import Customers from "../sections/customers/Customers";
import LandscapeProducts from "../sections/Landscape Products/LandscapeProducts";
import Slider from "../sections/Slider";
import WhyUs from "../sections/Why Us/WhyUs";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            {/* Hedar Slider */}
            <Slider></Slider>
            {/* Agricultural Products */}
            <Products></Products>
            {/* Landscape Products */}
            <LandscapeProducts></LandscapeProducts>
            {/* customers */}
           <Customers></Customers>
           {/* Why Us */}
           <WhyUs></WhyUs>
        </div>
    );
};

export default Home;