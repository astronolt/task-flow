export interface Task {
   name: string;
   deadline: Date;
   estimatedTime: {
      value: number;
      unit: string;
   };
   progress: number;
}

export class TaskPrioritizer {
   tasks: Task[];

   constructor(tasks: Task[]) {
      this.tasks = tasks;
   }

   prioritizeTasks(): Task[] {
      return this.tasks.sort((a, b) => {
         const aMilliseconds = this.convertToMilliseconds(a.estimatedTime);
         const bMilliseconds = this.convertToMilliseconds(b.estimatedTime);
         const aTimeRemaining = (a.deadline.getTime() - Date.now()) / (24 * 60 * 60 * 1000);
         const bTimeRemaining = (b.deadline.getTime() - Date.now()) / (24 * 60 * 60 * 1000);

         if (aTimeRemaining / aMilliseconds === bTimeRemaining / bMilliseconds) {
            if (a.deadline === b.deadline) {
               return b.progress - a.progress;
            } else {
               return a.deadline > b.deadline ? 1 : -1;
            }
         } else {
            return (aTimeRemaining / aMilliseconds) - (bTimeRemaining / bMilliseconds)
         }
      });
   }

   convertToMilliseconds(estimatedTime: { value: number; unit: string }): number {
      switch (estimatedTime.unit) {
         case "hour":
            return estimatedTime.value * 60 * 60 * 1000;
         case "day":
            return estimatedTime.value * 24 * 60 * 60 * 1000;
         case "month":
            return estimatedTime.value * 30 * 24 * 60 * 60 * 1000;
         default:
            return estimatedTime.value;
      }
   }
}

