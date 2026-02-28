import type { Section } from './types';

export const FRAMEWORK_SECTION: Section = {
  id: 'framework',
  title: 'Setting the Framework \u2014 How I Work',
  subtitle: 'Service Quality',
  description:
    'Communicating your working style as a service quality statement, not an apology. Boundaries are a feature, not a limitation.',
  educationCallout:
    'Boundaries aren\u2019t limits on service \u2014 they\u2019re the foundation of excellent service. A well-rested, focused agent serves you better than one who\u2019s running on caffeine and guilt.',
  scripts: [
    {
      id: 'response-time',
      title: 'Response Time',
      context: 'Setting communication expectations early',
      content:
        'I respond to messages within [X hours] during my working hours, which are [hours]. If something genuinely can\u2019t wait, here\u2019s how to reach me for emergencies.',
      variations: [
        'During [hours], I\u2019m fully available and responsive. Outside those hours, I check messages once in the evening. For true emergencies, here\u2019s my direct line.',
      ],
    },
    {
      id: 'communication-channels',
      title: 'Communication Channels',
      context: 'Organizing how you stay in touch',
      content:
        'I find that [email/text/call] works best for [type of communication]. Here\u2019s how I structure it so nothing falls through the cracks.',
      variations: [
        'I like to keep things organized: texts for quick updates, email for documents and details, and calls for decisions. That way nothing gets lost.',
      ],
    },
    {
      id: 'meeting-scheduling',
      title: 'Meeting Scheduling',
      context: 'Explaining your focused approach',
      content:
        'I block focused time for each of my clients. When we meet, you have my full attention \u2014 not half of it while I\u2019m texting another client.',
      variations: [
        'When we\u2019re together, I\u2019m fully present. I schedule dedicated time for each client so you never feel like you\u2019re sharing my attention.',
      ],
    },
    {
      id: 'boundary-framing',
      title: 'The Boundary Framing',
      context: 'When explaining your working hours',
      content:
        'I protect my evenings and weekends so I bring my best to every interaction with you. The agents who never stop working are often the ones making mistakes from exhaustion.',
    },
  ],
};
