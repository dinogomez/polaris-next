import { AlertCard } from "../../../components/Alert";

export default function Login() {
  return (
    <div className="flex md:mt-5 justify-center flex-col items-center m-5">
      <AlertCard
        className="w-1/3 bg-yellow-400 text-stone-50 dark:border dark:border-yellow-400 dark:bg-transparent dark:text-yellow-400"
        iconClassName="w-4 h-4 stroke-stone-50 dark:stroke-yellow-400"
        title="Info"
        message="Work in Progress, Authentication Not Deployed Yet"
      />
    </div>
  );
}
