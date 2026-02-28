export type { Script, Scenario, Category } from './types';

export { DISCOVERY_CATEGORY } from './discovery';
export { BUDGET_CATEGORY } from './budget';
export { HARD_TRUTHS_CATEGORY } from './hard-truths';
export { TRUE_COST_CATEGORY } from './true-cost';
export { POST_CLOSE_CATEGORY } from './post-close';

import { DISCOVERY_CATEGORY } from './discovery';
import { BUDGET_CATEGORY } from './budget';
import { HARD_TRUTHS_CATEGORY } from './hard-truths';
import { TRUE_COST_CATEGORY } from './true-cost';
import { POST_CLOSE_CATEGORY } from './post-close';

export const ALL_CATEGORIES = [
  DISCOVERY_CATEGORY,
  BUDGET_CATEGORY,
  HARD_TRUTHS_CATEGORY,
  TRUE_COST_CATEGORY,
  POST_CLOSE_CATEGORY,
];
