interface RemoveButtonProps {
  showConfirm: boolean;
  onToggleConfirm: () => void;
  onConfirm: () => void;
}

export default function RemoveButton({
  showConfirm,
  onToggleConfirm,
  onConfirm,
}: RemoveButtonProps) {
  if (showConfirm) {
    return (
      <div className="flex items-center gap-2">
        <span className="font-sans text-xs text-zone-red">Sure?</span>
        <button
          type="button"
          onClick={onConfirm}
          className="font-sans text-xs font-semibold text-zone-red transition-colors duration-200 hover:text-zone-red/70 focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        >
          Yes, remove
        </button>
        <button
          type="button"
          onClick={onToggleConfirm}
          className="font-sans text-xs text-ink-muted transition-colors duration-200 hover:text-ink focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onToggleConfirm}
      className="font-sans text-xs text-ink-muted transition-colors duration-200 hover:text-zone-red focus:outline-hidden focus:ring-2 focus:ring-accent/20"
    >
      Remove
    </button>
  );
}
