'use client';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  sectionNames: string[];
}

export default function ProgressIndicator({
  currentStep,
  totalSteps,
  sectionNames,
}: ProgressIndicatorProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-3">
        {sectionNames.map((name, i) => {
          const isActive = i === currentStep;
          const isComplete = i < currentStep;

          return (
            <div key={name} className="flex items-center gap-2">
              <div
                className={`
                  flex h-8 w-8 items-center justify-center rounded-none
                  font-sans text-sm font-semibold transition-colors duration-200
                  ${isComplete ? 'bg-candid text-white' : ''}
                  ${isActive ? 'border-2 border-candid text-candid' : ''}
                  ${!isActive && !isComplete ? 'border-2 border-border text-ink-muted' : ''}
                `}
              >
                {isComplete ? '\u2713' : i + 1}
              </div>
              <span
                className={`
                  hidden font-sans text-sm sm:inline
                  ${isActive ? 'font-semibold text-ink' : 'text-ink-muted'}
                `}
              >
                {name}
              </span>
              {i < totalSteps - 1 && (
                <div
                  className={`
                    mx-2 hidden h-px w-12 sm:block lg:w-20
                    ${i < currentStep ? 'bg-candid' : 'bg-border'}
                  `}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="h-1 w-full bg-border">
        <div
          className="h-full bg-candid transition-all duration-500 ease-out"
          style={{
            width: `${((currentStep + 1) / totalSteps) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
