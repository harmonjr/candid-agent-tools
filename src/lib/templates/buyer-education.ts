import type { ContentTemplate } from '../content-templates';

export const BUYER_EDUCATION_TEMPLATES: ContentTemplate[] = [
  {
    id: 'buyer-true-cost',
    title: 'The True Cost of Homeownership',
    description: 'Help buyers understand the full picture beyond the sticker price.',
    content: `# What I Wish Every Buyer Knew: The True Cost of Homeownership

**THE HOOK**
[One sentence that stops the scroll. Example: "The listing price is the beginning of what you'll spend — not the end."]

**THE MYTH**
Most buyers think homeownership costs = mortgage payment. That's the number they qualify for, and often the only number anyone shows them.

**THE REALITY**
Here's what a [PRICE RANGE] home in [YOUR MARKET] actually costs monthly:
- Mortgage (P&I): $[AMOUNT]
- Property taxes: $[AMOUNT]
- Insurance: $[AMOUNT]
- HOA (if applicable): $[AMOUNT]
- Maintenance (1% rule): $[AMOUNT]
- Utilities: $[AMOUNT]

Total monthly: $[TOTAL] — that's $[DIFFERENCE] more than the mortgage alone.

**WHAT TO DO INSTEAD**
1. Start with your comfortable monthly number — not what a lender says you qualify for
2. Subtract estimated taxes, insurance, and maintenance
3. What's left is your actual mortgage budget
4. Build in a margin for surprises (because there will be surprises)

**BOTTOM LINE**
[Your honest take. Keep it encouraging but real. Example: "Homeownership is wonderful — but only when you can actually enjoy your home without financial stress keeping you up at night."]`,
  },
  {
    id: 'buyer-preapproval',
    title: 'Why Pre-Approval Isn\'t a Budget',
    description: 'The critical difference between what you can borrow and what you should.',
    content: `# What I Wish Every Buyer Knew: Pre-Approval Isn't a Budget

**THE HOOK**
[Example: "A lender tells you what you CAN borrow. Nobody tells you what you SHOULD borrow. That's a problem."]

**THE MYTH**
Pre-approval = your buying power = your budget. If the bank says $400K, you should shop at $400K.

**THE REALITY**
Lenders approve based on debt-to-income ratios — typically up to 43%. That calculation doesn't include:
- Groceries, childcare, or your actual lifestyle costs
- Retirement savings or future goals
- The fact that you probably enjoy doing things besides paying a mortgage

A $400K approval might mean a comfortable life at $320K — or stress at $380K.

**WHAT TO DO INSTEAD**
1. Get pre-approved (yes, still do this — it's essential for sellers to take you seriously)
2. Then build your REAL budget: monthly income minus everything you actually spend
3. The gap between those numbers is your honest housing budget
4. Share this number with your agent — a good one will respect it

**BOTTOM LINE**
[Your take. Example: "Your pre-approval letter is a ceiling, not a target. The best purchase is one that lets you sleep well and still take a vacation."]`,
  },
  {
    id: 'buyer-inspection',
    title: 'The Inspection Isn\'t Optional',
    description: 'Why skipping the inspection is the most expensive shortcut.',
    content: `# What I Wish Every Buyer Knew: The Inspection Isn't Optional

**THE HOOK**
[Example: "In a hot market, someone will tell you to skip the inspection. That person does not have your best interest in mind."]

**THE MYTH**
In competitive markets, waiving the inspection shows you're serious and gives you an edge. The house looks fine — what could go wrong?

**THE REALITY**
A $500 inspection can uncover:
- Foundation issues ($10,000 - $50,000+)
- Roof problems ($8,000 - $20,000)
- Electrical hazards (priceless — literally a safety issue)
- Plumbing failures ($3,000 - $15,000)
- Mold or water damage ($2,000 - $30,000)

These aren't hypothetical. These are things home inspectors find every single day in [YOUR MARKET].

**WHAT TO DO INSTEAD**
1. Always get an inspection — even in a competitive market
2. If you feel pressure to waive, consider an "inspection for information only" (you still learn what you're buying)
3. Bring your own inspector, not one recommended by the seller's agent
4. Attend the inspection if you can — you'll learn more in 3 hours than months of Googling

**BOTTOM LINE**
[Your take. Example: "The inspection isn't about finding a reason to walk away. It's about knowing what you're buying. That's just smart."]`,
  },
  {
    id: 'buyer-closing-costs',
    title: 'Closing Costs Are Real Money',
    description: 'The surprise expense that catches most first-time buyers off guard.',
    content: `# What I Wish Every Buyer Knew: Closing Costs Are Real Money

**THE HOOK**
[Example: "You saved for the down payment. Congratulations. Now you need another 2-5% of the purchase price. Nobody mentioned that part?"]

**THE MYTH**
The down payment is the big savings goal. Once you have that, you're ready to buy.

**THE REALITY**
Closing costs in [YOUR MARKET] typically run [PERCENTAGE]% of the purchase price:
- Lender fees (origination, underwriting): $[AMOUNT]
- Title insurance and search: $[AMOUNT]
- Appraisal fee: $[AMOUNT]
- Escrow setup (taxes + insurance): $[AMOUNT]
- Recording fees: $[AMOUNT]
- Prepaid interest: $[AMOUNT]

On a $[PRICE] home, that's approximately $[TOTAL] — on top of your down payment.

**WHAT TO DO INSTEAD**
1. Budget for closing costs from day one (add 3-5% to your down payment goal)
2. Ask your lender for a Loan Estimate early — it itemizes expected closing costs
3. Some costs are negotiable — your agent can help identify which ones
4. Seller concessions are possible (the seller pays part of your costs) — ask about this

**BOTTOM LINE**
[Your take. Example: "Closing costs aren't a gotcha — they're just part of the process. But they should never be a surprise. Ask about them early, budget for them, and you'll close with confidence instead of panic."]`,
  },
];
