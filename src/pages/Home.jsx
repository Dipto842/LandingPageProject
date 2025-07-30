import NavBar from "../components/NavBar";
import Products from "../sections/Agricultural Products/Products";
import LandscapeProducts from "../sections/Landscape Products/LandscapeProducts";
import Slider from "../sections/Slider";


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
        </div>
    );
};

export default Home;