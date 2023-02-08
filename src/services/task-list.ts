import { Task } from "./priotity";

export const TaskList: Task[] = [
   {
      name: " 0x04. Professional Technologies",
      deadline: new Date("2023-2-10"),
      estimatedTime: {
         value: 1,
         unit: "day"
      },
      progress: 0
   },
   {
      name: "Build a Storefront Backend",
      deadline: new Date("2022-1-25"),
      estimatedTime: {
         value: 1,
         unit: "day"
      },
      progress: 0
   },
   {
      name: "My Store FRONTEND - ALX",
      deadline: new Date("2023-2-22"),
      estimatedTime: {
         value: 15,
         unit: "day"
      },
      progress: 0
   },
   {
      name: "Vagrant - SWE 1",
      deadline: new Date("2023-2-11"),
      estimatedTime: {
         value: 2,
         unit: "day"
      },
      progress: 10
   }
];