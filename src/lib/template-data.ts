import type { TemplateCategory } from './content-templates';
import { BUYER_EDUCATION_TEMPLATES } from './templates/buyer-education';
import { MARKET_UPDATE_TEMPLATES } from './templates/market-update';
import { QUESTIONS_TEMPLATES } from './templates/questions-to-ask';
import { FIRST_TIME_BUYER_TEMPLATES } from './templates/first-time-buyer';
import { TRUE_COST_TEMPLATES } from './templates/true-cost';
import { NEWSLETTER_TEMPLATES } from './templates/newsletter';

export const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  {
    id: 'buyer-education',
    title: 'What I Wish Every Buyer Knew',
    description:
      'A hook-myth-reality-advice structure that builds trust by telling the truth.',
    icon: 'lightbulb',
    templates: BUYER_EDUCATION_TEMPLATES,
  },
  {
    id: 'market-update',
    title: 'Local Market Update',
    description:
      'Honest market data with real interpretation — never "Now is a great time to buy!"',
    icon: 'bar-chart-3',
    templates: MARKET_UPDATE_TEMPLATES,
  },
  {
    id: 'questions-to-ask',
    title: 'Questions to Ask Before You...',
    description:
      'Educational question lists for buyers, sellers, and refinancers. Share with clients.',
    icon: 'help-circle',
    templates: QUESTIONS_TEMPLATES,
  },
  {
    id: 'first-time-buyer',
    title: 'First-Time Buyer Education Series',
    description:
      'A 4-part series covering affordability, search, contracts, and post-close life.',
    icon: 'graduation-cap',
    templates: FIRST_TIME_BUYER_TEMPLATES,
  },
  {
    id: 'true-cost',
    title: 'True Cost Breakdown',
    description:
      'Fill-in-the-numbers template for a local true-cost article. The full picture, not the sticker price.',
    icon: 'calculator',
    templates: TRUE_COST_TEMPLATES,
  },
  {
    id: 'newsletter',
    title: 'Newsletter Starter Kit',
    description:
      'Monthly email template plus a full 12-month content calendar. One excellent email beats four mediocre ones.',
    icon: 'mail',
    templates: NEWSLETTER_TEMPLATES,
  },
];
