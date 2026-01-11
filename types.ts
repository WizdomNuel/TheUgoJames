export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string; // Keeping image for compatibility, though we might not use it in the list view
  year: string;
  status: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export interface NavItem {
  label: string;
  path: string;
}