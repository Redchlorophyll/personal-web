var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/svg-component/Facebook.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var SvgFacebook = (props) => /* @__PURE__ */ jsxs(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 101,
    height: 101,
    fill: "none"
  }, props), {
    children: [
      /* @__PURE__ */ jsxs("g", { filter: "url(#facebook_svg__a)", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#1877F2",
            d: "M97 46.5C97 20.816 76.184 0 50.5 0S4 20.816 4 46.5c0 23.214 17.002 42.45 39.234 45.937V59.941H31.428V46.5h11.806V36.255c0-11.652 6.94-18.09 17.565-18.09 5.086 0 10.408.907 10.408.907v11.444H65.34c-5.776 0-7.574 3.587-7.574 7.265V46.5h12.896L68.6 59.941H57.766v32.496C79.998 88.95 97 69.714 97 46.5Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fff",
            d: "M68.6 59.941 70.663 46.5H57.766v-8.719c0-3.678 1.798-7.265 7.574-7.265h5.867V19.072s-5.322-.908-10.408-.908c-10.626 0-17.565 6.44-17.565 18.091V46.5H31.428v13.441h11.806v32.496c2.37.372 4.796.563 7.266.563 2.47 0 4.895-.19 7.266-.563V59.941H68.6Z"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
        "filter",
        {
          id: "facebook_svg__a",
          width: 101,
          height: 101,
          x: 0,
          y: 0,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ jsx("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            /* @__PURE__ */ jsx(
              "feColorMatrix",
              {
                in: "SourceAlpha",
                result: "hardAlpha",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              }
            ),
            /* @__PURE__ */ jsx("feOffset", { dy: 4 }),
            /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: 2 }),
            /* @__PURE__ */ jsx("feComposite", { in2: "hardAlpha", operator: "out" }),
            /* @__PURE__ */ jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
            /* @__PURE__ */ jsx("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_762_4" }),
            /* @__PURE__ */ jsx(
              "feBlend",
              {
                in: "SourceGraphic",
                in2: "effect1_dropShadow_762_4",
                result: "shape"
              }
            )
          ]
        }
      ) })
    ]
  })
);
var Facebook_default = SvgFacebook;

// src/svg-component/Github.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var SvgGithub = (props) => /* @__PURE__ */ jsxs2(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 102,
    height: 102,
    fill: "none"
  }, props), {
    children: [
      /* @__PURE__ */ jsx2("g", { filter: "url(#github_svg__a)", children: /* @__PURE__ */ jsx2(
        "path",
        {
          fill: "#000",
          d: "M51 0C25.047 0 4 21.575 4 48.19 4 69.48 17.467 87.545 36.142 93.917c2.349.446 3.211-1.045 3.211-2.318 0-1.15-.044-4.945-.064-8.972-13.075 2.915-15.834-5.686-15.834-5.686-2.138-5.57-5.219-7.05-5.219-7.05-4.264-2.992.322-2.93.322-2.93 4.72.34 7.204 4.966 7.204 4.966 4.192 7.367 10.995 5.237 13.678 4.005.421-3.114 1.64-5.24 2.983-6.443C31.984 68.27 21.01 64.138 21.01 45.673c0-5.261 1.836-9.56 4.843-12.935-.488-1.214-2.097-6.115.455-12.753 0 0 3.947-1.295 12.928 4.94 3.75-1.068 7.77-1.603 11.765-1.622 3.994.019 8.018.554 11.774 1.622 8.97-6.235 12.912-4.94 12.912-4.94 2.558 6.638.948 11.54.46 12.753 3.014 3.375 4.838 7.674 4.838 12.935 0 18.509-10.995 22.584-21.461 23.777 1.685 1.496 3.188 4.428 3.188 8.924 0 6.448-.055 11.638-.055 13.225 0 1.282.846 2.785 3.229 2.312C84.55 87.53 98 69.474 98 48.19 98 21.575 76.957 0 51 0Z"
        }
      ) }),
      /* @__PURE__ */ jsx2("defs", { children: /* @__PURE__ */ jsxs2(
        "filter",
        {
          id: "github_svg__a",
          width: 102,
          height: 102,
          x: 0,
          y: 0,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ jsx2("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            /* @__PURE__ */ jsx2(
              "feColorMatrix",
              {
                in: "SourceAlpha",
                result: "hardAlpha",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              }
            ),
            /* @__PURE__ */ jsx2("feOffset", { dy: 4 }),
            /* @__PURE__ */ jsx2("feGaussianBlur", { stdDeviation: 2 }),
            /* @__PURE__ */ jsx2("feComposite", { in2: "hardAlpha", operator: "out" }),
            /* @__PURE__ */ jsx2("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
            /* @__PURE__ */ jsx2("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_762_13" }),
            /* @__PURE__ */ jsx2(
              "feBlend",
              {
                in: "SourceGraphic",
                in2: "effect1_dropShadow_762_13",
                result: "shape"
              }
            )
          ]
        }
      ) })
    ]
  })
);
var Github_default = SvgGithub;

