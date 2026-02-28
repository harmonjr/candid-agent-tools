import type { Category } from './types';

export const POST_CLOSE_CATEGORY: Category = {
  id: 'post-close',
  title: 'The Post-Close Check-In',
  subtitle: 'Why Candid Agents do not vanish',
  description:
    'Most agents disappear after closing. The commission clears, the relationship ends, and the client is left to figure out homeownership alone. Candid agents do the opposite -- they check in at 30, 60, and 90 days because the relationship is the product, not the transaction.',
  scenarios: [
    {
      id: 'thirty-day',
      title: 'The 30-day check-in',
      context:
        'One month after closing. The client has moved in, unpacked most of the boxes, and is starting to live in the house. This is when the first surprises often surface.',
      scripts: [
        {
          label: 'Making the call',
          text: 'Hey, I just wanted to check in -- you have been in the house about a month now. How is it feeling? Anything unexpected come up? Any questions about the house, the neighborhood, anything at all?',
        },
        {
          label: 'If something is wrong',
          text: 'I am glad you told me. Let me connect you with someone who can help with that. Part of my job is making sure you are taken care of long after the paperwork is signed.',
        },
      ],
      whyAgentsAvoid:
        'Agents are already chasing the next deal. The commission is earned, the file is closed, and there is no immediate financial incentive to make this call. It feels like volunteer work.',
      whatHappensWithout:
        'Small issues become big resentments. The client who had a question about their water heater and got silence from their agent tells that story to every friend who asks about the home-buying experience.',
    },
    {
      id: 'sixty-day',
      title: 'The 60-day financial check',
      context:
        'Two months in. The client has now received at least one full cycle of bills -- mortgage, utilities, insurance. This is the first real data on whether the numbers work.',
      scripts: [
        {
          label: 'Checking the math',
          text: 'Now that you have had a couple months of real bills, how are the monthly costs landing compared to what we projected? Any surprises on the utility side or anything else?',
        },
        {
          label: 'If costs are higher than expected',
          text: 'That is exactly the kind of thing I want to know about. Let us look at it together -- sometimes there are adjustments we can make, or programs that can help. The goal is to make sure you feel comfortable, not just housed.',
        },
      ],
      whyAgentsAvoid:
        'This call might surface buyer\'s remorse. Agents fear that asking about financial comfort will invite complaints or regret that reflects poorly on them.',
      whatHappensWithout:
        'The client discovers their utility bills are $200 more than expected and quietly resents the whole process. They never say anything to the agent, but they never refer anyone either.',
    },
    {
      id: 'ninety-day',
      title: 'The 90-day relationship reset',
      context:
        'Three months in. The client is settled. The house is starting to feel like home. This call is about cementing the long-term relationship.',
      scripts: [
        {
          label: 'The big-picture check',
          text: 'You have been in the house about three months now -- how does it feel? Now that you are settled, is there anything about the financial picture I can help with? Sometimes things look different once the dust settles.',
        },
        {
          label: 'Planting the seed',
          text: 'I am always here if you need anything -- a contractor recommendation, a question about property taxes, whatever comes up. And if anyone in your life is thinking about buying or selling, I would love to take care of them the same way.',
        },
      ],
      whyAgentsAvoid:
        'Three months feels like ancient history in a business driven by the next closing. Agents who are volume-focused have already moved on mentally.',
      whatHappensWithout:
        'The relationship that took months to build evaporates in weeks. The client remembers the transaction, not the person. When their coworker asks for an agent recommendation, your name does not come to mind.',
    },
  ],
};
