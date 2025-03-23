import { Circle, Home, Search, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {

    return (
        <div className="fixed bottom-0 bg-white z-20 left-0 w-full h-16 border grid grid-cols-4 items-center justify-center">
            <Link href="/">
                <Home size={30} className="mx-auto" />
            </Link>
            <Link href="/search">
                <Search size={30} className="mx-auto" />
            </Link>
            <Link href="/discover">
                <TrendingUp size={30} className="mx-auto" />
            </Link>
            <Link href="/profile">
                <Circle size={30} className="mx-auto" />
            </Link>

        </div>
    )

}