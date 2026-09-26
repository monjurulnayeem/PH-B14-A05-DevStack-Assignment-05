import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

import type { Technology } from "../types/technology";

function TechnologySection() {
  const [technologies, setTechnologies] =
    useState<Technology[]>([]);

  const [selectedStack, setSelectedStack] =
    useState<Technology[]>([]);

  const [loading, setLoading] =
    useState<boolean>(true);

  const [error, setError] =
    useState<string>("");

  /*
    Load technology data from JSON
  */
  useEffect(() => {
    const loadTechnologies = async (): Promise<void> => {
      try {
        const response = await fetch(
          "/technologies.json"
        );

        if (!response.ok) {
          throw new Error(
            "Failed to load technologies."
          );
        }

        const data: Technology[] =
          await response.json();

        setTechnologies(data);
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Something went wrong.";

        setError(message);

        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  /*
    Add technology to stack
  */
  const handleAdd = (
    technology: Technology
  ): void => {
    const alreadyExists =
      selectedStack.some(
        (item) => item.id === technology.id
      );

    if (alreadyExists) {
      toast.warning(
        `${technology.name} is already in your stack.`
      );

      return;
    }

    setSelectedStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  /*
    Remove one technology
  */
  const handleRemove = (
    technologyId: number
  ): void => {
    const technologyToRemove =
      selectedStack.find(
        (technology) =>
          technology.id === technologyId
      );

    if (!technologyToRemove) {
      return;
    }

    setSelectedStack((previousStack) =>
      previousStack.filter(
        (technology) =>
          technology.id !== technologyId
      )
    );

    toast.success(
      `${technologyToRemove.name} removed from your stack.`
    );
  };

  /*
    Remove all technologies
  */
  const handleRemoveAll = (): void => {
    if (selectedStack.length === 0) {
      return;
    }

    setSelectedStack([]);

    toast.success(
      "All technologies removed from your stack."
    );
  };

  return (
    <section
      id="technologies"
      className="border-t border-slate-50 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1300px] px-5 lg:px-0">

        {/* Section Heading */}
        <div className="mb-7">
          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            Explore the{" "}
            <span className="brand-gradient-text">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-xs text-slate-400 sm:text-sm">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="text-center">

              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-pink-500" />

              <p className="mt-3 text-xs text-slate-400">
                Loading technologies...
              </p>

            </div>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="rounded-lg border border-red-100 bg-red-50 p-5 text-center">

            <p className="text-sm font-medium text-red-500">
              {error}
            </p>

            <p className="mt-1 text-xs text-red-400">
              Please check public/technologies.json.
            </p>

          </div>
        )}

        {/* Technology Area */}
        {!loading && !error && (
          <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">

            {/* Technology Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

              {technologies.map((technology) => {
                const isAdded =
                  selectedStack.some(
                    (item) =>
                      item.id === technology.id
                  );

                return (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    onAdd={handleAdd}
                    isAdded={isAdded}
                  />
                );
              })}

            </div>

            {/* Your Stack */}
            <StackSidebar
              selectedStack={selectedStack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />

          </div>
        )}

      </div>
    </section>
  );
}

export default TechnologySection;