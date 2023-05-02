export function Spinner() {
   return (
      <div
         className="inline-block h-5 w-5 text-white animate-spin rounded-full border-[3px] border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
         role="status"
      ></div>
   );
}
