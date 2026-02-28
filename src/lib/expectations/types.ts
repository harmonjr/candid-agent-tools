export interface Script {
  id: string;
  title: string;
  context: string;
  content: string;
  variations?: string[];
}

export interface Section {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  educationCallout: string;
  scripts: Script[];
}
