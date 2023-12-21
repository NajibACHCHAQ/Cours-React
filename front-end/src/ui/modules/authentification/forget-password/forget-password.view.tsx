import { BoxForm } from "@/ui/design-system/box/box-form"
import Image from "next/image"
import { FaUserCircle } from "react-icons/fa";
import '@/styles/styles-forms.css'
import { ForgetPasswordForm } from "./forget-password-form";

export const ForgetPasswordView = ()=>{
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
                        Mot de passe oublié
                    </div>
                    <div className="body-form">
                        <ForgetPasswordForm/>
                    </div>
                </BoxForm>
            </div>
        </div>
    </>
    )
}