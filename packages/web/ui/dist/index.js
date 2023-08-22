"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Navbar: () => Navbar,
  NavbarItem: () => NavbarItem,
  ReachMeOut: () => ReachMeOut
});
module.exports = __toCommonJS(src_exports);

// src/components/reach-me-out/reach-me-out.tsx
var import_image = __toESM(require("next/image"));
var import_shared_icon = require("shared-icon");
var import_jsx_runtime = require("react/jsx-runtime");
function ReachMeOut({ socialMedia }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { "aria-labelledby": "title", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { id: "title", className: "w-full flex justify-center text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "-translate-x-2", children: "Reach Me Out Here!" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_image.default,
        {
          src: "/ilustrations/fire.png",
          width: 20,
          height: 20,
          alt: "fire icons"
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: socialMedia.linkedin, className: "w-16 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_shared_icon.Linkedin, { className: "scale-[0.5] absolute" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: socialMedia.github, className: "w-16 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_shared_icon.Github, { className: "scale-[0.5] absolute" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: socialMedia.instagram, className: "w-16 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_shared_icon.Instagram, { className: "scale-[0.5] absolute" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: socialMedia.facebook, className: "w-16 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_shared_icon.Facebook, { className: "scale-[0.5] absolute" }) })
    ] })
  ] });
}

// src/components/navbar-item/navbar-item.tsx
var import_router = require("next/router");
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function NavbarItem({
  children,
  href = "#",
  wip = false
}) {
  const [isChecked, setChecked] = (0, import_react.useState)(false);
  const { asPath, push } = (0, import_router.useRouter)();
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
  (0, import_react.useEffect)(() => {
    if (isSamePath())
      setChecked(true);
    else
      setChecked(false);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative h-[calc(100%+20px)]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      {
        type: "checkbox",
        className: "cursor-pointer w-full h-full peer absolute -translate-y-3 z-[2] opacity-0",
        checked: isChecked,
        onChange: onLinkClicked
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "div",
      {
        className: [
          "relative p-[18px] transition-colors",
          "peer-hover:text-black-100 peer-checked:text-black-100 text-lg"
        ].join(" "),
        children: [
          wip ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_jsx_runtime3 = require("react/jsx-runtime");
function Navbar({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Navbar,
  NavbarItem,
  ReachMeOut
});
