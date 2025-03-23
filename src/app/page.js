"use client"

import { useState, useEffect, createContext } from "react";

import TypeSelect from "@/components/ui/TypeSelect";
import HeroSearch from "@/components/ui/HeroSearch";
import Image from "next/image";
import { gymContext } from "@/contexts/gymContext";
import Featured from "@/components/ui/Featured";
import MoreWays from "@/components/ui/MoreWays";
import TopPick from "@/components/ui/TopPIck";

export default function Home() {

  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    loading: true,
    error: false
  });

  const [gyms, setGyms] = useState([]);

  useEffect(() => {


    if (!navigator.geolocation) {
      setLocation({ ...location, loading: false, error: "Geolocation is not supported" });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          loading: false,
          error: false
        });

      },
      () => {
        console.log("IT FAILED TO UPDATE THE LOCATION");
        setLocation({ ...location, loading: false, error: "unable to retrieve location" });
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );


  }, []);

  useEffect(() => {
    async function getNearbyGyms() {
      if (location.latitude !== null && location.longitude !== null) {
        console.log("Fetching gyms with:", location.latitude, location.longitude);
        const response = await fetch(`/api/gyms?latitude=${location.latitude}&longitude=${location.longitude}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setGyms(data);
        console.log("Fetched gyms:", data);
      }
    }

    getNearbyGyms();
  }, [location.latitude, location.longitude]);


  const top = {
    "id": "123",
    "name": "BirdCoop Gym",
    "currentOccupancy": 50,
    "totalCapacity": 80,
    "location": {
      "street": "6000 Student Union Blvd",
      "city": "Vancouver, BC",
      "postal": "V6T 1Z1",
      "latitude": 49.2606,
      "longitude": -123.2460
    },
    "owner": "UBC Recreation",
    "hours": "06:30-22:00",
    "link": "https://www.recreation.ubc.ca/",
    "type": "GYM",
    "isOpen": true
  }



  return (
    <div className="flex flex-col p-4 w-full overflow-scroll mb-16">
      <h1 className="text-4xl font-bold text-center mt-[10%]">AtCapacity</h1>
      <gymContext.Provider value={{ gyms, setGyms }}>
        {/* <HeroSearch /> */}
        <TypeSelect location={location} />
        <TopPick gym={top} />
        <Featured />
        <MoreWays />
      </gymContext.Provider>
    </div>

  );
}
