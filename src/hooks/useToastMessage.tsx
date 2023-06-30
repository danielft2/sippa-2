import { toast } from 'react-toastify';

const useToastMessage = () => {
   function success(msg: string, timeClose = 1500) {
      toast(msg, {
         autoClose: timeClose,
         type: 'success'
      });
   }

   function error(msg: string, timeClose = 1500) {
      toast(msg, {
         autoClose: timeClose,
         type: 'error'
      });
   }

   return {
      success,
      error
   };
};

export default useToastMessage;
