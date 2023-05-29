import { Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

interface AlertCardProps {
  message: string;
  title: string;
  className?: string;
  iconClassName?: string;
}

export function AlertCard({
  message,
  title,
  className,
  iconClassName,
}: AlertCardProps) {
  return (
    <Alert className={className}>
      <Info className={iconClassName} />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
