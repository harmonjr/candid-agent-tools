import type { Section } from './types';

export const OPENING_SECTION: Section = {
  id: 'opening',
  title: 'The Opening \u2014 Life Before Listings',
  subtitle: 'The Bob Method',
  description:
    'Asking about a client\u2019s life before ever discussing properties. This is where trust begins \u2014 not with a listing sheet, but with genuine curiosity.',
  educationCallout:
    'Bob didn\u2019t win Randy\u2019s business by being available 24/7. He won it by spending an hour asking about their life before showing a single listing. The agents who ask the best questions attract the best clients.',
  scripts: [
    {
      id: 'life-question',
      title: 'The Life Question',
      context: 'First thing you say after introductions',
      content:
        'Before we look at a single property, I want to understand what\u2019s happening in your life. Tell me about your family \u2014 who lives with you, what matters most to you, and what\u2019s driving this move.',
      variations: [
        'I\u2019d love to hear about what\u2019s going on in your life right now. What\u2019s prompting this move, and who are the important people this decision affects?',
      ],
    },
    {
      id: 'timeline-question',
      title: 'The Timeline Question',
      context: 'After understanding their life situation',
      content:
        'There\u2019s no rush on my end. What does your ideal timeline look like? And what would change if it took a little longer than planned?',
      variations: [
        'Walk me through your ideal timing. And honestly \u2014 what happens if this takes six months instead of three?',
      ],
    },
    {
      id: 'fear-question',
      title: 'The Fear Question',
      context: 'When you sense hesitation or anxiety',
      content:
        'What worries you most about this process? I\u2019d rather know now so we can address it honestly.',
      variations: [
        'If there\u2019s one thing about this process that keeps you up at night, what is it? Let\u2019s talk about it now.',
      ],
    },
    {
      id: 'priority-question',
      title: 'The Priority Question',
      context: 'Before discussing any property details',
      content:
        'If you could only have three things in your next home \u2014 not ten, just three \u2014 what would they be and why?',
      variations: [
        'Forget the wish list for a moment. What are the three non-negotiables \u2014 the things that would make you regret this move if you didn\u2019t get them?',
      ],
    },
  ],
};
