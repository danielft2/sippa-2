import { Headphones, UserCheck } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';

import FormLogin from './components/FormLogin';
import Slides from './components/Slides';

const poppins = Poppins({ weight: '600', subsets: ['latin'] })

export default function SigIn() {

   return (
      <main className="flex w-full h-screen">
         <Slides />
         <section className="flex flex-col sm:w-[500px] w-full">
            <div className="p-5 flex justify-end">
               <Image src="/logo.png" alt="Logo do sistema" width={100} height={100}/>
            </div>

            <div className="p-10 flex-1 flex flex-col justify-center gap-8">
               <div>
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-green-200 mb-1">
                     <UserCheck className="text-green-400" size={28} />
                  </span>
                  <h1 className={`${poppins.className} text-green-400 text-xl`}>Bem vindo de volta</h1>
                  <span className="text-sm text-gray-600">Realize o login para continuar no sippa.</span>
               </div>
               <FormLogin />
            </div>

            <div className="flex flex-col items-center justify-center px-10 mb-2">
               <span className="text-[13px] text-gray-400">Universidade Federal do Ceará - Campus Quixadá</span>
               <div className="text-green-400 flex items-center gap-1">
                  <Headphones size={18}/>
                  <span className="text-[13px]">Suporte: emaildesuporte@gmail.com</span>
               </div>
            </div>
         </section>
      </main>
   )
}