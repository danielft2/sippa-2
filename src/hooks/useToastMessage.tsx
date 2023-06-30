import { toast } from 'react-toastify';

const useToastMessage = () => {
   function successMessage(msg: string, timeClose = 1500) {
      toast(msg, {
         autoClose: timeClose,
         type: 'success'
      });
   }

   function errorMessage(msg: string, timeClose = 1500) {
      toast(msg, {
         autoClose: timeClose,
         type: 'error'
      });
   }

   return {
      successMessage,
      errorMessage
   };
};

export default useToastMessage;
