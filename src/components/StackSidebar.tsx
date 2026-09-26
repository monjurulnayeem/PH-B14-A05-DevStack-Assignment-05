import StackItem from "./StackItem";

import type { Technology } from "../types/technology";

interface StackSidebarProps {
  selectedStack: Technology[];
  onRemove: (technologyId: number) => void;
  onRemoveAll: () => void;
}

function StackSidebar({
  selectedStack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) {
  return (
    <aside className="h-fit rounded-xl border border-slate-100 bg-white p-4 shadow-[0_2px_12px_rgba(15,23,42,0.04)] xl:sticky xl:top-20">

      {/* Sidebar Header */}
      <div>
        <h2 className="text-sm font-bold text-slate-800">
          Your Stack
        </h2>

        <p className="mt-1 text-[9px] text-slate-400">
          {selectedStack.length}{" "}
          {selectedStack.length === 1
            ? "Technology"
            : "Technologies"}{" "}
          Selected
        </p>
      </div>

      {/* Empty State */}
      {selectedStack.length === 0 ? (
        <div className="my-6 rounded-md bg-slate-50 px-3 py-5 text-center">
          <p className="text-[10px] leading-5 text-slate-400">
            Your stack is empty.
            <br />
            Add technologies to get started.
          </p>
        </div>
      ) : (
        /* Selected Technologies */
        <div className="mt-4 space-y-2">
          {selectedStack.map((technology) => (
            <StackItem
              key={technology.id}
              technology={technology}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}

      {/* Remove All */}
      {selectedStack.length > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-4 w-full rounded-md border border-red-200 py-2 text-[10px] font-medium text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}

    </aside>
  );
}

export default StackSidebar;