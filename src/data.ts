import type { CardProps, SideBarMenuType, Task ,Notification, CalendarEvent, Message} from "./types";

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

export const statusColors : string[] = [
    'bg-blue-100 text-blue-700',
    'bg-orange-100 text-orange-700',
    'bg-green-100 text-green-700',
    'bg-purple-100 text-purple-700'
]

export const notifications: Notification[] = [
  {
    id: '1',
    title: 'New Task Assigned',
    description: 'Client Name | Assigned at: 12 June 2024',
    date: '25 June',
  },
  {
    id: '2',
    title: 'New Task Assigned',
    description: 'Client Name | Assigned at: 12 June 2024',
    date: '25 June',
  },
];

export const events: CalendarEvent[] = [
  {
    id: '1',
    time: '2:00 PM - 3:30 PM',
    title: 'Team Meeting',
    description: 'New Trademark Filing | +3 Other team members',
    icon: 'video',
  },
  {
    id: '2',
    time: '5:00 PM - 6:30 PM',
    title: 'Submission of Assignment',
    description: 'New Trademark Filing | +3 Other team members',
    icon: 'document',
  },
];

export const messages: Message[] = [
  {
    id: '1',
    from: 'Anurag',
    content: 'Hi, Hope you are doing well, this is to update you that I have finished first installment of payment. Please proceed with the task as discussed.',
    avatar: "A"
    
  },
  {
    id: '2',
    from: 'Rahul',
    content: 'Hi, Hope you are doing well, this is to update you that I have finished first installment of payment. Please proceed with the task as discussed.',
    avatar: "R"
  },
];
