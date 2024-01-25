"use client"


import Link from "next/link"
import style from './activelink.module.css'
import {  usePathname } from "next/navigation"
interface Props {
     path:string,title:string
}

export const ActiveLink = ({path,title}:Props) => {

 const pathname = usePathname()


  return (
    <Link    className={`${style.link} ${  (pathname===path) && style.activeLink}` } href={path}> {title}</Link>
  )
}
