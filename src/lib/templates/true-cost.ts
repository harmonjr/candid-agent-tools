import type { ContentTemplate } from '../content-templates';

export const TRUE_COST_TEMPLATES: ContentTemplate[] = [
  {
    id: 'true-cost-breakdown',
    title: 'True Cost Breakdown Article',
    description: 'A fill-in-the-numbers template for a local cost-of-living article.',
    content: `# The True Cost of Living in [CITY/NEIGHBORHOOD]

*This is what The Candid Agent means by true cost — not just the sticker price.*

## The Numbers That Matter

**Home Purchase**
- Median home price: $[MEDIAN_PRICE]
- Down payment (20%): $[DOWN_PAYMENT]
- Down payment (5% FHA): $[FHA_DOWN]

**Monthly Costs (for a $[MEDIAN_PRICE] home)**

| Category | Monthly Cost | Annual Cost |
|----------|-------------|-------------|
| Mortgage (P&I at [RATE]%) | $[MORTGAGE] | $[MORTGAGE_ANNUAL] |
| Property taxes | $[TAXES] | $[TAXES_ANNUAL] |
| Homeowner's insurance | $[INSURANCE] | $[INSURANCE_ANNUAL] |
| HOA (if applicable) | $[HOA] | $[HOA_ANNUAL] |
| Maintenance (1% rule) | $[MAINTENANCE] | $[MAINTENANCE_ANNUAL] |
| Utilities (avg) | $[UTILITIES] | $[UTILITIES_ANNUAL] |
| PMI (if <20% down) | $[PMI] | $[PMI_ANNUAL] |
| **Total** | **$[TOTAL_MONTHLY]** | **$[TOTAL_ANNUAL]** |

**Commute Costs**
- Average commute to [MAJOR_EMPLOYMENT_CENTER]: [MINUTES] minutes
- Estimated gas/transit monthly cost: $[COMMUTE_COST]
- When you add commute: **$[GRAND_TOTAL_MONTHLY]/month**

## What This Means

For a household earning $[HOUSEHOLD_INCOME]/year ($[MONTHLY_INCOME]/month):
- Housing costs represent [PERCENTAGE]% of gross income
- Financial advisors recommend staying under 28%
- Your actual target should account for your lifestyle, savings goals, and comfort level

## The Honest Version

[2-3 paragraphs of real talk about affordability in this area. Is it expensive? Say so. Are there more affordable pockets? Name them. Is this a stretch for median-income families? Acknowledge it.]

**What we tell our clients:** Don't just ask "Can I buy here?" Ask "Can I live well here?" Those are different questions with different answers.

---
*Numbers current as of [MONTH YEAR]. Sources: [YOUR_MLS], [TAX_ASSESSOR], [INSURANCE_QUOTE_SOURCE]. Your actual costs will vary — this is a starting framework, not a quote.*`,
  },
];
