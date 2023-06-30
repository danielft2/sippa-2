export class AppError extends Error {
   constructor(private msg: string, private status: number) {
      super(msg);
   }

   public getStatus() {
      return this.status;
   }
}
