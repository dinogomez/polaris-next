import { Separator } from "./ui/separator";

export function AnnouncementCard() {
  return (
    <div className="border border-muted flex flex-col shadow-lg items-center w-1/3 justify-between my-3 dark:border-stone-50">
      <div>
        <div className="flex   rounded-lg mx-4 ">
          <div className="flex items-start px-4 py-6">
            <div className="">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold 0 -mt-1">Announcement</h2>
                <small className="text-sm text-gray-400">May 25, 2023</small>
              </div>
              <Separator className="my-3" />
              <p className="mt-3 text-sm">
                Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor
                sit amet!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
