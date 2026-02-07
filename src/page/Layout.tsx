import Dashboard from "../Component/Dashboard"
import Sidebar from "../Component/Sidebar"

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-primary ">
        <div className=" sm:w-xs bg-sidebar-primary rounded-r-2xl shadow-lg ">
            <Sidebar/>
        </div>
        <div className="flex-1">
            <Dashboard/>
        </div>
    </div>
  )
}

export default Layout