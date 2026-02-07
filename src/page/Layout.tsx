import Dashboard from "../Component/Dashboard"
import Sidebar from "../Component/Sidebar"

const Layout = () => {
  return (
    <div className="flex w-full h-full bg-primary ">
        <div className="  bg-sidebar-primary min-h-full w-16 lg:w-75 rounded-r-2xl shadow-lg ">
            <Sidebar/>
        </div>
        <div className="flex-1">
            <Dashboard/>
        </div>
    </div>
  )
}

export default Layout