export interface ContentTemplate {
  id: string;
  title: string;
  description: string;
  content: string;
}

export interface TemplateCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  templates: ContentTemplate[];
}

export { TEMPLATE_CATEGORIES } from './template-data';
