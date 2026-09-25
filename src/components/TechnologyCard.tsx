import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

function TechnologyCard({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) {
  return (
    <article className="flex min-h-[245px] flex-col rounded-xl border border-slate-100 bg-white p-4 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]">

      {/* Top Row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-9 w-9 items-center justify-center">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-8 w-8 object-contain"
          />
        </div>

        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[9px] font-medium text-slate-500">
          {technology.badge}
        </span>
      </div>

      {/* Main Content */}
      <div className="mt-3 flex-1">
        <h3 className="text-[15px] font-bold text-slate-800">
          {technology.name}
        </h3>

        <p className="mt-2 line-clamp-3 text-[10px] leading-[1.55] text-slate-400">
          {technology.description}
        </p>
      </div>

      {/* Information Row */}
      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5">

        <span className="rounded bg-slate-50 px-2 py-1 text-[9px] font-medium text-slate-500">
          {technology.category}
        </span>

        <span className="text-[9px] text-slate-400">
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1 text-[9px] text-slate-600">
          <span className="text-amber-400">
            ★
          </span>

          {technology.rating}
        </span>

      </div>

      {/* Add Button */}
      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        className={`mt-3 w-full rounded-md px-3 py-2 text-[10px] font-medium transition ${
          isAdded
            ? "cursor-not-allowed bg-emerald-50 text-emerald-600"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded
          ? "✓ Added to Stack"
          : "Add to Stack"}
      </button>

    </article>
  );
}

export default TechnologyCard;