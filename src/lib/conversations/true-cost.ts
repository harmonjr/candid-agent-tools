import type { Category } from './types';

export const TRUE_COST_CATEGORY: Category = {
  id: 'true-cost',
  title: 'The True Cost Reveal',
  subtitle: 'Beyond the mortgage payment',
  description:
    'Most clients think the mortgage payment is the cost of owning a home. It is not even close. Property taxes, insurance, maintenance, HOA fees, utilities -- the real monthly number is often 40-60% higher than the mortgage alone. Candid agents show the whole picture before the offer, not after the closing.',
  scenarios: [
    {
      id: 'full-picture',
      title: 'Walking through the full monthly picture',
      context:
        'You are preparing to discuss a specific property or price range. This is the moment to lay out every cost, not just the principal and interest.',
      scripts: [
        {
          label: 'Opening the conversation',
          text: 'Most people think about the mortgage payment when they think about what a house costs. But the mortgage is just one line on a much longer list. Let me walk you through the whole picture.',
        },
        {
          label: 'Breaking it down',
          text: 'Here is the mortgage. Now add property taxes -- that is another $X per month. Homeowner\'s insurance -- another $X. Maintenance -- the rule of thumb is 1% of the home\'s value per year, set aside monthly. If there is an HOA, that is another $X. Utilities for a home this size, roughly $X. The real monthly cost is not $2,100. It is closer to $3,200.',
        },
        {
          label: 'Letting it land',
          text: 'I know that is a bigger number than you expected. That is exactly why I show it to you now -- so the surprise happens here, in this room, where we can plan for it. Not three months after move-in, when it is too late.',
        },
      ],
      whyAgentsAvoid:
        'The bigger the number looks, the more likely the client gets cold feet. Agents worry that full transparency will scare buyers out of buying at all.',
      whatHappensWithout:
        'Clients budget for the mortgage and nothing else. The first property tax bill is a shock. The first major repair is a crisis. The house they were so excited about becomes a source of anxiety.',
    },
    {
      id: 'numbers-dont-work',
      title: 'When the numbers do not work',
      context:
        'You have run the full cost breakdown and the math is clear -- this property or price range does not fit their financial life.',
      scripts: [
        {
          label: 'Being direct',
          text: 'I know this is not what you wanted to hear. But when I add everything up -- mortgage, taxes, insurance, maintenance, utilities -- the monthly commitment does not leave the margin I think your family needs. I would rather tell you now than have you discover it later.',
        },
        {
          label: 'Offering the path forward',
          text: 'This does not mean you cannot buy a home. It means this price point is not the right one. Let me show you what the numbers look like at a lower range -- I think you will be surprised how good the options are when the math actually works.',
        },
      ],
      whyAgentsAvoid:
        'Telling clients they cannot afford something feels presumptuous. Agents worry about being seen as the person who killed the dream instead of the person who made it possible.',
      whatHappensWithout:
        'The client stretches anyway, and three years in they are one unexpected expense away from real trouble. The dream home becomes the thing they regret most.',
    },
    {
      id: 'maintenance-rule',
      title: 'The 1% maintenance rule',
      context:
        'Most first-time buyers have no idea what home maintenance costs. This is a quick, memorable way to set realistic expectations.',
      scripts: [
        {
          label: 'Introducing the rule',
          text: 'Here is a number most agents will not mention -- the 1% rule. Budget 1% of your home\'s value each year for maintenance and repairs. On a $350,000 home, that is $3,500 a year, or about $290 a month. Roofs, HVAC systems, water heaters -- they all have a shelf life.',
        },
        {
          label: 'Making it real',
          text: 'That money is not a maybe. It is a when. A new roof costs $8,000 to $15,000. An HVAC system, $5,000 to $10,000. If you are not setting money aside now, those bills become emergencies instead of expected costs.',
        },
      ],
      whyAgentsAvoid:
        'It adds yet another cost to an already intimidating number. Agents fear the cumulative effect of all this transparency will paralyze buyers.',
      whatHappensWithout:
        'The furnace dies in February and the client has no savings to replace it. They put it on a credit card at 22% interest and resent the house, the decision, and everyone involved.',
    },
  ],
};
