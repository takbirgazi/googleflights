import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-[#181a25]">
            <div className="max-w-7xl mx-auto p-10">
                <div className="flex justify-between gap-5 pb-2 md:pb-5 flex-col md:flex-row">
                    <div className="w-full md:w-4/6">
                        <h2 className="text-lg md:text-xl font-bold text-gray-200 py-2 md:py-5">ABOUT GOOGLE FLIGHTS</h2>
                        <p className="text-gray-200 text-sm">We provide our customers with a range of discount and savings options when searching for airfares. Our comprehensive search process encompasses over 500 airlines and compares hundreds of travel sites at once, ensuring you find the most competitive rates available. We are passionate about making travel more accessible and enjoyable for everyone, and we are constantly striving to improve our offerings and exceed customer expectations.</p>
                    </div>
                    <div className="w-full md:w-2/6">
                        <h2 className="text-lg md:text-xl font-bold text-gray-200 py-2 md:py-5">USEFUL LINKS</h2>
                        <div>
                            <ul className="pb-3 md:pb-9 w-full md:w-2/3">
                                <li className="border-b text-sm text-gray-200 border-[#4d859f] py-1"><NavLink to="#">About Us</NavLink></li>
                                <li className="border-b text-sm text-gray-200 border-[#4d859f] py-1"><NavLink to="#">Terms of Use</NavLink></li>
                                <li className="border-b text-sm text-gray-200 border-[#4d859f] py-1"><NavLink to="#">Privacy Policy</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="text-gray-200 text-sm">Flight-Fare.com is a digital-first travel company, revolutionizing the industry by harnessing technology to simplify, personalize, and elevate our customers travel experiences. Our cutting-edge platform seamlessly integrates flight planning and booking, offering a personalized experience tailor-made to each customers preferences. We partner with major travel providers to negotiate deep discounts on unsold inventory. This means you can save big on your next trip, even if you are booking at the last minute.</p>
            </div>
            <div className="bg-[#002537]">
                <div className="max-w-7xl mx-auto p-5">
                    <p className="text-gray-200 text-sm ml-5">Copyright © {new Date().getFullYear()} Google Flights. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;