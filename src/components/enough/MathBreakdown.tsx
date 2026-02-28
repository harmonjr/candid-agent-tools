import type { EnoughResult } from '@/lib/enough-calculator';
import { formatCurrency } from '@/lib/enough-calculator';

interface MathBreakdownProps {
  result: EnoughResult;
}

export default function MathBreakdown({ result }: MathBreakdownProps) {
  return (
    <div className="border-t-2 border-candid bg-white px-6 py-8 sm:px-8">
      <h3 className="mb-8 font-serif text-2xl font-light text-ink">
        The Math
      </h3>
      <div className="space-y-4">
        <BreakdownRow
          label="Target annual income"
          value={formatCurrency(result.targetAnnualIncome)}
          sublabel="Living expenses + savings + giving + business costs"
        />
        <BreakdownRow
          label="Business expenses"
          value={formatCurrency(result.totalBusinessExpenses)}
          sublabel="Marketing + dues + insurance + other"
        />
        <div className="border-t border-border pt-4">
          <BreakdownRow
            label="Gross per transaction"
            value={formatCurrency(result.grossPerTransaction)}
            sublabel="Sale price x commission rate"
          />
          <div className="mt-4">
            <BreakdownRow
              label="After broker split"
              value={formatCurrency(result.afterBrokerSplit)}
            />
          </div>
          <div className="mt-4">
            <BreakdownRow
              label="Net per transaction"
              value={formatCurrency(result.netPerTransaction)}
              sublabel="After split minus transaction fees"
              bold
            />
          </div>
        </div>
        <div className="border-t border-border pt-4">
          <BreakdownRow
            label="Transactions needed"
            value={String(result.transactionsNeeded)}
            sublabel="Target income / net per transaction"
            bold
          />
        </div>
      </div>
    </div>
  );
}

interface BreakdownRowProps {
  label: string;
  value: string;
  sublabel?: string;
  bold?: boolean;
}

function BreakdownRow({
  label,
  value,
  sublabel,
  bold,
}: BreakdownRowProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="font-sans text-sm text-ink-muted">
          {label}
        </span>
        <span
          className={`font-sans text-base ${bold ? 'font-semibold text-ink' : 'text-ink'}`}
        >
          {value}
        </span>
      </div>
      {sublabel && (
        <p className="mt-0.5 font-sans text-xs text-ink-muted/60">
          {sublabel}
        </p>
      )}
    </div>
  );
}
