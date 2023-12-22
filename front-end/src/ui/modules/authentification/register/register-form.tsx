"use client"

import { Button } from "@/ui/design-system/button/button"
import { useState } from "react"



export const RegisterForm = ()=>{

    const [formData, setFormData] = useState(
        {
            nom:"",
            password:""
        }
    )

    const handleChange = (event:any) =>{
        const {type,name,password,value}=event.target
        setFormData(prev=>{
            return{
                ...prev,
                [name]:value,
                [password]:value

            }
        })
    }



    return(
        <>
            <label>Nom :</label>
            <input
                type="text"
                placeholder="text here ..."
                value={formData.nom || ""}
                onChange={handleChange}
                name="nom"
            />
            <label>Password</label>
            <input
                type="password"
                placeholder="text here ..."
                value={formData.password || ""}
                onChange={handleChange}
                name="password"
            />

            <Button type="submit" size="small">Envoyer</Button>

        </>
    )
}