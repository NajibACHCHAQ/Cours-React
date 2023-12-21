import clsx from "clsx";
import React from "react"
import '@/styles/styles-box-form.css'

interface Props{
    children: React.ReactNode;
    className?:string;
}

export const BoxForm =({children, className}:Props)=>{
    return(
        <div className={clsx("box-form",className)}>

            {children}
        </div>
    )
}