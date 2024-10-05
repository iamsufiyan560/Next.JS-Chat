import PreferencesTab from "@/components/PreferencesTab";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-4 md:px-24 py-32 gap-4">
      <PreferencesTab />
    </main>
  );
}