// src/svg-component/IcArrowToggle.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var SvgIcArrowToggle = (props) => /* @__PURE__ */ jsxs3(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 25,
    height: 25,
    fill: "none"
  }, props), {
    children: [
      /* @__PURE__ */ jsx3(
        "rect",
        {
          width: 17.243,
          height: 4.411,
          x: 12.192,
          fill: "#fff",
          rx: 2.205,
          transform: "rotate(45 12.192 0)"
        }
      ),
      /* @__PURE__ */ jsx3(
        "rect",
        {
          width: 17.243,
          height: 4.411,
          x: 9.073,
          y: 21.266,
          fill: "#fff",
          rx: 2.205,
          transform: "rotate(-45 9.073 21.266)"
        }
      )
    ]
  })
);
var IcArrowToggle_default = SvgIcArrowToggle;

// src/svg-component/IcArrow.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var SvgIcArrow = (props) => /* @__PURE__ */ jsxs4(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 10,
    fill: "none"
  }, props), {
    children: [
      /* @__PURE__ */ jsx4(
        "path",
        {
          fill: "url(#ic_arrow_svg__a)",
          d: "M14.202 0a2.576 2.576 0 0 1-.047 3.643l-6.36 6.194L5.999 7.99 14.202 0Z"
        }
      ),
      /* @__PURE__ */ jsx4(
        "path",
        {
          fill: "#D9D9D9",
          d: "M1.839.093 9.635 8.04 7.796 9.844 1.804 3.736A2.576 2.576 0 0 1 1.84.093Z"
        }
      ),
      /* @__PURE__ */ jsx4("defs", { children: /* @__PURE__ */ jsxs4(
        "linearGradient",
        {
          id: "ic_arrow_svg__a",
          x1: 12.056,
          x2: 6.673,
          y1: 4.033,
          y2: 9.293,
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ jsx4("stop", { stopColor: "#CBCBCB" }),
            /* @__PURE__ */ jsx4("stop", { offset: 1, stopColor: "#BCC0CA" })
          ]
        }
      ) })
    ]
  })
);
var IcArrow_default = SvgIcArrow;

// src/svg-component/IcBack.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var SvgIcBack = (props) => /* @__PURE__ */ jsx5(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 37,
    height: 26,
    fill: "none"
  }, props), {
    children: /* @__PURE__ */ jsx5(
      "path",
      {
        fill: "#406FCB",
        d: "M.763 11.763a1.75 1.75 0 0 0 0 2.474l11.136 11.137a1.75 1.75 0 0 0 2.475-2.474l-9.9-9.9 9.9-9.9A1.75 1.75 0 0 0 11.9.627L.764 11.763ZM37 11.25H2v3.5h35v-3.5Z"
      }
    )
  })
);
var IcBack_default = SvgIcBack;

