export type { Script, Section } from './types';
export { getCustomScripts, saveCustomScript, resetCustomScript, isScriptCustomized } from './storage';

export { OPENING_SECTION } from './opening';
export { FRAMEWORK_SECTION } from './framework';
export { PROTECTION_SECTION } from './protection';
export { COMMITMENT_SECTION } from './commitment';
export { PUSHBACK_SECTION } from './pushback';

import { OPENING_SECTION } from './opening';
import { FRAMEWORK_SECTION } from './framework';
import { PROTECTION_SECTION } from './protection';
import { COMMITMENT_SECTION } from './commitment';
import { PUSHBACK_SECTION } from './pushback';

export const EXPECTATION_SECTIONS = [
  OPENING_SECTION,
  FRAMEWORK_SECTION,
  PROTECTION_SECTION,
  COMMITMENT_SECTION,
  PUSHBACK_SECTION,
];
