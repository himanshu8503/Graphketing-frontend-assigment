
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

export type {SideBarMenuType,CardProps}