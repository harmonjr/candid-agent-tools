import type { Category } from './types';

export const BUDGET_CATEGORY: Category = {
  id: 'budget',
  title: 'The Budget Conversation',
  subtitle: 'Spend less than you qualify for',
  description:
    'Bob pulled out an adding machine tape and showed the family what different price points meant for their monthly life. He was not selling a house -- he was protecting a family. This is the conversation where agents become advisors.',
  scenarios: [
    {
      id: 'adding-machine',
      title: 'The adding machine tape moment',
      context:
        'You are sitting with clients who know their pre-approval amount. This is the moment to show -- not tell -- what different price points mean in real monthly terms.',
      scripts: [
        {
          label: 'Introducing the comparison',
          text: 'The bank says you can afford $400,000. But "can afford" and "should spend" are two very different conversations. Let me show you what I mean.',
        },
        {
          label: 'Making it tangible',
          text: 'Here is what $400K looks like monthly. Here is what $350K looks like. Feel the difference? That gap is not just dollars -- that is margin. That is a family vacation. That is breathing room when the water heater dies.',
        },
        {
          label: 'Giving them permission',
          text: 'Most people need someone to tell them it is okay to spend less. So here I am, telling you -- it is not just okay, it is the smartest move you can make.',
        },
      ],
      whyAgentsAvoid:
        'Suggesting a lower price point directly reduces your commission. It feels counterintuitive to steer a willing buyer toward less. And there is always the fear they will find an agent who will not push back.',
      whatHappensWithout:
        'Clients spend to their max, have no margin for surprises, and either struggle silently or blame the agent when the financial pressure becomes real. The referral you hoped for never comes.',
    },
    {
      id: 'protection-framing',
      title: 'Framing "buy less" as protection',
      context:
        'Clients feel deflated when told to lower their budget. This reframes spending less as strength, not loss.',
      scripts: [
        {
          label: 'The protection frame',
          text: 'I am not asking you to settle. I am asking you to protect the life you are building. A house that stretches you thin is not a dream home -- it is a source of stress with nice countertops.',
        },
        {
          label: 'The long view',
          text: 'Five years from now, you will not remember if you had the third bathroom. But you will remember whether you could take that trip, whether you stressed about the property tax bill, whether you felt free or trapped.',
        },
      ],
      whyAgentsAvoid:
        'It sounds like you are underselling the experience. Agents are trained to sell the dream, not temper it. Talking about financial stress feels like killing the excitement.',
      whatHappensWithout:
        'The dream home becomes a financial cage. Clients who overextend do not refer friends. They do not write glowing reviews. They quietly wish someone had told them the truth.',
    },
  ],
};
