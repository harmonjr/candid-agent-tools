import { SECTIONS } from './audit-questions';

export type Answers = Record<string, number>;

export interface SectionScore {
  sectionId: string;
  title: string;
  score: number;
  zone: 'green' | 'amber' | 'red';
}

export interface AuditResult {
  overallScore: number;
  overallZone: 'green' | 'amber' | 'red';
  sections: SectionScore[];
  recommendations: string[];
}

const SECTION_WEIGHTS: Record<string, number> = {
  financial: 0.4,
  time: 0.35,
  'client-load': 0.25,
};

function getZone(score: number): 'green' | 'amber' | 'red' {
  if (score >= 70) return 'green';
  if (score >= 40) return 'amber';
  return 'red';
}

function scoreSliderQuestion(
  questionId: string,
  value: number,
): number {
  if (questionId === 'weekly-hours') {
    if (value <= 40) return 100;
    if (value <= 50) return 70;
    if (value <= 60) return 40;
    return 10;
  }
  if (questionId === 'active-clients') {
    if (value <= 6) return 95;
    if (value <= 10) return 75;
    if (value <= 15) return 45;
    return 15;
  }
  if (questionId === 'exceptional-capacity') {
    return Math.min(100, value * 12);
  }
  return value;
}

function computeSectionScore(
  sectionId: string,
  answers: Answers,
): number {
  const section = SECTIONS.find((s) => s.id === sectionId);
  if (!section) return 0;

  const scores = section.questions.map((q) => {
    const raw = answers[q.id];
    if (raw === undefined) return 50;
    return q.inputType === 'slider'
      ? scoreSliderQuestion(q.id, raw)
      : raw;
  });

  const total = scores.reduce((sum, s) => sum + s, 0);
  return Math.round(total / scores.length);
}

function getRecommendations(sections: SectionScore[]): string[] {
  const recs: string[] = [];
  const sorted = [...sections].sort((a, b) => a.score - b.score);

  for (const section of sorted) {
    if (section.sectionId === 'financial' && section.zone !== 'green') {
      recs.push(
        'Build a 3-month runway fund. Start with one month and grow from there. Every commission check, pay your future self first.',
      );
    }
    if (section.sectionId === 'time' && section.zone !== 'green') {
      recs.push(
        'Block one full day per week as non-negotiable personal time. Put it on your calendar like a closing — because your life deserves the same respect as your business.',
      );
    }
    if (section.sectionId === 'client-load' && section.zone !== 'green') {
      recs.push(
        'Define your ideal client clearly, then practice saying no to everyone else. Fewer clients served exceptionally will generate more referrals than many clients served adequately.',
      );
    }
  }

  if (recs.length === 0) {
    recs.push(
      'You\'re in a strong position. The goal now is to protect what you\'ve built. Review these margins quarterly to make sure growth doesn\'t erode them.',
    );
  }

  return recs;
}

export function calculateResults(answers: Answers): AuditResult {
  const sections: SectionScore[] = SECTIONS.map((s) => {
    const score = computeSectionScore(s.id, answers);
    return {
      sectionId: s.id,
      title: s.title,
      score,
      zone: getZone(score),
    };
  });

  const weightedSum = sections.reduce((sum, s) => {
    const weight = SECTION_WEIGHTS[s.sectionId] ?? 0.33;
    return sum + s.score * weight;
  }, 0);

  const overallScore = Math.round(weightedSum);

  return {
    overallScore,
    overallZone: getZone(overallScore),
    sections,
    recommendations: getRecommendations(sections),
  };
}
