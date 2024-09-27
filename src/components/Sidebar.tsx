import { Playlists } from "./Playlists";
import { AsideMenu } from "./AsideMenu";

import { HomeIcon, Library, Search } from "lucide-react";

export function SideBar(){
  return(
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <nav className="space-y-5 mt-10">
        <AsideMenu icon={<HomeIcon />} name="Home" />
        <AsideMenu icon={<Search />} name="Search" />
        <AsideMenu icon={<Library />} name="Your Library" />
      </nav>

      <Playlists />
    </aside>
  )
}