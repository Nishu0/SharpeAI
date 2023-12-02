import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
  useKBar
} from "kbar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HomeIcon, PaperAirplaneIcon, TableCellsIcon } from "@heroicons/react/24/solid";
import React from "react";

 const KbarInput = () => {
  const actions = [
    {
      id: "home",
      name: "Home",
      shortcut: ["h"],
      keywords: "email",
      perform: () => (window.location.pathname = "/"),
      icon: <HomeIcon className="w-6 h-6" />
    },
    {
      id: "transaction",
      name: "Transaction",
      shortcut: ["t"],
      keywords: "email",
      perform: () => (window.location.pathname = "transaction"),
      icon: <PaperAirplaneIcon className="w-6 h-6" />
    },
    {
      id: "data",
      name: "Data",
      shortcut: ["d"],
      keywords: "writing words",
      perform: () => (window.location.pathname = "data"),
      icon: <TableCellsIcon className="w-6 h-6" />
    },
  ];

  return (
    <KBarProvider actions={actions}>
        <CommandBar />
        <div className="flex justify-center p-8">
          <CommandButton />
        </div>
      </KBarProvider>
  );
};

function CommandBar() {
  return (
    <KBarPortal>
      <KBarPositioner className="p-2 bg-gray-900/80 flex items-center">
        <KBarAnimator className=" max-w-[600px] w-full rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-[rgba(0,_0,_0,_0.24)_0px_0px_40px] shadow-slate-300 dark:shadow-slate-700">
          <KBarSearch className="py-3 px-4 text-base w-full box-border outline-none border-none bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200" />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
}
function CommandButton() {
  const { query } = useKBar();
  const onClick = () => {
    query.toggle();
  };

  return (
    <button
      onClick={onClick}
      className="w-10 lg:w-36 h-10 border-[1px] bg-transparent rounded-lg font-medium border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300  hover:bg-slate-200 dark:hover:bg-slate-800"
    >
      <div className="items-center justify-between hidden px-3 lg:flex">
        Search...
        <span>⌘K</span>
      </div>
      <div className="flex justify-center w-10 h-10 p-2 lg:hidden">
        <MagnifyingGlassIcon />
      </div>
    </button>
  );
}
function RenderResults() {
  const { results, rootActionId } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="px-4 pt-4 pb-2 font-medium text-gray-400 uppercase ">
            {item}
          </div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId}
          />
        )
      }
    />
  )
}
const ResultItem = React.forwardRef(
  ({ action, active, currentRootActionId }, ref) => {
    const ancestors = React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors
      const index = action.ancestors.findIndex(
        ancestor => ancestor.id === currentRootActionId
      )
      // +1 removes the currentRootAction; e.g.
      // if we are on the "Set theme" parent action,
      // the UI should not display "Set theme… > Dark"
      // but rather just "Dark"
      return action.ancestors.slice(index + 1)
    }, [action.ancestors, currentRootActionId])

    return (
      <div
        ref={ref}
        className={`${
          active
            ? "bg-blue-400  rounded-lg text-gray-100 "
            : "transparent text-gray-500"
        } 'rounded-lg px-4 py-2 flex items-center cursor-pointer justify-between `}
      >
        <div className="flex items-center gap-2 text-base">
          {action.icon && action.icon}
          <div className="flex flex-col">
            <div>
              {ancestors.length > 0 &&
                ancestors.map(ancestor => (
                  <React.Fragment key={ancestor.id}>
                    <span className="mr-4 opacity-50">{ancestor.name}</span>
                    <span className="mr-4">&rsaquo;</span>
                  </React.Fragment>
                ))}
              <span>{action.name}</span>
            </div>
            {action.subtitle && (
              <span className="text-sm">{action.subtitle}</span>
            )}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div aria-hidden className="grid grid-flow-col gap-2">
            {action.shortcut.map(sc => (
              <kbd
                key={sc}
                className={`${
                  active
                    ? "bg-white text-blue-400 "
                    : "bg-gray-200 text-gray-500"
                } ' px-3 py-2 flex rounded-md items-center cursor-pointer justify-between `}
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    )
  }
)
export default KbarInput;
