import { Ship, Info } from "lucide-react";

export function Footer() {
  return (
    <div className="bottom-0 fixed w-screen mt-5 space-x-40 p-5 flex  justify-center bg-stone-950 text-stone-50">
      <div className="flex justify-between space-x-5 w-2/5">
        <div className="  grow ">
          <div className="inline-flex items-center">
            <Ship size={20} className="" />

            <span className="ml-2 text-xl font-bold tracking-wide  uppercase">
              Polaris
            </span>
          </div>

          <div className="mt-1 lg:max-w-sm">
            <p className="text-sm ">
              Providing a minimalistic and efficient way to handle and service
              your crew with Polaris Crew Management. You are able to serve
              these tasks with ease.
            </p>

            <div className="inline-flex items-center p-1 rounded mt-2 bg-yellow-400 text-black">
              <Info size={20} className="" />

              <span className="ml-2 text-sm font-bold tracking-wide  uppercase">
                WORK IN PROGRESS
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide ">Contacts</p>
            <div className="flex">
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
            <div className="flex">
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
            <div className="flex">
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
