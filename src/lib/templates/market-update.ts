import type { ContentTemplate } from '../content-templates';

export const MARKET_UPDATE_TEMPLATES: ContentTemplate[] = [
  {
    id: 'market-monthly',
    title: 'Monthly Market Update',
    description: 'Honest local market data with real interpretation, not cheerleading.',
    content: `# [YOUR MARKET] Market Update — [MONTH YEAR]

**HEADLINE**
[Honest summary. NOT "Great time to buy!" — tell the truth about what the data means.]
[Example: "Inventory is up 15% — buyers finally have room to breathe" or "Prices are flat, and that's not a bad thing."]

**WHAT THE DATA SAYS**
- Median sale price: $[AMOUNT] ([UP/DOWN X%] from last month, [UP/DOWN X%] year-over-year)
- Active inventory: [NUMBER] homes ([UP/DOWN X%] from last month)
- Average days on market: [NUMBER] days (compared to [NUMBER] last month)
- List-to-sale price ratio: [PERCENTAGE]%
- New listings this month: [NUMBER]

**WHAT IT MEANS**
[2-3 paragraphs of honest interpretation. Address both buyers and sellers.]

For buyers: [What this market means for their search, negotiations, and timeline]
For sellers: [What this market means for pricing, expectations, and strategy]

**WHAT I'D CONSIDER IF BUYING RIGHT NOW**
- [Practical advice based on current conditions]
- [Negotiation leverage or urgency level]
- [Areas or price points that offer the best value]

**WHAT I'D CONSIDER IF SELLING RIGHT NOW**
- [Pricing strategy based on current conditions]
- [Timing considerations]
- [Preparation priorities]

**HONEST CAVEAT**
Real estate is local — sometimes block by block. These numbers reflect [YOUR MARKET] overall, but your specific neighborhood or price range may tell a different story. If you want to know what's happening in your area specifically, reach out. I'd rather give you accurate information than generic stats.

---
*Data sourced from [YOUR MLS/SOURCE]. [MONTH YEAR] data.*`,
  },
];
