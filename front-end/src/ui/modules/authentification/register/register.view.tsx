import { BoxForm } from "@/ui/design-system/box/box-form"
import Image from "next/image"
import { FaUserCircle } from "react-icons/fa";
import '@/styles/styles-forms.css'
import { RegisterForm } from "./register-form";

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
                <BoxForm> 
                    <div className="header-form">
                        Creation compte user
                    </div>
                    <div className="body-form">
                        <RegisterForm/>
                    </div>
                </BoxForm>
            </div>
        </div>
            
            </>
    )
}