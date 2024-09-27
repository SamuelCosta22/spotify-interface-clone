import Image from "next/image";

import { PlayDiv } from "./PlayDiv";
import { FunctionsDiv } from "./FunctionsDiv";

export function Footer(){
    return(
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Image src="/album.jpg" className="w-full" width={22} height={22} alt="Capa do álbum Wasting Light da banda Foo Fighters" />   
                <div className="flex flex-col">
                    <strong className="font-normal">Rope</strong>
                    <span className="text-xs text-zinc-400">Foo Fighters</span>
                </div> 
            </div>

            <PlayDiv />

            <FunctionsDiv />
        </footer>
    )
}