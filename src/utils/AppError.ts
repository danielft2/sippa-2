export class AppError extends Error {
   constructor(private msg: string) {
      super(msg);
   }
}
