import { Laptop2, LayoutList, Maximize2, Mic2, Volume1Icon } from "lucide-react";

export function FunctionsDiv(){
    return(
        <div className="flex items-center gap-3">
            <Mic2 size={18} />
            <LayoutList size={18} />
            <Laptop2 size={18} />
            <div className="flex items-center gap-2">
                <Volume1Icon size={18} />
                <div className="h-1 rounded-full w-20 bg-zinc-600">
                    <div className="bg-zinc-200 w-10 h-1 rounded-full" />
                </div>
            </div>
            <Maximize2 size={18} />
        </div>
    )
}