import { BoxForm } from "@/ui/design-system/box/box-form"
import Image from "next/image"
import { FaUserCircle } from "react-icons/fa";
import '@/styles/styles-forms.css'
import { RegisterForm } from "./register-form";
import { FormType } from "@/types/form";

interface Props{
    form:FormType
}
export const RegisterView = ()=>{


    return(
        <>
        <div className="container">


            <div>  
                <div className="placeImage">

                <FaUserCircle/>
        
                 </div>
            </div>
            
            <div>
                <BoxForm > 
                    <div className="header-form">
                        Creation compte user
                    </div>
                    
                        <RegisterForm/>
                    
                </BoxForm>
            </div>
        </div>
            
            </>
    )
}


