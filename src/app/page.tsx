import PreferencesTab from "@/components/PreferencesTab";
import ChatLayout from "@/components/chat/ChatLayout";
import { cookies } from "next/headers";

export default function Home() {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <main
      className="flex h-screen flex-col items-center justify-center p-4 md:px-24 py-32 gap-4 dark:bg-gradient-to-b max-lg:to-95% lg:from-35% from-[#1C1938]
    
    light-mode
    "
    >
      <PreferencesTab />

      <div className="z-10 border-gray-400  dark:border-[#1C2938] border-[3px] shadow-md rounded-lg max-w-5xl w-full min-h-[85vh] text-sm lg:flex">
        <ChatLayout defaultLayout={defaultLayout} />
      </div>
    </main>
  );
}
