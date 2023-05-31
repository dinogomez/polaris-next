import { Separator } from "./ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export function AnnouncementCard() {
  return (
    <Card className="w-1/3 p-0 my-1 dark:bg-transparent dark:text-stone-50 dark:border-stone-800">
      <CardHeader>
        <CardTitle className="text-sm md:text-lg ">Announcement</CardTitle>
        <CardDescription>May 25, 2023</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit
          amet!
        </p>
      </CardContent>
    </Card>
  );
}
