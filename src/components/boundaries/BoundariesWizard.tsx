'use client';

import { useState, useCallback } from 'react';
import { DEFAULT_CONFIG, type BoundariesConfig, type PresetKey } from '@/lib/boundaries-config';
import { generateAllTemplates, type GeneratedTemplate } from '@/lib/template-generator';
import BoundariesLanding from './BoundariesLanding';
import ScheduleBuilder from './ScheduleBuilder';
import TemplateDisplay from './TemplateDisplay';
import EmergencyGuide from './EmergencyGuide';

type Step = 'landing' | 'schedule' | 'templates';

export default function BoundariesWizard() {
  const [step, setStep] = useState<Step>('landing');
  const [config, setConfig] = useState<BoundariesConfig>(DEFAULT_CONFIG);
  const [activePreset, setActivePreset] = useState<PresetKey>('weekdays-9-5');
  const [templates, setTemplates] = useState<GeneratedTemplate[]>([]);

  const handleStart = useCallback(() => {
    setStep('schedule');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleGenerate = useCallback(() => {
    const generated = generateAllTemplates(config);
    setTemplates(generated);
    setStep('templates');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [config]);

  const handleBackToSchedule = useCallback(() => {
    setStep('schedule');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleTemplateChange = useCallback((id: string, content: string) => {
    setTemplates((prev) =>
      prev.map((t) => (t.id === id ? { ...t, content } : t)),
    );
  }, []);

  if (step === 'landing') {
    return <BoundariesLanding onStart={handleStart} />;
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      {step === 'schedule' && (
        <ScheduleBuilder
          config={config}
          activePreset={activePreset}
          onConfigChange={setConfig}
          onPresetChange={setActivePreset}
          onGenerate={handleGenerate}
        />
      )}

      {step === 'templates' && (
        <TemplateDisplay
          templates={templates}
          onTemplateChange={handleTemplateChange}
          onBack={handleBackToSchedule}
        />
      )}

      <EmergencyGuide />
    </div>
  );
}
