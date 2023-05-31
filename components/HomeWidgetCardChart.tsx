"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 2000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 2000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 2000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 2000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 2000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 2000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 2000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 2000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 2000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 2000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 2000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 2000) + 1000,
  },
];

export function HomeWidgetChart() {
  return (
    <Card className="rounded-xl dark:bg-transparent shadow-lg h-full">
      <CardHeader>
        <CardTitle className="dark:text-stone-50">Analytics</CardTitle>
        <CardDescription>See metrics and statistics</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer className="m-0" height={270}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Bar dataKey="total" fill="#FACC15" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
