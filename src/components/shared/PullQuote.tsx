interface PullQuoteProps {
  quote: string;
}

export default function PullQuote({ quote }: PullQuoteProps) {
  return (
    <div className="mt-24 border-l-2 border-candid pl-8 sm:mt-32 sm:pl-12 lg:ml-[33.333%]">
      <blockquote className="font-serif text-2xl font-light italic leading-relaxed text-ink sm:text-3xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </div>
  );
}
