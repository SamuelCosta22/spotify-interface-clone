import Image from "next/image";

import { Play } from "lucide-react";

export function RecomendedSongs(){
    return(
        <a href="" className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/album.jpg" width={80} height={80} alt="Capa do álbum Wasting Light da banda Foo Fighters" />
            <strong>Wasting Light</strong>
            <button className="invisible group-hover:visible w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play fill="true" size={20} />
            </button>
        </a>
    )
}