// src/svg-component/IcCheckboxCheck.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var SvgIcCheckboxCheck = (props) => /* @__PURE__ */ jsxs5(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 18,
    height: 11,
    fill: "none"
  }, props), {
    children: [
      /* @__PURE__ */ jsx6("path", { fill: "#fff", d: "m0 4.228 1.29-1.11L7.116 9.89 5.826 11z" }),
      /* @__PURE__ */ jsx6("path", { fill: "#fff", d: "m5.826 11-1.11-1.29L16.003 0l1.11 1.29z" })
    ]
  })
);
var IcCheckboxCheck_default = SvgIcCheckboxCheck;

// src/svg-component/IcChecked.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var SvgIcChecked = (props) => /* @__PURE__ */ jsx7(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 31,
    height: 31,
    fill: "none"
  }, props), {
    children: /* @__PURE__ */ jsx7(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M15.275 30.55c8.436 0 15.275-6.839 15.275-15.275S23.711 0 15.275 0 0 6.839 0 15.275 6.839 30.55 15.275 30.55Zm-3.153-8.974-1.29-1.5L5.345 13.7l1.5-1.29 5.486 6.375L23.956 8.783l1.291 1.5-13.126 11.293Z",
        clipRule: "evenodd"
      }
    )
  })
);
var IcChecked_default = SvgIcChecked;

// src/svg-component/IcEdit.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var SvgIcEdit = (props) => /* @__PURE__ */ jsx8(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 11,
    height: 11,
    fill: "none"
  }, props), {
    children: /* @__PURE__ */ jsx8(
      "path",
      {
        fill: "#000",
        d: "M9.088 0c-.235 0-.47.09-.648.269L7.333 1.375l2.292 2.292 1.106-1.107a.916.916 0 0 0 0-1.296L9.736.269A.914.914 0 0 0 9.088 0ZM6.417 2.292l-5.381 5.38s.42-.037.577.12c.157.156.028 1.182.22 1.375.193.192 1.212.057 1.358.203.147.146.136.594.136.594l5.381-5.38-2.291-2.292ZM.458 9.167.026 10.39a.458.458 0 0 0 .587.581l.012-.003.003-.002 1.205-.425-.687-.688-.688-.687Z"
      }
    )
  })
);
var IcEdit_default = SvgIcEdit;

// src/svg-component/IcError.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var SvgIcError = (props) => /* @__PURE__ */ jsx9(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 31,
    height: 31,
    fill: "none"
  }, props), {
    children: /* @__PURE__ */ jsx9(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M15.275 30.55c8.436 0 15.275-6.839 15.275-15.275S23.711 0 15.275 0 0 6.839 0 15.275 6.839 30.55 15.275 30.55ZM6.421 9.57l3.275-3.229 5.508 5.588 5.587-5.508 3.23 3.275-5.588 5.508 5.508 5.587-3.275 3.23-5.509-5.588L9.57 23.94l-3.229-3.275 5.588-5.509L6.42 9.57Z",
        clipRule: "evenodd"
      }
    )
  })
);
var IcError_default = SvgIcError;

// src/svg-component/IcInfo.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var SvgIcInfo = (props) => /* @__PURE__ */ jsx10(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 31,
    height: 31,
    fill: "none"
  }, props), {
    children: /* @__PURE__ */ jsx10(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M30.55 15.275c0 8.436-6.839 15.275-15.275 15.275S0 23.711 0 15.275 6.839 0 15.275 0 30.55 6.839 30.55 15.275Zm-17.482-1.442a2.226 2.226 0 1 1 4.452 0v8.487a2.226 2.226 0 1 1-4.452 0v-8.487Zm2.087-7.652a2.087 2.087 0 1 0 0 4.174h.278a2.087 2.087 0 0 0 0-4.174h-.278Z",
        clipRule: "evenodd"
      }
    )
  })
);
var IcInfo_default = SvgIcInfo;

