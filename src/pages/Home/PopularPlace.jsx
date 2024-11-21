
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PopularPlace = () => {
    const [flights, setFlights] = useState([]);

    // Access the location object
    const location = useLocation();

    // Parse the query parameters
    const searchParams = new URLSearchParams(location.search);
    const fromLocation = searchParams.get('fromLocation');
    const toLocation = searchParams.get('toLocation');
    const fightDate = searchParams.get('fightDate');

    // 8 No API
    useEffect(() => {
        const url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/getPriceCalendar?originSkyId=${fromLocation}&destinationSkyId=${toLocation}&fromDate=${fightDate}&currency=USD`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '99ccc20e2amsha9ae9912521b3d4p1e8ac2jsn744228d8b99e',
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
    }, [])



    return (
        <div className="max-w-7xl mx-auto p-5">
            <div className="">
                <h2 className="font-bold text-lg md:text-3xl text-gray-900">Popular right now</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between py-8">

                    {
                        flights.map(flight => <div key={flight.id} className="bg-white rounded-md shadow-lg overflow-hidden flex gap-5 items-center border">
                            <div className="flex flex-col p-7 w-full">
                                <h4 className="font-bold text-lg"> Date: 2023-08-07</h4>
                                <p className="py-2">Group: high</p>
                                <strong>Price: 1027.98$</strong>
                            </div>
                        </div>)
                    }

                    <div className="bg-white rounded-md shadow-lg overflow-hidden flex gap-5 items-center border">
                        <div className="flex flex-col p-7 w-full">
                            <h4 className="font-bold text-lg"> Date: 2023-08-07</h4>
                            <p className="py-2">Group: high</p>
                            <strong>Price: 1027.98$</strong>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PopularPlace;