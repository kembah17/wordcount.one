interface AdSlotProps {
  slot: string;
  className?: string;
}

export default function AdSlot({ slot, className = '' }: AdSlotProps) {
  return (
    <div className={`ad-slot my-6 ${className}`} data-ad-slot={slot}>
      <div className="bg-[var(--ad-bg)] border border-dashed border-[var(--ad-border)] rounded-lg p-4 text-center text-sm text-text-light dark:text-[#CBD5E1]">
        Advertisement
      </div>
    </div>
  );
}
