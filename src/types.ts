
interface SideBarMenuType {
    id: number;
    label: string;
    icon: string;
    active: boolean;
}

interface CardProps {
  title: string;
  value: number;
  change: number;
  changeLabel: string;
  iconType: 'cases' | 'tasks' | 'revenue' | 'clients';
  isPositive: boolean;
}

interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  dueDate: string;
  status: 'Corporate' | 'Personal Injury' | 'Estate Planning';
  avatar: string;
}

export interface Notification {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface CalendarEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  id: string;
  from: string;
  content: string;
  avatar: string;
}

export type {SideBarMenuType,CardProps,Task}