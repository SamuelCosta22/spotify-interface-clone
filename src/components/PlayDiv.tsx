import { Play, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react";

export function PlayDiv(){
  return(
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-4">
        <Shuffle size={20} className="text-zinc-400" />
        <SkipBack size={20} className="text-zinc-200" />
        <button className="w-6 h-6 flex items-center justify-center pl-0.5 rounded-full bg-white text-black">
          <Play size={20} className="text-zinc-200" fill="true" />
        </button>
        <SkipForward size={20} className="text-zinc-200" />
        <Repeat size={20} className="text-zinc-400" />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-zinc-400">0:31</span>
        <div className="h-1 rounded-full w-96 bg-zinc-600">
          <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
        </div>
        <span className="text-xs text-zinc-400">2:14</span>
      </div>
    </div>
  )
}