import NavBar from "../components/NavBar";
import Products from "../sections/Agricultural Products/Products";
import Border from "../sections/Border/Border";
import ContactUs from "../sections/Contact Us/ContactUs";
import Customers from "../sections/customers/Customers";
import Footer from "../sections/Footer/Footer";
import LandscapeProducts from "../sections/Landscape Products/LandscapeProducts";
import Slider from "../sections/Slider";
import CustomersLove from "../sections/Why Customers Love/CustomersLove";
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
{/* Border */}
            <Border></Border>
            {/* Customers Love */}
            <CustomersLove></CustomersLove>
            {/* Contact Us */}
            <ContactUs></ContactUs>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Home;