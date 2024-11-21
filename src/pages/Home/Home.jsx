import Hero from "../../components/Hero/Hero";
import mapImage from "../../assets/images/map.svg";
import SearchFlights from "./SearchFlights";
import PopularPlace from "./PopularPlace";

const Home = () => {


    // const url = 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/getPriceCalendar?originSkyId=BOM&destinationSkyId=JFK&fromDate=2024-02-20&currency=USD';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'x-rapidapi-key': '99ccc20e2amsha9ae9912521b3d4p1e8ac2jsn744228d8b99e',
    //         'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
    //     }
    // };

    // useEffect(() => {
    //     fetch(url, options)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])


    return (
        <div className="bg-white">
            <Hero />
            <SearchFlights />
            <PopularPlace />
            <div className="max-w-7xl mx-auto p-10">
                <div className="flex w-full h-full justify-center items-center">
                    <img src={mapImage} alt="Map" />
                </div>
            </div>
        </div>
    );
};

export default Home;