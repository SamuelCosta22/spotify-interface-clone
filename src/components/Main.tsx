import { RecomendedMix } from "@/components/RecomendedMix";
import { RecomendedSongs } from "@/components/RecomendedSongs";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function Main(){
    return(
        <main className="flex-1 p-6">
            <div className="flex items-center gap-4">
                <button className="p-1 rounded-full bg-black/40"><ChevronLeft /></button>
                <button className="p-1 rounded-full bg-black/40"><ChevronRight /></button>
            </div>
            
            <h1 className="font-semibold text-2xl mt-10">Good Afternoon</h1>

            <div className="grid grid-cols-3 gap-4 mt-4">
                <RecomendedSongs />
                <RecomendedSongs />
                <RecomendedSongs />
                <RecomendedSongs />
                <RecomendedSongs />
                <RecomendedSongs />
            </div>

            <h2 className="font-semibold text-xl mt-10">Made for Samuel Gomes Costa</h2>

            <div className="grid grid-cols-8 gap-4 mt-4">
                <RecomendedMix />
                <RecomendedMix />
                <RecomendedMix />
                <RecomendedMix />
                <RecomendedMix />
            </div>
        </main>
    )
}