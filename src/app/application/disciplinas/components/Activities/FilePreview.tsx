import { DownloadCloud, FileText, X } from 'lucide-react';

interface FilePreviewProps {
   fileName: string;
   onRemoveFile: () => void;
}

export function FilePreview({ fileName, onRemoveFile }: FilePreviewProps) {
   return (
      <div className="w-full bg-white px-3 py-2 mt-2 rounded-md flex justify-between items-center gap-2">
         <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-200 rounded flex items-center justify-center">
               <FileText className="text-green-400 w-5" />
            </div>
            <span className="text-[13px] text-gray-600">
               {fileName.includes('https') ? 'arquivo_atividade' : fileName}
            </span>
         </div>
         {fileName.includes('https') ? (
            <a
               href={fileName}
               target="_blank"
               rel="noreferrer"
               download="arquivo_atividade"
            >
               <DownloadCloud className="text-green-600 w-4" />
            </a>
         ) : (
            <button onClick={onRemoveFile}>
               <X className="text-gray-500 w-4" />
            </button>
         )}
      </div>
   );
}
