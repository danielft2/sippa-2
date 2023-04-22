import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="pt-br">
         <body>
            <h2>Layout do auth</h2>
            {children}
         </body>
      </html>
   )
}
