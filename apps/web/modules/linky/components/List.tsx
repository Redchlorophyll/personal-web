import React, { ReactNode } from "react";
import { Tooltip } from "shared-ui";

type ListProps = {
  children: ReactNode;
};

type LinkItemProps = {
  title?: string;
  tag?: string;
  tagColor?: string;
  href?: string;
  children?: ReactNode;
  edit?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
};

export function List({ children }: ListProps) {
  return (
    // 0px 1.06619px 4.26474px 0.533093px rgba(0, 0, 0, 0.1);
    <div className="w-full flex justify-center">
      <section
        className={[
          "m-[10px] bg-black-100 max-w-[750px] w-[750px] p-[10px] flex flex-col gap-y-2",
          "shadow-[0_1px_4px_0.5px_rgba(0,0,0,0.1)]",
          "dark:bg-[#353535] shadow-[0_2px_8px_1px_rgba(0,0,0,0.1)]",
        ].join(" ")}
      >
        {children}
        <div className="w-full flex justify-center">
          <div className="w-4 h-4 bg-black-500 rounded-full" />
        </div>
      </section>
    </div>
  );
}

export function LinkItem({
  title = "",
  tag = "",
  tagColor = "",
  href = "",
  children,
  edit = false,
  onEdit,
  onDelete,
}: LinkItemProps) {
  return (
    <article className="w-full bg-black-200 relative dark:bg-[#282828]">
      <div className="border-l-[10px] pl-3 border-l-primary-700 pt-1 pb-1 pr-5 min-h-[70px]">
        <a href={href}>
          <div>
            <h4 className="font-bold text-base md:!text-xl dark:text-black-100">
              {title}
            </h4>
          </div>
          <div>
            <h5 style={{ color: tagColor }} className="text-sm sm:text-base">
              {tag}
            </h5>
          </div>
          <div>
            <p className="text-sm sm:text-base dark:text-black-100">
              {children}
            </p>
          </div>
        </a>

        {edit ? (
          <div className="gap-1 absolute top-1 right-2 hidden md:flex">
            <Tooltip tooltipContent={"Delete Linky"} direction={"bottom"}>
              <div className="w-6">
                <button
                  onClick={() => onDelete()}
                  className="bg-red-700 w-5 h-5 rounded-full p-[5px]"
                >
                  <div className="bg-[url('../img/icons/ic_trash.svg')] w-[10px] h-[10px] bg-contain" />
                </button>
              </div>
            </Tooltip>
            <Tooltip tooltipContent={"Edit Linky"} direction={"bottom"}>
              <div className="w-6">
                <button
                  onClick={() => onEdit()}
                  className="bg-black-100 w-5 h-5 rounded-full p-[5px]"
                >
                  <div className="bg-[url('../img/icons/ic_edit.svg')] w-[10px] h-[10px] bg-contain" />
                </button>
              </div>
            </Tooltip>
          </div>
        ) : (
          ""
        )}
      </div>
    </article>
  );
}

export function LoadingLinkItem() {
  return (
    <article className="w-full bg-black-200 relative dark:bg-[#282828]">
      <div className="border-l-[10px] pl-3 border-l-primary-700 pt-1 pb-1 pr-5 min-h-[70px]">
        <div>
          <div className="w-full h-3 animate-pulse bg-black-400 mb-1" />
          <div className="w-[20%] h-3 animate-pulse bg-black-400 mb-1" />
          <div className="w-full h-3 animate-pulse bg-black-400 mb-1" />
          <div className="w-[90%] h-3 animate-pulse bg-black-400 mb-1" />
          <div className="w-[95%] h-3 animate-pulse bg-black-400 mb-1" />
        </div>
      </div>
    </article>
  );
}
