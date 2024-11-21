

import locationIcon from "../../assets/images/location.svg";
import dateIcon from "../../assets/images/dateIcon.svg";
import searchIcon from "../../assets/images/search.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchFlights = () => {
    const navigate = useNavigate();
    const [flights, setFlights] = useState([]);
    const [fromValue, setFromValue] = useState([]);
    const [showFrom, setShowFrom] = useState(false);
    const [toValue, setToValue] = useState([]);
    const [showTo, setShowTo] = useState(false);
    const [searchValue, setSearchValue] = useState("new")

    useEffect(() => {
        const url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${searchValue ? searchValue : "new"}&locale=en-US`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '6d801c5b49msh83ee398ea646c58p11524djsnd9204d85ee4a',
                'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
            }
        };
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                if (data.message == "You have exceeded the MONTHLY quota for Requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/apiheya/api/sky-scrapper") {
                    setFlights([]);
                    return;
                }
                setFlights(data?.data);
            })
    }, [searchValue]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const fromLocation = event.target.fromLocation.value;
        const toLocation = event.target.toLocation.value;
        const fightDate = event.target.fightDate.value;
        navigate(`?fromLocation=${fromLocation}&toLocation=${toLocation}&fightDate=${fightDate}`)
    }

    return (
        <div className="max-w-7xl mx-auto p-5">
            <div className="bg-white shadow-md p-5 rounded-md -mt-20 md:-mt-28">
                <div className="flex items-center gap-1 w-full mb-3 md:mb-0 md:w-1/2 mx-auto relative">
                    <img className="-mr-9 z-10" src={locationIcon} alt="Date" />
                    <input onChange={(e) => setSearchValue(e.target.value)} className="w-full mx-auto placeholder:text-gray-700 text-gray-900 outline-none px-2 pr-10 py-3 pl-8 border rounded-md border-gray-700" type="text" placeholder="Search Country" />
                    <img className="right-5 z-10 absolute h-7 w-7" src={searchIcon} alt="Search Country..." />
                </div>
                <form onSubmit={handleSubmit} action="" className="flex lg:flex-row flex-col md:py-10 gap-5 w-full justify-center">
                    <div className="flex items-center gap-1 w-full">
                        <img className="-mr-7 z-10" src={locationIcon} alt="Location" />

                        <div className="relative w-full">
                            <input onFocus={() => setShowFrom(!showFrom)} name="fromLocation" className="w-full placeholder:text-gray-700 text-gray-900 outline-none px-2 py-3 pl-8 border rounded-md border-gray-700" type="text" value={fromValue} placeholder="From ?" />
                            <ul className={`${showFrom && "hidden"} absolute left-0 right-0 mt-1 bg-white border border-gray-700 rounded-md shadow-md z-30 overflow-hidden`}>
                                {
                                    flights.map(flight => <li key={flight?.skyId}
                                        onClick={() => {
                                            setFromValue(flight?.skyId);
                                            setShowFrom(!showFrom);
                                        }} className="px-4 py-2 text-gray-700 hover:bg-[#ffb600] hover:text-white cursor-pointer">
                                        {flight?.presentation?.title}
                                    </li>)
                                }
                            </ul>
                        </div>

                    </div>
                    <div className="flex items-center gap-1 w-full">
                        <img className="-mr-7 z-10" src={locationIcon} alt="Location" />
                        <div className="relative w-full">
                            <input onFocus={() => setShowTo(!showTo)} name="toLocation" className="w-full placeholder:text-gray-700 text-gray-900 outline-none px-2 py-3 pl-8 border rounded-md border-gray-700" type="text" value={toValue} placeholder="To ?" />
                            <ul className={`${showTo && "hidden"} absolute left-0 right-0 mt-1 bg-white border border-gray-700 rounded-md shadow-md z-20 overflow-hidden`}>
                                {
                                    flights.map(flight => <li key={flight?.skyId}
                                        onClick={() => {
                                            setToValue(flight?.skyId);
                                            setShowTo(!showTo);
                                        }} className="px-4 py-2 text-gray-700 hover:bg-[#ffb600] hover:text-white cursor-pointer">
                                        {flight?.presentation?.title}
                                    </li>)
                                }
                            </ul>
                        </div>

                    </div>
                    <div className="flex items-center gap-1 w-full">
                        <img className="-mr-7 z-10" src={dateIcon} alt="Date" />
                        <input name="fightDate" className="no-calendar-icon w-full placeholder:text-gray-700 text-gray-900 outline-none px-2 py-3 pl-8 border rounded-md border-gray-700" type="date" placeholder="Date" required />
                    </div>

                    <div className="-ml-2">
                        <input className="text-gray-900 outline-none px-5 cursor-pointer py-3 border rounded-md border-[#ffb600] font-bold bg-[#ffb600] hover:bg-[#eca502]" type="submit" value="Search Flights" />
                    </div>

                </form>
            </div >
        </div >
    );
};

export default SearchFlights;