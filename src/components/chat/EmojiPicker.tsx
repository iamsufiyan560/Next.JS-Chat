"use client";

import { SmileIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useTheme } from "next-themes";

interface EmojiPickerProps {
  onChange: (emoji: string) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const EmojiPicker = ({ onChange, isOpen, onOpenChange }: EmojiPickerProps) => {
  const { theme } = useTheme();

  return (
    <Popover open={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <SmileIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" sideOffset={5}>
        <Picker
          emojiSize={18}
          data={data}
          maxFrequentRows={1}
          theme={theme === "dark" ? "dark" : "light"}
          onEmojiSelect={(emoji: any) => onChange(emoji.native)}
        />
      </PopoverContent>
    </Popover>
  );
};

export default EmojiPicker;
