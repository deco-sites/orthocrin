export interface CategoryLink {
  label: string;
  link: string;
  popular?: boolean;
}

export interface CategoryColumns {
  columnTitle: string;
  columnItems: CategoryLink[];
}

export interface HeaderCategory {
  imageUrl: string;
  label: string;
  columns: CategoryColumns[];
}
