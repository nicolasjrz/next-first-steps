import type { Metadata } from 'next'


export const metadata: Metadata ={
  title:"Home",description:"SEO description",keywords:["page","informacion"]
}



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <span className='text-wrap'>hola mundo</span>
    </main>
  )
}