// src/svg-component/IcLoading.tsx
import { jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
var SvgIcLoading = (props) => /* @__PURE__ */ jsxs6(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none"
  }, props), {
    children: [
      /* @__PURE__ */ jsx11(
        "path",
        {
          fill: "#fff",
          d: "M8 1.333a6.667 6.667 0 1 0 0 13.333A6.667 6.667 0 0 0 8 1.333Zm0 12A5.333 5.333 0 1 1 8 2.667a5.333 5.333 0 0 1 0 10.666Z",
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ jsx11(
        "path",
        {
          fill: "#C7C7C7",
          d: "M13.333 8h1.334A6.667 6.667 0 0 0 8 1.333v1.333A5.333 5.333 0 0 1 13.333 8Z"
        }
      )
    ]
  })
);
var IcLoading_default = SvgIcLoading;

// src/svg-component/IcMoon.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
var SvgIcMoon = (props) => /* @__PURE__ */ jsx12(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 30,
    height: 34,
    fill: "none"
  }, props), {
    children: /* @__PURE__ */ jsx12(
      "path",
      {
        fill: "#FDFF84",
        fillRule: "evenodd",
        d: "M.318 27.84a16.492 16.492 0 0 0 12.266 5.472c9.021 0 16.455-7.313 16.455-16.334 0-8.567-6.703-15.593-15.103-16.28 2.6 2.887 4.188 6.692 4.188 10.862 0 9.021-7.434 16.334-16.455 16.334-.455 0-.905-.018-1.351-.055Z",
        clipRule: "evenodd"
      }
    )
  })
);
var IcMoon_default = SvgIcMoon;

// src/svg-component/IcSnackbarClose.tsx
import { jsx as jsx13, jsxs as jsxs7 } from "react/jsx-runtime";
var SvgIcSnackbarClose = (props) => /* @__PURE__ */ jsxs7(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 37,
    height: 37,
    fill: "none"
  }, props), {
    children: [
      /* @__PURE__ */ jsx13(
        "rect",
        {
          width: 2.746,
          height: 26.082,
          fill: "#fff",
          rx: 1.373,
          transform: "scale(-1 1) rotate(43.589 -15.28 -9.032)"
        }
      ),
      /* @__PURE__ */ jsx13(
        "rect",
        {
          width: 2.746,
          height: 26.082,
          fill: "#fff",
          rx: 1.373,
          transform: "scale(-1 1) rotate(-46.411 -2.239 38.843)"
        }
      )
    ]
  })
);
var IcSnackbarClose_default = SvgIcSnackbarClose;

// src/svg-component/IcSunny.tsx
import { jsx as jsx14, jsxs as jsxs8 } from "react/jsx-runtime";
var SvgIcSunny = (props) => /* @__PURE__ */ jsxs8(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 35,
    height: 29,
    fill: "none"
  }, props), {
    children: [
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 21.757,
          height: 21.757,
          x: 0.689,
          y: 0.143,
          fill: "#FFF494",
          rx: 10.879
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 10.678,
          y: 6.848,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 10.678,
          y: 6.848,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 10.678,
          y: 6.848,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 16.562,
          y: 11.09,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 16.562,
          y: 11.09,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 16.562,
          y: 11.09,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 6.3,
          y: 11.637,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 6.3,
          y: 11.637,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 6.3,
          y: 11.637,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 1.51,
          y: 15.743,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 1.51,
          y: 15.743,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 1.51,
          y: 15.743,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 9.173,
          y: 15.743,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 9.173,
          y: 15.743,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 9.173,
          y: 15.743,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 15.604,
          y: 15.743,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 15.604,
          y: 15.743,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "rect",
        {
          width: 11.768,
          height: 12.316,
          x: 15.604,
          y: 15.743,
          fill: "#D2FFFF",
          rx: 5.884
        }
      ),
      /* @__PURE__ */ jsx14(
        "path",
        {
          fill: "#D2FFFF",
          d: "M22.447 21.763a5.884 5.884 0 0 1 11.768 0v.548a5.884 5.884 0 1 1-11.769 0v-.548Z"
        }
      ),
      /* @__PURE__ */ jsx14(
        "path",
        {
          fill: "#D2FFFF",
          d: "M22.447 21.763a5.884 5.884 0 0 1 11.768 0v.548a5.884 5.884 0 1 1-11.769 0v-.548Z"
        }
      ),
      /* @__PURE__ */ jsx14(
        "path",
        {
          fill: "#D2FFFF",
          d: "M22.447 21.763a5.884 5.884 0 0 1 11.768 0v.548a5.884 5.884 0 1 1-11.769 0v-.548Z"
        }
      )
    ]
  })
);
var IcSunny_default = SvgIcSunny;

