// src/components/reach-me-out/reach-me-out.tsx
import Image from "next/image";
import { Linkedin, Github, Instagram, Facebook } from "shared-icon";
import { jsx, jsxs } from "react/jsx-runtime";
function ReachMeOut({ socialMedia }) {
  return /* @__PURE__ */ jsxs("section", { "aria-labelledby": "title", children: [
    /* @__PURE__ */ jsxs("div", { id: "title", className: "w-full flex justify-center text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "-translate-x-2", children: "Reach Me Out Here!" }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        Image,
        {
          src: "/ilustrations/fire.png",
          width: 20,
          height: 20,
          alt: "fire icons"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx("a", { href: socialMedia.linkedin, className: "w-16 flex justify-center", children: /* @__PURE__ */ jsx(Linkedin, { className: "scale-[0.5] absolute" }) }),
      /* @__PURE__ */ jsx("a", { href: socialMedia.github, className: "w-16 flex justify-center", children: /* @__PURE__ */ jsx(Github, { className: "scale-[0.5] absolute" }) }),
      /* @__PURE__ */ jsx("a", { href: socialMedia.instagram, className: "w-16 flex justify-center", children: /* @__PURE__ */ jsx(Instagram, { className: "scale-[0.5] absolute" }) }),
      /* @__PURE__ */ jsx("a", { href: socialMedia.facebook, className: "w-16 flex justify-center", children: /* @__PURE__ */ jsx(Facebook, { className: "scale-[0.5] absolute" }) })
    ] })
  ] });
}

// src/components/navbar-item/navbar-item.tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function NavbarItem({
  children,
  href = "#",
  wip = false
}) {
  const [isChecked, setChecked] = useState(false);
  const { asPath, push } = useRouter();
  const onLinkClicked = () => {
    if (isSamePath())
      return;
    else
      push(href);
  };
  const isSamePath = () => {
    const cleanUrl = asPath.split("?")[0];
    const baseUrl = cleanUrl.split("/")[1];
    return baseUrl === href.split("/")[1];
  };
  useEffect(() => {
    if (isSamePath())
      setChecked(true);
    else
      setChecked(false);
  }, []);
  return /* @__PURE__ */ jsxs2("div", { className: "relative h-[calc(100%+20px)]", children: [
    /* @__PURE__ */ jsx2(
      "input",
      {
        type: "checkbox",
        className: "cursor-pointer w-full h-full peer absolute -translate-y-3 z-[2] opacity-0",
        checked: isChecked,
        onChange: onLinkClicked
      }
    ),
    /* @__PURE__ */ jsx2(
      "div",
      {
        className: [
          "absolute transition-all peer-hover:h-[65%] bg-red-200 h-0 w-full rounded-b-[3px]",
          "peer-checked:text-black-100 peer-checked:peer-hover:h-full",
          "peer-checked:h-full peer-checked:bg-primary-700"
        ].join(" ")
      }
    ),
    " ",
    /* @__PURE__ */ jsxs2(
      "div",
      {
        className: [
          "relative p-[18px] transition-colors",
          "peer-hover:text-black-100 peer-checked:text-black-100 text-lg"
        ].join(" "),
        children: [
          wip ? /* @__PURE__ */ jsx2(
            "p",
            {
              className: [
                "bg-red-700 absolute z-[1] py-[1px] px-[3px]",
                "text-xs -translate-y-1 right-0 text-black-100"
              ].join(" "),
              children: "WIP"
            }
          ) : null,
          children
        ]
      }
    )
  ] });
}

// src/components/navbar/navbar.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Navbar({ children }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      className: [
        "w-full h-[67px] bg-black-100 mb-[8vh] md:mb-[15vh]",
        "shadow-[0_2px_8px_1px_rgba(0,0,0,0.1)]",
        "flex justify-center dark:bg-[#282828] dark:shadow-[0_2px_8px_1px_rgba(154,154,154,0.1)]"
      ].join(" "),
      children
    }
  );
}
export {
  Navbar,
  NavbarItem,
  ReachMeOut
};
