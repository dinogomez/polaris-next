"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";

export function HomeWidgetUser() {
  return (
    <Card className="rounded-xl dark:bg-transparent shadow-lg h-full">
      <CardHeader>
        <CardTitle className="dark:text-stone-50">
          Manage Crew Members
        </CardTitle>
        <CardDescription>Efficiently oversee your crew members</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Input className="dark:text-stone-50" value="Paul" readOnly />
          <Button variant="secondary" className="shrink-0">
            Search
          </Button>
        </div>
        <Separator className="my-4" />
        <div className="space-y-4 dark:text-stone-50 ">
          <h4 className="text-sm font-medium">Results</h4>
          <div className="grid gap-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn/ui/blob/main/apps/www/public/avatars/01.png?raw=true" />
                  <AvatarFallback>PA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    Paula Andersen
                  </p>
                  <p className="text-sm text-muted-foreground">First Mate</p>
                </div>
              </div>
              <Select defaultValue="edit">
                <SelectTrigger className="ml-auto w-[110px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="edit">Status</SelectItem>
                  <SelectItem value="view">Certs</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn/ui/blob/main/apps/www/public/avatars/02.png?raw=true" />
                  <AvatarFallback>PG</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">Paul Gomez</p>
                  <p className="text-sm text-muted-foreground">2nd Engineer</p>
                </div>
              </div>
              <Select defaultValue="view">
                <SelectTrigger className="ml-auto w-[110px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="edit">Status</SelectItem>
                  <SelectItem value="view">Certs</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/01.png" />
                  <AvatarFallback className="text-stone-900 bg-zinc-100">
                    PY
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    Paulsen Yse
                  </p>
                  <p className="text-sm text-muted-foreground">Cook</p>
                </div>
              </div>
              <Select defaultValue="view">
                <SelectTrigger className="ml-auto w-[110px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="edit">Status</SelectItem>
                  <SelectItem value="view">Certs</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
