"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, Volume2, VolumeX } from "lucide-react";
const PreferencesTab = () => {
  const { setTheme } = useTheme();
  const [soundEnabled, setSoundEnabled] = useState(false);
  return (
    <div className="flex flex-wrap gap-2 px-1 md:px-2">
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => {
          setTheme("light");
        }}
      >
        <SunIcon className="size-[1.2rem] text-muted-foreground" />
      </Button>
      <Button
        onClick={() => {
          setTheme("dark");
        }}
        variant={"outline"}
        size={"icon"}
      >
        <MoonIcon className="size-[1.2rem] text-muted-foreground" />
      </Button>
      <Button variant={"outline"} size={"icon"}>
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
