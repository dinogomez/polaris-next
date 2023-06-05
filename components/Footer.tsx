import { Info, Bug, Sparkle } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <div className="inset-x-0 bottom-0  w-screen mt-1 flex justify-center  p-5  gap-4 border-t dark:border-neutral-700 dark:bg-neutral-800">
      <div className="w-2/5 md:w-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        <div className="">
          <div className="inline-flex items-center">
            <Sparkle size={20} className="fill-current" />

            <span className="ml-2 text-xl font-bold tracking-wide  uppercase">
              Polaris
            </span>
          </div>
          <div className="mt-1 lg:max-w-sm">
            <p className="text-sm ">
              Provides a minimalistic and efficient way to handle and service
              your crew. Crew Selection, Vessel Management and many more made
              easy!
            </p>

            <div className="inline-flex items-center p-2 rounded mt-2 bg-black text-white dark:bg-white dark:text-black">
              <Info size={20} className="" />

              <span className="ml-2 text-sm font-bold tracking-wide  uppercase">
                WORK IN PROGRESS
              </span>
            </div>
            <Link href="https://github.com/dinogomez/polaris-next/issues/new">
              <div className="md:ml-2 inline-flex items-center p-2 rounded mt-2 bg-zinc-600 text-white">
                <Bug size={20} className="" />

                <span className="ml-2 text-sm font-bold tracking-wide  uppercase">
                  Report A Bug
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="md:flex md:justify-end ">
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide ">Contacts</p>
            <div className="flex flex-col md:flex-row">
              <p className="mr-1 text-gray-500">Phone:</p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +63 915-117-7924
              </a>
            </div>
            <div className="flex flex-col md:flex-row">
              <p className="mr-1 text-gray-500">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                dinogomez.dev@gmail.com
              </a>
            </div>
            <div className="flex flex-col md:flex-row">
              <p className="mr-1 text-gray-500">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                242F Uytengsu, CEB
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
