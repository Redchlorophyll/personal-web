import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDark, toggleLight } from "@/stores/theme";
import type { RootState } from "@/store";
import Image from "next/image";
import icSunny from "@/assets/img/icons/ic_sunny.svg";
import icMoon from "@/assets/img/icons/ic_moon.svg";

export default function ToggleMode() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  function onChangeMode(): void {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
      dispatch(toggleLight());
      document.documentElement.classList.remove("dark");
    } else if (
      localStorage.getItem("theme") === "light" ||
      !localStorage.getItem("theme")
    ) {
      localStorage.setItem("theme", "dark");
      dispatch(toggleDark());
      document.documentElement.classList.add("dark");
    }
  }

  return (
    <div
      className={`${
        theme === "light" ? "bg-black-300" : "bg-yellow-700"
      } w-24 h-12 rounded-full relative left transition-all duration-700`}
    >
      <input
        type="checkbox"
        aria-label="toggle-mode"
        id="toggle-mode"
        className="opacity-0 peer w-24 h-24 z-10"
        checked={theme === "dark"}
        onChange={onChangeMode}
      />
      <label
        htmlFor="toggle-mode"
        className="rounded-full absolute 
          bg-black-100 p-1 left-2 top-1
          peer-checked:bg-black-800
          peer-checked:left-12
          transition-all duration-700
          w-10 h-10
          flex justify-center
          "
      >
        <Image
          src={theme === "dark" ? icMoon : icSunny}
          width="25px"
          height="25px"
          alt={theme === "dark" ? "Dark mode icon" : "Light mode icon"}
        />
      </label>
    </div>
  );
}
