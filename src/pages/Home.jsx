import NavBar from "../components/NavBar";
import Products from "../sections/Agricultural Products/Products";
import Slider from "../sections/Slider";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            {/* Hedar Slider */}
            <Slider></Slider>
            {/* Agricultural Products */}
            <Products></Products>
        </div>
    );
};

export default Home;