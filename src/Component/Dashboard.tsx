import { tasks } from "../data"
import ActionButton from "./ActionButton"
import CardHolder from "./CardHolder"
import TaskBar from "./TaskBar"
import TaskList from "./TaskList"

const Dashboard = () => {
  return (
    <div className="flex flex-col">
        <TaskBar/>
        <CardHolder/>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 px-4 mb-8">
            <ActionButton label="Check Calendar" iconType="calendar" />
            <ActionButton label="Manage Cases" iconType="cases" />
            <ActionButton label="Check Docs" iconType="docs" />
            <ActionButton label="All Tools" iconType="tools" />
            <ActionButton label="Raise Tickets" iconType="tickets" />
            <ActionButton label="Take Notes" iconType="notes" />
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 px-4">
            <TaskList tasks={tasks}/>
        </div>
    </div>
  )
}

export default Dashboard