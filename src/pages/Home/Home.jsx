import Hero from "../../components/Hero/Hero";
import mapImage from "../../assets/images/map.svg";
import SearchFlights from "./SearchFlights";
import Flights from "./Flights";

const Home = () => {
    return (
        <div className="bg-white">
            <Hero />
            <SearchFlights />
            <Flights />
            <div className="max-w-7xl mx-auto p-10">
                <div className="flex w-full h-full justify-center items-center">
                    <img src={mapImage} alt="Map" />
                </div>
            </div>
        </div>
    );
};

export default Home;