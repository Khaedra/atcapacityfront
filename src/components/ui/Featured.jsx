import { Star } from "lucide-react";
import Image from "next/image";

export default function Featured() {
    return (
        <div className="w-full border-t-2 pt-2 h-32">
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                    <Star className="w-5 h-5 mt-1" />
                    <h1 className="text-xl">Featured</h1>
                </div>
            </div>

            <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide pb-5 text-[0.9rem]">
                <div className="flex-shrink-0">
                    <Image src="/kcc.jpeg" width={1000} height={200} alt="kcc" className="w-60 h-30 border object-cover rounded-xl mb-1  bg-gray-200"></Image>
                    <p>Kerrisdale Community Center</p>
                    <p className="text-[0.8rem]">Kerrisdale, 0.6 km</p>
                </div>

                <div className=" flex-shrink-0">
                    <Image src="/dcc.jpg" width={100} height={40} alt="kcc" className="w-60 h-30 border object-cover rounded-xl mb-1 bg-gray-200"></Image>
                    <p>Dunbar Community Center</p>
                    <p className="text-[0.8rem]">Dunbar, 1.2 km</p>
                </div>
                <div className=" flex-shrink-0">
                    <Image src="/livewell.png" width={100} height={40} alt="kcc" className="w-60 h-30 border object-cover rounded-xl mb-1 bg-gray-200"></Image>
                    <p>Live Well Clinic</p>
                    <p className="text-[0.8rem]">West Blvd, 0.9 km</p>
                </div>
            </div>
        </div>
    );
}
