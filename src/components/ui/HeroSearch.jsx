"use client"

import { Info, Search } from "lucide-react"
import { Input } from "./input"
import { Button } from "./button"
import { useEffect, useState } from "react"
import { useDebouncedCallback } from 'use-debounce';
import Facility from "./Facility"
import { Dumbbell, Users, MapPin, Compass, TrendingUp, Badge, Star, Clock, History } from "lucide-react"



export default function HeroSearch() {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState(null);

    const debouncedSearch = useDebouncedCallback(async (query) => {
        if (query.trim() === "") return; // Avoid empty queries
        const response = await fetch(`/api/search?query=${query}`);
        const data = await response.json();
        setResults(data)
        console.log(data);
    }, 2000);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center mt-[10%]">AtCapacity</h1>
            {/* <Search size={32} className="mt-14"></Search> */}
            <div className="relative w-full mt-5 mb-1">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="search for facilities"
                    className="pl-9 bg-muted/50 border-muted transition-all focus:shadow-md focus:border-primary/30"
                    onChange={(e) => {
                        const newQuery = e.target.value;
                        setQuery(newQuery);
                        debouncedSearch(newQuery); // Call debounced function
                    }
                    }
                />
            </div>
            <div className="flex flex-col gap-5 my-5 w-full overflow-scroll">
                {results ? results.map((result) => { return <Facility key={result.name} gym={result} /> }) :
                    // <div className="w-full flex flex-col gap-4">
                    //     <h1 className="mb-2 text-[1rem]">Start browsing</h1>
                    //     <div className="flex gap-4">
                    //         <div className="w-full h-36 border p-3 bg-purple-400 rounded-2xl"
                    //             onClick={() => {
                    //                 const asyncFunction = async () => {
                    //                     const response = await fetch(`/api/search?query=${query}`);
                    //                     const data = await response.json();
                    //                     setResults(data)
                    //                 }
                    //                 asyncFunction();
                    //             }}>
                    //             Nearby
                    //         </div>
                    //         <div className="w-full h-36 border p-3 bg-red-400 rounded-2xl">
                    //             Courts
                    //         </div>
                    //     </div>
                    //     <div className="flex gap-4">
                    //         <div className="w-full h-36 border p-3 bg-blue-400 rounded-2xl">
                    //             Gyms
                    //         </div>
                    //         <div className="w-full h-36 border p-3 bg-green-400 rounded-2xl">
                    //             Classes
                    //         </div>
                    //     </div>

                    //     <div className="border w-full h-30 bg-gray-300 rounded-2xl flex items-center p-4">
                    //         <Info className="w-6 h-6 text-yellow-600 mr-4"></Info>
                    //         <p className="text-[0.9rem] w-[90%]">
                    //             Tip: Create a profile to mark your favorite facilities, recieve notifications and more.
                    //         </p>
                    //     </div>
                    // </div>
                    <div className="flex-1 px-4 pb-20">
                        {/* Recent searches - Spotify inspired */}
                        <div className="mb-6 mt-2">
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="text-base font-semibold">Recent searches</h2>
                                <button className="text-xs text-primary">See all</button>
                            </div>

                            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                                <div className="flex-shrink-0 flex flex-col items-center">
                                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-1 relative">
                                        <Dumbbell className="h-6 w-6 text-blue-500" />
                                        <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-background"></div>
                                    </div>
                                    <span className="text-xs">ARC Gym</span>
                                </div>
                                <div className="flex-shrink-0 flex flex-col items-center">
                                    <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-1 relative">
                                        <svg
                                            className="h-6 w-6 text-red-500"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                                            <line x1="12" y1="6" x2="12" y2="18" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <span className="text-xs">Tennis</span>
                                </div>
                                <div className="flex-shrink-0 flex flex-col items-center">
                                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-1">
                                        <Users className="h-6 w-6 text-green-500" />
                                    </div>
                                    <span className="text-xs">Yoga</span>
                                </div>
                                <div className="flex-shrink-0 flex flex-col items-center">
                                    <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-1">
                                        <MapPin className="h-6 w-6 text-purple-500" />
                                    </div>
                                    <span className="text-xs">UBC</span>
                                </div>
                            </div>
                        </div>

                        {/* Start browsing section */}
                        <div className="mb-6">
                            <h2 className="text-base font-semibold mb-3">Start browsing</h2>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="relative overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-purple-400 to-purple-600 p-4 flex flex-col justify-between group">
                                    <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-purple-300/30 backdrop-blur-sm"></div>
                                    <div className="absolute right-4 bottom-4 w-12 h-12 rounded-full bg-purple-300/30 backdrop-blur-sm"></div>

                                    <Compass className="h-8 w-8 text-white mb-2" />
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Nearby</h3>
                                        <p className="text-xs text-purple-100">Find facilities close to you</p>
                                    </div>

                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                                </div>

                                <div className="relative overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-red-400 to-red-600 p-4 flex flex-col justify-between group">
                                    <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-red-300/30 backdrop-blur-sm"></div>
                                    <div className="absolute right-4 bottom-4 w-12 h-12 rounded-full bg-red-300/30 backdrop-blur-sm"></div>

                                    <svg
                                        className="h-8 w-8 text-white mb-2"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                                        <line x1="12" y1="6" x2="12" y2="18" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Courts</h3>
                                        <p className="text-xs text-red-100">Basketball, tennis & more</p>
                                    </div>

                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                                </div>

                                <div className="relative overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-blue-400 to-blue-600 p-4 flex flex-col justify-between group">
                                    <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-blue-300/30 backdrop-blur-sm"></div>
                                    <div className="absolute right-4 bottom-4 w-12 h-12 rounded-full bg-blue-300/30 backdrop-blur-sm"></div>

                                    <Dumbbell className="h-8 w-8 text-white mb-2" />
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Gyms</h3>
                                        <p className="text-xs text-blue-100">Workout spaces & equipment</p>
                                    </div>

                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                                </div>

                                <div className="relative overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-green-400 to-green-600 p-4 flex flex-col justify-between group">
                                    <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-green-300/30 backdrop-blur-sm"></div>
                                    <div className="absolute right-4 bottom-4 w-12 h-12 rounded-full bg-green-300/30 backdrop-blur-sm"></div>

                                    <Users className="h-8 w-8 text-white mb-2" />
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Classes</h3>
                                        <p className="text-xs text-green-100">Yoga, fitness & more</p>
                                    </div>

                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                                </div>
                            </div>
                        </div>

                        {/* Trending now - Spotify inspired */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="text-base font-semibold flex items-center">
                                    <TrendingUp className="h-4 w-4 mr-1 text-primary" />
                                    Trending now
                                </h2>
                                <button className="text-xs text-primary">Refresh</button>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center p-3 bg-muted/40 rounded-lg hover:bg-muted/60 transition-colors">
                                    <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center mr-3">
                                        <Dumbbell className="h-5 w-5 text-blue-500" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center">
                                            <h3 className="font-medium text-sm">ARC Fitness Center</h3>
                                            <Badge className="ml-2 bg-green-500/10 text-green-600 text-[10px]">60% Full</Badge>
                                        </div>
                                        <p className="text-xs text-muted-foreground">Most popular this morning</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-3 bg-muted/40 rounded-lg hover:bg-muted/60 transition-colors">
                                    <div className="w-10 h-10 rounded-md bg-red-100 flex items-center justify-center mr-3">
                                        <svg
                                            className="h-5 w-5 text-red-500"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                                            <line x1="12" y1="6" x2="12" y2="18" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center">
                                            <h3 className="font-medium text-sm">Basketball Courts</h3>
                                            <Badge className="ml-2 bg-yellow-500/10 text-yellow-600 text-[10px]">High Demand</Badge>
                                        </div>
                                        <p className="text-xs text-muted-foreground">Booking quickly for today</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-3 bg-muted/40 rounded-lg hover:bg-muted/60 transition-colors">
                                    <div className="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center mr-3">
                                        <Users className="h-5 w-5 text-green-500" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center">
                                            <h3 className="font-medium text-sm">Evening Yoga Class</h3>
                                            <Badge className="ml-2 bg-blue-500/10 text-blue-600 text-[10px]">New</Badge>
                                        </div>
                                        <p className="text-xs text-muted-foreground">5 spots remaining</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tip section - Enhanced */}
                        <div className="mb-6 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
                            <div className="flex">
                                <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center mr-3 flex-shrink-0">
                                    <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-amber-900 mb-1">Pro Tip</h3>
                                    <p className="text-sm text-amber-800">
                                        Create a profile to mark your favorite facilities, receive notifications and more.
                                    </p>
                                </div>
                            </div>
                            <button className="mt-3 text-sm font-medium text-amber-900 bg-amber-200 hover:bg-amber-300 transition-colors py-1.5 px-3 rounded-lg w-full">
                                Create Profile
                            </button>
                        </div>

                        {/* For you - Spotify inspired */}
                        <div className="mb-6">
                            <h2 className="text-base font-semibold mb-3 flex items-center">
                                <Star className="h-4 w-4 mr-1 text-yellow-500" />
                                For you
                            </h2>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-muted/40 rounded-lg p-3 hover:bg-muted/60 transition-colors">
                                    <div className="flex items-center mb-2">
                                        <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                                        <span className="text-xs text-muted-foreground">Based on your schedule</span>
                                    </div>
                                    <h3 className="font-medium text-sm mb-1">Morning Workout</h3>
                                    <p className="text-xs text-muted-foreground">Gyms with low traffic 6-8AM</p>
                                </div>

                                <div className="bg-muted/40 rounded-lg p-3 hover:bg-muted/60 transition-colors">
                                    <div className="flex items-center mb-2">
                                        <History className="h-4 w-4 text-muted-foreground mr-1" />
                                        <span className="text-xs text-muted-foreground">Based on history</span>
                                    </div>
                                    <h3 className="font-medium text-sm mb-1">Weekend Tennis</h3>
                                    <p className="text-xs text-muted-foreground">Courts available this weekend</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>

    )
}