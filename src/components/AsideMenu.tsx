import { ReactNode } from "react"

interface AsideMenu {
    icon: ReactNode
    name: string
}

export function AsideMenu({ icon, name }: AsideMenu){
    return(
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            {icon}
            {name}
        </a>
    )
}