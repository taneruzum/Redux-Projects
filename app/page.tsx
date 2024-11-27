"use client"
import ContentBox from "@/components/ContentBox";
import ToggleThemeButton from "@/components/ThemeToggle";
import { ContentData } from "@/constants/homeContent";

export default function Home() {

  return (
    <div className="w-full">
      <div className="relative w-full flex items-center justify-center p-6">
        <h1 className="text-3xl font-bold text-primary">PROJECTS WTIH REDUX</h1>
        <div className="w-fit absolute right-0 "><ToggleThemeButton /></div>
      </div>
      <div className="flex flex-col gap-6">
        {ContentData.map((data, index) => (
          <ContentBox key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
