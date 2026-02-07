import { SideBarMenu } from "../data"
import type { SideBarMenuType } from "../types"



const Sidebar = () => {
  return (
    <div className=" hidden lg:flex mb:w-full min-h-screen p-6 flex-col justify-center items-center sticky top-0">

            <div className="flex justify-center items-center size-30 mb-8">
                <img src="/logo/logo.png" alt="logo" />
            </div>


        <nav className="w-full flex-1">
            <ul className="space-y-2 flex flex-col items-center justify-center">
                {SideBarMenu.map((item : SideBarMenuType) => (
                    <li key={item.id} className={` w-full rounded-xl transition-colors ${
                            item.active
                            ? 'bg-sidebar-secondary text-white'
                            : 'text-gray-400 hover:bg-sidebar-secondary hover:text-white'
                        }`}>
                        <button
                            className=" flex items-center gap-3 px-4 py-3 rounded-lg text-sm"
                    >
                            <img className="w-5 h-5 shrink-0" src={item.icon} alt={item.label}/>
                            <span className="truncate">{item.label}</span>
                        </button>
                    </li>
            ))}
            </ul>
        </nav>
        </div>

  )
}

export default Sidebar
