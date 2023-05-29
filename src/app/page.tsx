import { Ship } from "lucide-react";
import { AlertCard } from "../../components/Alert";
import { AnnouncementCard } from "../../components/AnnouncementCard";
import { Footer } from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="flex mt-4 justify-center flex-col items-center ">
        <AlertCard
          className="w-1/3 bg-yellow-400 text-stone-50 dark:border dark:border-yellow-400 dark:bg-transparent dark:text-yellow-400"
          iconClassName="w-4 h-4 stroke-stone-50 dark:stroke-yellow-400"
          title="Info"
          message="Work in Progress"
        />
        <AnnouncementCard />
        <AnnouncementCard />

        <AnnouncementCard />
        <AnnouncementCard />

        <AnnouncementCard />
        <AnnouncementCard />
      </div>
    </div>
  );
}
