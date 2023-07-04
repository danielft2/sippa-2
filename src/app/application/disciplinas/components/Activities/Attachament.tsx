import { Download, FileText, Link } from 'lucide-react';

interface AttachamentProps {
   name: string;
   url?: string;
   urlFileDownload?: string;
   type: 'file' | 'link';
}

export function Attachament({
   name,
   type,
   url,
   urlFileDownload
}: AttachamentProps) {
   return (
      <div className="bg-zinc-100 px-5 py-3 rounded-md">
         <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2 truncate">
               <span className="flex items-center justify-center text-green-400 bg-white w-10 h-10  rounded-full">
                  {type == 'file' ? <FileText size={20} /> : <Link size={20} />}
               </span>
               <a
                  href={url}
                  target="_blank"
                  className={`${
                     type == 'link' ? 'underline' : ''
                  } text-sm truncate`}
                  rel="noreferrer"
               >
                  {name}
               </a>
            </div>
            {type == 'file' && (
               <a
                  className="text-green-400 hover:brightness-75 transition-all"
                  target="_blank"
                  href={urlFileDownload}
                  rel="noreferrer"
                  download={name}
               >
                  <Download size={18} />
               </a>
            )}
         </div>
      </div>
   );
}
