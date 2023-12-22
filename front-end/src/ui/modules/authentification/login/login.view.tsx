import { BoxForm } from "@/ui/design-system/box/box-form"
import Image from "next/image"
import { FaUserCircle } from "react-icons/fa";
import '@/styles/styles-forms.css'
import { LoginForm } from "./login-form";

export const LoginView = ()=>{
    return(
        <>        <div className="container">


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
                
                    <LoginForm/>
                
            </BoxForm>
        </div>
    </div></>
    )
}