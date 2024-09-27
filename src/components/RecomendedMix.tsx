import Image from "next/image";

export function RecomendedMix(){
    return(
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
            <Image src="/album.jpg" className="w-full" width={80} height={80} alt="Capa do álbum Wasting Light da banda Foo Fighters" />
            <strong className="font-semibold">Daly Mix 1</strong>
            <span className="text-xs text-zinc-500">Wallows, COIN, girl in red and more</span>
        </a>
    )
}