// src/svg-component/IcTrash.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var SvgIcTrash = (props) => /* @__PURE__ */ jsx15(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 11,
    height: 11,
    fill: "none"
  }, props), {
    children: /* @__PURE__ */ jsx15(
      "path",
      {
        fill: "#fff",
        d: "M4.402 0a.593.593 0 0 0-.393.138.454.454 0 0 0-.165.34H.557a.574.574 0 0 0-.483.238.43.43 0 0 0 0 .482c.1.149.285.239.483.237h9.886a.574.574 0 0 0 .483-.237.43.43 0 0 0 0-.482.574.574 0 0 0-.483-.238H7.156a.454.454 0 0 0-.165-.34A.593.593 0 0 0 6.598 0H4.402ZM.557 2.391v7.652c0 .53.491.957 1.098.957h7.69c.607 0 1.098-.428 1.098-.957V2.391H.557Z"
      }
    )
  })
);
var IcTrash_default = SvgIcTrash;

// src/svg-component/IcWarning.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
var SvgIcWarning = (props) => /* @__PURE__ */ jsx16(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 31,
    height: 27,
    fill: "none"
  }, props), {
    children: /* @__PURE__ */ jsx16(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M13.492 1.029c.791-1.372 2.771-1.372 3.563 0l13.213 22.885C31.06 25.286 30.07 27 28.486 27H2.06C.477 27-.513 25.286.28 23.914L13.492 1.03Zm-.74 6.903a.686.686 0 0 1 .683-.732h3.676c.397 0 .711.336.684.732l-.764 11.314a.686.686 0 0 1-.684.64H14.2c-.36 0-.66-.28-.684-.64L12.75 7.932Zm2.521 12.64a1.886 1.886 0 1 0 0 3.77 1.886 1.886 0 0 0 0-3.77Z",
        clipRule: "evenodd"
      }
    )
  })
);
var IcWarning_default = SvgIcWarning;

