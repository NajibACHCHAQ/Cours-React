"use client"
import { useEffect } from 'react';
import Header from "@/ui/components/header";
import Navigation from "@/ui/components/navigation/navigation";
import { PartenairBar } from "@/ui/components/navigation/partenair-bar";
import '@/styles/styles-actu.css';

export default function Actu() {
    useEffect(() => {
        // Chargement asynchrone du script Facebook
        const script = document.createElement('script');
        script.src = "https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v10.0";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";
        script.nonce = "VotreNonce"; // Assurez-vous de remplacer par un nonce approprié si nécessaire
        document.head.appendChild(script);

        return () => {
            // Nettoyer le script lors du démontage du composant si nécessaire
            document.head.removeChild(script);
        };
    }, []);

    return (
        <>
            <Header />
            <Navigation />
            <div className="container-actu">
                <div className="fb-page" data-href="https://www.facebook.com/LeGRETA21/" data-tabs="timeline" data-width="2200px">
                </div>
                <div className="actu-ulysse">
                    actu ulysse
                </div>
            </div>
            <PartenairBar />
        </>
    );
}
