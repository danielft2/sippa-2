export class AppError {
   constructor(private msg: string) {}

   public message() {
      return this.msg;
   }
}
