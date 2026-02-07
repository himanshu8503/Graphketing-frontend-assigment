import type { CardProps, SideBarMenuType, Task } from "./types";

export const SideBarMenu : SideBarMenuType[] = [
    { id: 1, label: 'Dashboard', icon: "/Sidebar_Element/Dashboard.png", active: true },
    { id: 2, label: 'Category 2', icon: "/Sidebar_Element/Task.png", active: false },
    { id: 3, label: 'Category 3', icon: "/Sidebar_Element/Client.png", active: false },
    { id: 4, label: 'Category 4', icon: "/Sidebar_Element/Team.png", active: false },
    { id: 5, label: 'Category 5', icon: "/Sidebar_Element/Invoice.png", active: false },
    { id: 6, label: 'Category 6', icon: "/Sidebar_Element/Chat.png", active: false },
    { id: 7, label: 'Category 7', icon: "/Sidebar_Element/Tickets.png", active: false },
    { id: 8, label: 'Category 8', icon: "/Sidebar_Element/Calendar.png", active: false },
]

export const CardData : CardProps[] = [
    {title: "Active Cases", value:42, change: 12, changeLabel:"from last month", iconType:"cases",isPositive: true},
    {title: "Pending Tasks", value:17, change: 4, changeLabel:"from last week", iconType:"tasks",isPositive: false},
    {title: "Revenue", value:2850, change: 12, changeLabel:"from last month", iconType:"revenue",isPositive: true},
    {title: "Total Clients", value:87, change: 12, changeLabel:"from last month", iconType:"clients",isPositive: true},
]

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Jefferson Partners LLC v. Astro Corp',
    description: 'Contract dispute regarding software licensing agreement',
    assignedTo: 'Sarah Johnson',
    dueDate: 'Nov 15, 2025',
    status: 'Corporate',
    avatar: 'JP',
  },
  {
    id: '2',
    title: 'Jefferson Partners LLC v. Astro Corp',
    description: 'Contract dispute regarding software licensing agreement',
    assignedTo: 'Sarah Johnson',
    dueDate: 'Nov 15, 2025',
    status: 'Personal Injury',
    avatar: 'JP',
  },
  {
    id: '3',
    title: 'Jefferson Partners LLC v. Astro Corp',
    description: 'Contract dispute regarding software licensing agreement',
    assignedTo: 'Sarah Johnson',
    dueDate: 'Nov 15, 2025',
    status: 'Estate Planning',
    avatar: 'JP',
  },
  {
    id: '4',
    title: 'Jefferson Partners LLC v. Astro Corp',
    description: 'Contract dispute regarding software licensing agreement',
    assignedTo: 'Sarah Johnson',
    dueDate: 'Nov 15, 2025',
    status: 'Estate Planning',
    avatar: 'JP',
  },
  {
    id: '5',
    title: 'Jefferson Partners LLC v. Astro Corp',
    description: 'Contract dispute regarding software licensing agreement',
    assignedTo: 'Sarah Johnson',
    dueDate: 'Nov 15, 2025',
    status: 'Corporate',
    avatar: 'JP',
  },
];