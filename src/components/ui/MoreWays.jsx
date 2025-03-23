import { Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MoreWays() {
    return (
        <div className="w-full border-t-2 pt-2 mt-28 h-32">
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                    <Gem className="w-5 h-5 mt-1" />
                    <h1 className="text-xl">More ways to use AtCapacity</h1>
                </div>
            </div>

            <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide pb-5 text-[0.9rem]">
                <Link href="/discover" className="flex-shrink-0">
                    <Image src="/discover.jpg" width={1000} height={200} alt="kcc" className="w-60 h-30 border object-cover rounded-xl mb-1  bg-gray-200"></Image>
                    <p>Discover Something New</p>
                    <p className="text-[0.8rem]">Go to discover</p>
                </Link>

                <Link href="/search" className=" flex-shrink-0">
                    <Image src="/search.png" width={100} height={40} alt="kcc" className="w-60 h-30 border object-cover rounded-xl mb-1 bg-gray-200"></Image>
                    <p>Search for a Facility</p>
                    <p className="text-[0.8rem]">Go to search</p>
                </Link>
                <Link href="/profile" className=" flex-shrink-0">
                    <Image src="/customize.jpeg" width={100} height={40} alt="kcc" className="w-60 h-30 border object-cover rounded-xl mb-1 bg-gray-200"></Image>
                    <p>Customize Your Profile</p>
                    <p className="text-[0.8rem]">Edit profile</p>
                </Link>
            </div>
        </div >
    );
}
