const STORAGE_KEY = 'candid-expectations-custom';

export function getCustomScripts(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function saveCustomScript(scriptId: string, text: string): void {
  const custom = getCustomScripts();
  custom[scriptId] = text;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(custom));
}

export function resetCustomScript(scriptId: string): void {
  const custom = getCustomScripts();
  delete custom[scriptId];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(custom));
}

export function isScriptCustomized(
  scriptId: string,
  customScripts: Record<string, string>,
): boolean {
  return scriptId in customScripts;
}
