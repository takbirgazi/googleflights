

import locationIcon from "../../assets/images/location.svg";
import dateIcon from "../../assets/images/dateIcon.svg";

const SearchFlights = () => {
    return (
        <div className="max-w-7xl mx-auto p-5">
            <div className="bg-white shadow-md p-5 rounded-md -mt-20 md:-mt-28">
                <form action="" className="flex lg:flex-row flex-col md:py-10 gap-5 w-full justify-center">
                    <div className="flex items-center gap-1 w-full">
                        <img className="-mr-7 z-10" src={locationIcon} alt="Location" />
                        <input className="w-full placeholder:text-gray-700 text-gray-900 outline-none px-2 py-3 pl-8 border rounded-md border-gray-700" type="text" placeholder="From" />
                    </div>
                    <div className="flex items-center gap-1 w-full">
                        <img className="-mr-7 z-10" src={locationIcon} alt="Location" />
                        <input className="w-full placeholder:text-gray-700 text-gray-900 outline-none px-2 py-3 pl-8 border rounded-md border-gray-700" type="text" placeholder="To" />
                    </div>
                    <div className="flex items-center gap-1 w-full">
                        <img className="-mr-7 z-10" src={dateIcon} alt="Date" />
                        <input className="no-calendar-icon w-full placeholder:text-gray-700 text-gray-900 outline-none px-2 py-3 pl-8 border rounded-md border-gray-700" type="date" placeholder="Date" />
                    </div>
                    {/* <div className="flex items-center gap-1 w-full">
                        <img className="-mr-7 z-10" src={locationIcon} alt="Location" />
                        <input className="w-full placeholder:text-gray-700 text-gray-900 outline-none px-2 py-3 pl-8 border rounded-md border-gray-700" type="text" placeholder="From" />
                    </div> */}
                    <div className="-ml-2">
                        <input className="text-gray-900 outline-none px-5 cursor-pointer py-3 border rounded-md border-[#ffb600] font-bold bg-[#ffb600] hover:bg-[#eca502]" type="submit" value="Search Flights" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SearchFlights;