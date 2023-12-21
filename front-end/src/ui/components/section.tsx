"use client"
import Link from "next/link";
interface Props {
    children: React.ReactNode;
}
export const Section = ({ children }: Props) => {
    
    return (
        <div className="section">
        
    {children}

</div>
    );
};



