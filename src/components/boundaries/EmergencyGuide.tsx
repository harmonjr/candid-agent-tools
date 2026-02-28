'use client';

const EMERGENCIES = [
  {
    situation: 'Contract deadline expiring in hours',
    response: 'This is a genuine emergency. Respond immediately, even outside hours. A missed deadline can cost your client the deal.',
  },
  {
    situation: 'Safety concern at a property',
    response: 'Always respond. Safety is never a boundary issue. If someone is in danger, everything else waits.',
  },
  {
    situation: 'Lender needs immediate response to save a rate lock',
    response: 'Respond promptly. Rate locks have real financial consequences. A quick call or text can save your client thousands.',
  },
  {
    situation: 'Inspection reveals major structural issue before option period ends',
    response: 'Respond within the hour. Time-sensitive decisions about repairs, negotiations, or walking away require your guidance.',
  },
];

const NOT_EMERGENCIES = [
  {
    situation: '"I just found a house I love online!"',
    response: '"That is exciting! Send me the link and I will pull the full details first thing tomorrow morning. If it is the right fit, we will move quickly."',
  },
  {
    situation: '"When will we hear back on our offer?"',
    response: '"I understand the waiting is hard. I have not heard anything yet, but I will follow up first thing in the morning and update you immediately."',
  },
  {
    situation: '"Can we schedule another showing this weekend?"',
    response: '"Absolutely. I will reach out to the listing agent during business hours tomorrow and get us on the schedule."',
  },
  {
    situation: '"My friend says we should offer less. What do you think?"',
    response: '"I appreciate you thinking this through. Let us set up a quick call during my office hours tomorrow and I will walk you through the comparable data."',
  },
];

export default function EmergencyGuide() {
  return (
    <div className="mt-16">
      <div className="mb-10 text-center">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          Reference Guide
        </span>
        <h2 className="mt-2 font-serif text-3xl font-light text-ink sm:text-4xl">
          Emergency vs. Anxiety
        </h2>
        <p className="mt-3 mx-auto max-w-2xl font-sans text-base leading-relaxed text-ink-muted">
          The hardest part of boundaries is knowing when to hold them
          and when to break them. Here is a practical guide.
        </p>
      </div>

      <div className="border-t-2 border-candid bg-white px-6 py-8 sm:px-8">
        <h3 className="font-serif text-xl font-light text-ink">
          Genuine Emergencies — Respond Now
        </h3>
        <p className="mt-2 font-sans text-sm text-ink-muted">
          These situations have real, time-sensitive consequences. Dropping
          everything is the right call.
        </p>
        <div className="mt-6 space-y-5">
          {EMERGENCIES.map((item) => (
            <GuideItem key={item.situation} {...item} variant="emergency" />
          ))}
        </div>
      </div>

      <div className="mt-6 border-t-2 border-candid bg-white px-6 py-8 sm:px-8">
        <h3 className="font-serif text-xl font-light text-ink">
          Client Anxiety — Acknowledge, Then Hold
        </h3>
        <p className="mt-2 font-sans text-sm text-ink-muted">
          These feel urgent to the client but are not time-sensitive.
          An empathetic response that redirects to business hours
          actually builds more trust than an instant answer.
        </p>
        <div className="mt-6 space-y-5">
          {NOT_EMERGENCIES.map((item) => (
            <GuideItem key={item.situation} {...item} variant="anxiety" />
          ))}
        </div>
      </div>

      <div className="mt-6 border-t-2 border-candid bg-highlight px-6 py-8 sm:px-8">
        <h3 className="font-serif text-xl font-light text-ink">
          The Golden Rule of Boundaries
        </h3>
        <p className="mt-3 font-sans text-sm leading-relaxed text-ink-muted">
          Ask yourself: <em className="font-serif text-ink">"If I do not respond
          right now, will something irreversible happen?"</em> If the answer is
          no, it can wait. Your evenings, your weekends, your peace of mind —
          these are not luxuries. They are what make you capable of showing
          up as the agent your clients deserve.
        </p>
      </div>
    </div>
  );
}

function GuideItem({
  situation,
  response,
  variant,
}: {
  situation: string;
  response: string;
  variant: 'emergency' | 'anxiety';
}) {
  const markerColor = variant === 'emergency' ? 'bg-zone-red' : 'bg-zone-amber';

  return (
    <div className="flex gap-4">
      <div className={`mt-1.5 h-2.5 w-2.5 shrink-0 ${markerColor}`} />
      <div>
        <p className="font-sans text-sm font-semibold text-ink">{situation}</p>
        <p className="mt-1 font-sans text-sm leading-relaxed text-ink-muted">{response}</p>
      </div>
    </div>
  );
}
