export interface Script {
  label: string;
  text: string;
}

export interface Scenario {
  id: string;
  title: string;
  context: string;
  scripts: Script[];
  whyAgentsAvoid: string;
  whatHappensWithout: string;
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  scenarios: Scenario[];
}
