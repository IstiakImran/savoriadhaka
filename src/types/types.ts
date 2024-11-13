// types.ts
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | string;
  image: string;
  dietary?: string[];
  spicyLevel?: number;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export interface MenuData {
  categories: MenuCategory[];
  dietary_icons: {
    [key: string]: string;
  };
}

export interface DietaryIconProps {
  type: string;
}

export interface MenuSectionProps {
  category: MenuCategory;
  onItemClick: (item: MenuItem) => void;
}

export interface MenuItemCardProps {
  item: MenuItem;
  dietaryIcons: { [key: string]: string };
  onClick: () => void;
}

export interface MenuItemModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  dietaryIcons: { [key: string]: string };
}
