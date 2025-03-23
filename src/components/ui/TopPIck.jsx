import { ArrowUpNarrowWide } from "lucide-react";
import { useState } from "react";
import { ChevronRight, Pin } from "lucide-react";

export default function TopPick({ gym }) {

    const [opened, isOpened] = useState(false)
    return (
        <div className="w-full border-t-2 pt-2 mb-3">
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                    <ArrowUpNarrowWide className="w-5 h-5 mt-1 text-green-400" />
                    <h1 className="text-xl">Book Soon</h1>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="w-full border-gray-300 border-dashed border p-4 text-[0.8rem]">
                    <div className="flex justify-between">
                        <div>
                            <p>Drop-In Badminton</p>
                            <p>{gym.name}</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="h-6 px-2 py-1 mb-1 items-center flex rounded-2xl bg-blue-200">
                                <p className="text-blue-500">
                                    New
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="w-full border-gray-300 border border-dashed p-4 text-[0.8rem]">
                    <div className="flex justify-between">
                        <div>
                            <p>Hot Yoga</p>
                            <p>Oxygen Yoga & Fitness</p>
                        </div>

                        <div>
                            <div className="border h-6 px-2 py-1 items-center text-center mb-2 flex rounded-2xl bg-orange-200">
                                <p className="text-orange-500 text-center">
                                    Trending
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>





        </div >
    )
}