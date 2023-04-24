import { HtmlHTMLAttributes } from 'react';

interface FieldProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export function Field({ ...rest }: FieldProps) {
   return <div className="w-full flex flex-col gap-1" {...rest} />;
}
