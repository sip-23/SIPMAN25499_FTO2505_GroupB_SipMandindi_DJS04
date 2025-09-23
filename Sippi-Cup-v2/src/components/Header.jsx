import { IoBookOutline, IoNotificationsOutline, IoSearchOutline, IoPersonOutline } from "react-icons/io5";
import { useState } from "react";

/**
 * Header Component
 *
 * A fixed top navigation bar
 * @component
 */
const Header = () => {
    const [searchValue, setSearchValue] = useState("");

    const darkLogo = {id: 2, image: "./src/assets/SippiCupPod Logo Dark NoBG.png", alt: "Dark mode logo"};

    return (
        <div className="top-0 left-0 right-0 bg-[#121212] w-full h-fit px-5 py-2 relative flex-1 flex items-center justify-between z-50 border-b border-[#333]">

            {/* Icon Container */}
            {darkLogo && (
                <img 
                    className="flex w-[200px] h-12 md:w-[170px]" 
                    src={darkLogo.image} 
                    alt={darkLogo.alt} 
                />
            )}
            
            
            {/* Search container */}
            <div className="flex items-center w-[350px] h-10 px-3">
                <IoSearchOutline color="#b3b3b3" className=" mr-3" size={22}/>
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="border rounded-md opacity-30 bg-[#121212] w-full py-2 px-4 placeholder:text-[#b3b3b3] text-white hover:border-[#9A7B4F]" 
                />
            </div>
            
            {/* Icons container */}
            <div className="flex items-center justify-center">
                <div className="hidden md:block rounded-full w-10 h-10 bg-[#65350F] grid place-items-center cursor-pointer hover:bg-[#9A7B4F] mr-3 p-2">
                    <IoNotificationsOutline color="#b3b3b3" size={22}/>
                </div>
                <div className="hidden md:flex rounded-full w-10 h-10 bg-[#65350F] grid place-items-center cursor-pointer hover:bg-[#9A7B4F] mr-3 p-2">
                    <IoBookOutline color="#b3b3b3" size={22} />
                </div>
                <div className="rounded-full w-10 h-10 bg-[#65350F] grid place-items-center cursor-pointer hover:bg-[#9A7B4F] mr-3">
                    <IoPersonOutline color="#b3b3b3" size={22} />
                </div>
            </div>
        </div>
    );
};

export default Header;