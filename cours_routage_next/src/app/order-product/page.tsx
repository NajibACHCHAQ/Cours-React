// Importation de la fonction "useRouter" de la bibliothèque "next/navigation"
import { useRouter } from "next/navigation";

// Définition du composant OrderProduct
export default function OrderProduct() {
    // Obtention de l'objet de routage avec useRouter
    const router = useRouter();

    // Fonction appelée lorsque le bouton "Commander" est cliqué
    const handleClick = () => {
        // Affichage d'un message dans la console
        console.log("Produit commandé");

        // Redirection vers la page d'accueil ("/")
        router.push("/");
    };

    // Rendu du contenu du composant
    return (
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Commander</button>
        </>
    );
}

// Le composant utilise la fonction useRouter pour obtenir l'objet de routage. Cet objet contient des informations sur l'URL actuelle et des méthodes pour la navigation, telles que push utilisée ici pour rediriger vers la page d'accueil ("/").
// Lorsque le bouton "Commander" est cliqué, la fonction handleClick est appelée. Elle affiche également un message dans la console.
// Le bouton "Commander" est rendu dans le JSX du composant.
