"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, Volume2, VolumeX } from "lucide-react";
import { usePreferences } from "@/store/usePreferences";
import useSound from "use-sound";
const PreferencesTab = () => {
  const { setTheme } = useTheme();
  const { soundEnabled, setSoundEnabled } = usePreferences();
  const [playMouseClick] = useSound("/sounds/mouse-click.mp3");
  const [playSoundOn] = useSound("/sounds/sound-on.mp3", { volume: 0.3 });
  const [playSoundOff] = useSound("/sounds/sound-off.mp3", { volume: 0.3 });

  return (
    <div className="flex flex-wrap gap-2 px-1 md:px-2">
      <Button
        className="dark:bg-black dark:hover:bg-muted bg-purple-200   hover:bg-purple-300"
        variant={"outline"}
        size={"icon"}
        onClick={() => {
          setTheme("light");
          soundEnabled && playMouseClick();
        }}
      >
        <SunIcon className="size-[1.2rem]  text-muted-foreground " />
      </Button>
      <Button
        className="dark:bg-black dark:hover:bg-muted bg-purple-200  hover:bg-purple-300"
        onClick={() => {
          setTheme("dark");
          soundEnabled && playMouseClick();
        }}
        variant={"outline"}
        size={"icon"}
      >
        <MoonIcon className="size-[1.2rem] text-muted-foreground" />
      </Button>
      <Button
        className="dark:bg-black dark:hover:bg-muted bg-purple-200  hover:bg-purple-300"
        onClick={() => {
          setSoundEnabled(!soundEnabled);
          soundEnabled ? playSoundOff() : playSoundOn();
        }}
        variant={"outline"}
        size={"icon"}
      >
        {soundEnabled ? (
          <Volume2 className="size-[1.2rem] text-muted-foreground" />
        ) : (
          <VolumeX className="size-[1.2rem] text-muted-foreground" />
        )}
      </Button>
    </div>
  );
};

export default PreferencesTab;
