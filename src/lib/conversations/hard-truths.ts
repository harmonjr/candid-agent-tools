import type { Category } from './types';

export const HARD_TRUTHS_CATEGORY: Category = {
  id: 'hard-truths',
  title: 'The Hard Truths',
  subtitle: 'Saying what other agents will not',
  description:
    'These are the conversations most agents avoid entirely. They are uncomfortable, they risk losing the deal, and they require courage. But the agents who have them are the agents clients remember, refer, and trust with the biggest decisions of their lives.',
  scenarios: [
    {
      id: 'house-concerns',
      title: 'This house concerns me for your budget',
      context:
        'Your clients have fallen in love with a property that will stretch them dangerously thin. They are emotionally committed. You need to speak up.',
      scripts: [
        {
          label: 'Naming the concern',
          text: 'I can see you love this house, and I understand why. But it is my job to show you the full picture. At this price, your monthly costs put you in a range that does not leave room for much else. I would not be doing my job if I did not say that out loud.',
        },
        {
          label: 'Offering the alternative',
          text: 'I am not saying do not buy a house. I am saying this particular house, at this price, changes the math in ways that worry me. Let me show you two others that give you most of what you love here -- with room to breathe.',
        },
      ],
      whyAgentsAvoid:
        'The client is excited. Raising concerns feels like being a buzzkill. Agents fear the client will go to someone who will just write the offer and keep quiet.',
      whatHappensWithout:
        'The client buys the house, the financial strain builds, and they remember you as the agent who let them walk into a trap. Even if they never say it out loud, the referral dies.',
    },
    {
      id: 'not-ready',
      title: 'You are not ready to buy right now',
      context:
        'After reviewing their financial situation, it is clear this client needs more time -- more savings, more stable income, or more clarity on what they want.',
      scripts: [
        {
          label: 'Delivering the truth gently',
          text: 'I want to help you buy a home. And the best way I can do that is to be honest -- right now, the timing is not ideal. That is not a failure. That is wisdom. Let us build a plan so that when you are ready, you are truly ready.',
        },
        {
          label: 'Creating the bridge',
          text: 'Here is what I would focus on over the next six to twelve months. When these pieces are in place, I will be here, and we will find you something great. No rush. No pressure.',
        },
      ],
      whyAgentsAvoid:
        'It means no deal today. Agents need income now, not in six months. Turning away a willing buyer feels like financial self-harm.',
      whatHappensWithout:
        'The client buys before they are ready, ends up house-poor or worse. When things get tight, the memory of the agent who helped them overextend is not a fond one.',
    },
    {
      id: 'market-reality',
      title: 'The market is not favorable right now',
      context:
        'Your client is eager to buy in a market that is clearly overheated, underserved, or otherwise unfavorable for buyers.',
      scripts: [
        {
          label: 'Stating the reality',
          text: 'I know you are ready. But the market right now is not working in your favor. Inventory is low, prices are inflated, and competition is pushing people to make decisions they will regret. I would rather wait with you than watch you overpay.',
        },
        {
          label: 'Countering outside pressure',
          text: 'Your friend\'s advice about offering over asking is based on a different market -- or a different tolerance for risk. Let me show you the data for this neighborhood, this month, so we are making decisions based on reality, not pressure.',
        },
      ],
      whyAgentsAvoid:
        'Telling someone to wait means zero commission today. It also risks them going to a less cautious agent who will write the offer regardless.',
      whatHappensWithout:
        'Clients overpay, face immediate negative equity, and spend years underwater on a purchase that felt urgent at the time. The agent who let it happen is not remembered kindly.',
    },
  ],
};
