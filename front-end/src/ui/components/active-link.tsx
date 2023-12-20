"use client"
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from 'next/navigation';

interface Props {
    href: string;
    children: React.ReactNode;
}

export const ActiveLink = ({ href, children }: Props) => {
    const router = useRouter();
    console.log("router: ", router);
    console.log("href: ", href)


    // Corrigez le retour pour inclure le JSX
    return (
        <Link href={href} className={clsx()}>
            {children}
        </Link>
    );
};
