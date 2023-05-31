import { Star } from "lucide-react";
import { AlertCard } from "../../components/Alert";
import { AnnouncementCard } from "../../components/AnnouncementCard";
import { Footer } from "../../components/Footer";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "../../components/ui/card";
import { HomeWidgetUser } from "../../components/HomeWidgetCardUser";

import { Separator } from "../../components/ui/separator";
import Link from "next/link";
import { HomeWidgetChart } from "../../components/HomeWidgetCardChart";

export default function Home() {
  return (
    <div className="h-screen md:h-fit">
      <div className="w-screen flex"></div>

      <div className="flex md:mt-5 justify-center flex-col items-center m-5">
        <Link href="https://github.com/dinogomez/polaris-next">
          <div
            className="p-3 inline-flex bg-stone-900 dark:bg-stone-50 rounded-full text-stone-50 
          hover:bg-zinc-600 dark:hover:bg-zinc-500 dark:hover:text-stone-50  dark:text-stone-900 text-sm gap-1 drop-shadow-lg"
          >
            <Star size={20} className="" />
            <span className="font-medium">Star Polaris on Github!</span>
          </div>
        </Link>

        <div className=" md:w-2/5 p-5  flex text-center flex-col ">
          <div>
            <span className="text-5xl md:text-7xl font-bold">
              Crew Management
              <br /> Made{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                Easy
              </span>
              !
            </span>
          </div>

          <span className="inline-block mt-3 text-gray-500">
            An minimalistic and fast platform for you to manage and maintain
            your crew.
          </span>
        </div>
        <Separator className="w-2/5 my-2 mb-5" />
        <div></div>
        <div className="w-3/5 grid grid-cols-1 md:grid-cols-3 md:gap-2 items-stretch ">
          <div>
            <HomeWidgetUser />
          </div>
          <div>
            <HomeWidgetUser />
          </div>
          <div>
            <HomeWidgetUser />
          </div>
          <div className="md:col-span-3">
            <HomeWidgetChart />
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<AlertCard
className="w-1/3 bg-yellow-400 text-stone-50 dark:border dark:border-yellow-400 dark:bg-transparent dark:text-yellow-400"
iconClassName="w-4 h-4 stroke-stone-50 dark:stroke-yellow-400"
title="Info"
message="Work in Progress"
/>
*/
