
import { useContext } from "react"
import Facility from "./Facility"
import { gymContext } from "@/contexts/gymContext"
import { GlobeLock, RefreshCcw } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";


export default function FacilitiesList({ type, location }) {
    const [visibleCount, setVisibleCount] = useState(3);

    const handleLoadMore = () => {
        setVisibleCount(gyms.length); // Show all gyms
    };

    const { gyms, setGyms } = useContext(gymContext)
    // POSSUBLY ALSO ADD RATINGS + PICTURE + PHONE NUMBER + DISTANCE KM


    return (
        <div className="w-full">
            <div className="flex justify-between mt-10 items-center mb-2">
                <div className="flex gap-2 ">
                    <GlobeLock className="w-5 h-5 mt-1" />
                    <h1 className="text-xl">{type}</h1>
                </div>

                <div className="flex text-[0.7rem] gap-4">
                    <RefreshCcw className="w-4 h-4" onClick={() => window.location.reload()} />
                    <p>View All</p>
                </div>

            </div>

            <div className="w-full flex items-center flex-col gap-5 h-full mb-4">
                {/* {location.error && <p className="font-thin">{location.error}</p>} */}
                {/* maybe just show first 3 but request 6-7 */}
                {gyms.slice(0, visibleCount).map(gym => {
                    return <Facility key={gym.name} gym={gym} />
                })}

                <Button className="w-36 h-8 bg-white border border-black text-black active:scale-95" onClick={() => setVisibleCount(gyms.length)}>Load More</Button>
            </div>

        </div>
    )
}