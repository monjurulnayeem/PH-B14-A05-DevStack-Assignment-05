import type { Technology } from "../types/technology";

interface StackItemProps {
  technology: Technology;
  onRemove: (technologyId: number) => void;
}

function StackItem({
  technology,
  onRemove,
}: StackItemProps) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-2.5 py-2">

      {/* Technology Icon */}
      <div className="flex h-7 w-7 shrink-0 items-center justify-center">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-6 w-6 object-contain"
        />
      </div>

      {/* Technology Information */}
      <div className="min-w-0 flex-1">
        <h4 className="truncate text-[10px] font-semibold text-slate-800">
          {technology.name}
        </h4>

        <p className="text-[8px] text-slate-400">
          {technology.category}
        </p>
      </div>

      {/* Remove Button */}
      <button
        type="button"
        onClick={() => onRemove(technology.id)}
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm text-slate-400 transition hover:bg-red-50 hover:text-red-500"
        aria-label={`Remove ${technology.name}`}
      >
        ×
      </button>

    </div>
  );
}

export default StackItem;