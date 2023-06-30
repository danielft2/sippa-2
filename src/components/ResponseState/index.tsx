import { ReactNode } from 'react';

interface ResponseStateProps {
   loading?: ReactNode;
   error?: ReactNode;
   empty?: ReactNode;
   isLoading?: boolean;
   isError?: boolean;
   isEmpty?: boolean;
}

const ResponseState = ({
   loading,
   error,
   empty,
   isLoading,
   isError,
   isEmpty
}: ResponseStateProps) => {
   return <>{isLoading ? loading : isError ? error : isEmpty ? empty : null}</>;
};

export default ResponseState;