// src/svg-component/Instagram.tsx
import { jsx as jsx17, jsxs as jsxs9 } from "react/jsx-runtime";
var SvgInstagram = (props) => /* @__PURE__ */ jsxs9(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 102,
    height: 102,
    fill: "none"
  }, props), {
    children: [
      /* @__PURE__ */ jsxs9("g", { filter: "url(#instagram_svg__a)", children: [
        /* @__PURE__ */ jsx17(
          "path",
          {
            fill: "#fff",
            d: "M4 47C4 21.043 25.043 0 51 0s47 21.043 47 47-21.043 47-47 47S4 72.957 4 47Z"
          }
        ),
        /* @__PURE__ */ jsx17(
          "mask",
          {
            id: "instagram_svg__b",
            width: 94,
            height: 94,
            x: 4,
            y: 0,
            maskUnits: "userSpaceOnUse",
            style: {
              maskType: "alpha"
            },
            children: /* @__PURE__ */ jsx17(
              "path",
              {
                fill: "#fff",
                fillRule: "evenodd",
                d: "M4 47C4 21.043 25.043 0 51 0s47 21.043 47 47-21.043 47-47 47S4 72.957 4 47Z",
                clipRule: "evenodd"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx17("g", { mask: "url(#instagram_svg__b)", children: /* @__PURE__ */ jsx17(
          "path",
          {
            fill: "#000",
            fillRule: "evenodd",
            d: "M50.998 21.933c-6.804 0-7.658.03-10.332.152-2.668.122-4.49.544-6.084 1.164-1.648.64-3.047 1.497-4.44 2.89-1.395 1.394-2.25 2.793-2.893 4.44-.622 1.595-1.045 3.417-1.165 6.085-.12 2.673-.15 3.528-.15 10.336s.03 7.66.15 10.333c.123 2.669.546 4.49 1.165 6.084.641 1.649 1.498 3.048 2.891 4.44 1.393 1.395 2.792 2.254 4.44 2.894 1.594.62 3.416 1.042 6.084 1.165 2.674.121 3.528.151 10.335.151 6.808 0 7.66-.03 10.334-.151 2.668-.123 4.492-.545 6.087-1.165 1.648-.64 3.045-1.499 4.437-2.893 1.395-1.393 2.251-2.792 2.894-4.44.616-1.594 1.039-3.416 1.164-6.084.12-2.674.152-3.526.152-10.334s-.032-7.662-.152-10.336c-.125-2.668-.548-4.49-1.165-6.084-.642-1.648-1.498-3.047-2.893-4.44-1.394-1.395-2.788-2.251-4.439-2.89-1.598-.62-3.42-1.043-6.089-1.165-2.673-.122-3.524-.152-10.33-.152Zm-2.244 4.518h2.248c6.693 0 7.487.024 10.13.144 2.444.112 3.77.52 4.654.863 1.17.455 2.003.998 2.88 1.875.878.877 1.42 1.713 1.876 2.883.343.882.752 2.209.863 4.653.12 2.642.147 3.436.147 10.126 0 6.69-.027 7.483-.147 10.126-.111 2.444-.52 3.77-.863 4.653-.454 1.17-.998 2.002-1.876 2.88-.877.877-1.71 1.42-2.88 1.874-.883.345-2.21.752-4.654.864-2.643.12-3.437.146-10.13.146-6.693 0-7.486-.026-10.129-.146-2.444-.113-3.77-.521-4.654-.864-1.17-.455-2.006-.998-2.883-1.875-.877-.878-1.42-1.711-1.876-2.881-.343-.883-.752-2.21-.863-4.653-.12-2.643-.144-3.437-.144-10.13 0-6.694.024-7.484.144-10.127.112-2.444.52-3.77.863-4.654.454-1.17.999-2.005 1.876-2.882.877-.878 1.713-1.42 2.883-1.876.883-.345 2.21-.752 4.654-.864 2.313-.105 3.209-.136 7.88-.141v.006Zm12.62 7.169a3.008 3.008 0 0 1 3.009-3.007v-.002a3.009 3.009 0 1 1-3.008 3.009Zm-10.372.507c-7.11 0-12.873 5.764-12.873 12.873 0 7.11 5.764 12.87 12.873 12.87 7.11 0 12.871-5.76 12.871-12.87 0-7.109-5.762-12.873-12.871-12.873ZM59.358 47a8.356 8.356 0 1 0-16.712 0 8.356 8.356 0 0 0 16.712 0Z",
            clipRule: "evenodd"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx17("defs", { children: /* @__PURE__ */ jsxs9(
        "filter",
        {
          id: "instagram_svg__a",
          width: 102,
          height: 102,
          x: 0,
          y: 0,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ jsx17("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            /* @__PURE__ */ jsx17(
              "feColorMatrix",
              {
                in: "SourceAlpha",
                result: "hardAlpha",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              }
            ),
            /* @__PURE__ */ jsx17("feOffset", { dy: 4 }),
            /* @__PURE__ */ jsx17("feGaussianBlur", { stdDeviation: 2 }),
            /* @__PURE__ */ jsx17("feComposite", { in2: "hardAlpha", operator: "out" }),
            /* @__PURE__ */ jsx17("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
            /* @__PURE__ */ jsx17("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_762_14" }),
            /* @__PURE__ */ jsx17(
              "feBlend",
              {
                in: "SourceGraphic",
                in2: "effect1_dropShadow_762_14",
                result: "shape"
              }
            )
          ]
        }
      ) })
    ]
  })
);
var Instagram_default = SvgInstagram;

// src/svg-component/Linkedin.tsx
import { jsx as jsx18, jsxs as jsxs10 } from "react/jsx-runtime";
var SvgLinkedin = (props) => /* @__PURE__ */ jsxs10(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 101,
    height: 101,
    fill: "none"
  }, props), {
    children: [
      /* @__PURE__ */ jsxs10("g", { filter: "url(#linkedin_svg__a)", children: [
        /* @__PURE__ */ jsx18(
          "path",
          {
            fill: "#0077B5",
            d: "M4 46.5C4 20.819 24.819 0 50.5 0S97 20.819 97 46.5 76.181 93 50.5 93 4 72.181 4 46.5Z"
          }
        ),
        /* @__PURE__ */ jsx18(
          "path",
          {
            fill: "#fff",
            fillRule: "evenodd",
            d: "M37.555 28.72c0 3.04-2.288 5.472-5.963 5.472h-.067c-3.538 0-5.825-2.433-5.825-5.473 0-3.104 2.357-5.469 5.962-5.469 3.605 0 5.825 2.365 5.893 5.47Zm-.694 9.794v31.662H26.323V38.514h10.538Zm38.003 31.662V52.022c0-9.725-5.198-14.251-12.132-14.251-5.595 0-8.1 3.073-9.499 5.229v-4.485h-10.54c.14 2.97 0 31.662 0 31.662h10.54V52.494c0-.946.069-1.89.347-2.568.762-1.89 2.496-3.847 5.407-3.847 3.815 0 5.34 2.903 5.34 7.158v16.94h10.537Z",
            clipRule: "evenodd"
          }
        )
      ] }),
      /* @__PURE__ */ jsx18("defs", { children: /* @__PURE__ */ jsxs10(
        "filter",
        {
          id: "linkedin_svg__a",
          width: 101,
          height: 101,
          x: 0,
          y: 0,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ jsx18("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            /* @__PURE__ */ jsx18(
              "feColorMatrix",
              {
                in: "SourceAlpha",
                result: "hardAlpha",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              }
            ),
            /* @__PURE__ */ jsx18("feOffset", { dy: 4 }),
            /* @__PURE__ */ jsx18("feGaussianBlur", { stdDeviation: 2 }),
            /* @__PURE__ */ jsx18("feComposite", { in2: "hardAlpha", operator: "out" }),
            /* @__PURE__ */ jsx18("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
            /* @__PURE__ */ jsx18("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_762_7" }),
            /* @__PURE__ */ jsx18(
              "feBlend",
              {
                in: "SourceGraphic",
                in2: "effect1_dropShadow_762_7",
                result: "shape"
              }
            )
          ]
        }
      ) })
    ]
  })
);
var Linkedin_default = SvgLinkedin;
export {
  Facebook_default as Facebook,
  Github_default as Github,
  IcArrow_default as IcArrow,
  IcArrowToggle_default as IcArrowToggle,
  IcBack_default as IcBack,
  IcCheckboxCheck_default as IcCheckboxCheck,
  IcChecked_default as IcChecked,
  IcEdit_default as IcEdit,
  IcError_default as IcError,
  IcInfo_default as IcInfo,
  IcLoading_default as IcLoading,
  IcMoon_default as IcMoon,
  IcSnackbarClose_default as IcSnackbarClose,
  IcSunny_default as IcSunny,
  IcTrash_default as IcTrash,
  IcWarning_default as IcWarning,
  Instagram_default as Instagram,
  Linkedin_default as Linkedin
};
