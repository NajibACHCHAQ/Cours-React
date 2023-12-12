import { Metadata } from "next";

// Définition du type Props pour le composant ProductDetails
type Props = {
    params: {
        productId: string;
    };
};

// Fonction utilitaire asynchrone pour générer des métadonnées
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    // Utilisation d'une promesse pour simuler une opération asynchrone (par exemple, une requête à une API)
    const title = await new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`iphone ${params.productId}`);
        }, 100);
    });

    // Retourne un objet Metadata avec le titre dérivé de l'ID du produit
    return {
        title: `Product ${title}`,
    };
};

// Exportation d'une fonction par défaut nommée ProductDetails
export default function ProductDetails({ params }: Props) {
    return (
        <h1>
            {/* Utilisation de l'interpolation pour inclure la valeur de productId dans le message */}
            Détail du produit {params.productId}
        </h1>
    );
}

// Explication détaillée :
// - La fonction generateMetadata est une fonction utilitaire qui génère des métadonnées de manière asynchrone.
// - Elle prend un objet de type Props en argument, extrait la propriété params et utilise une promesse pour dériver le titre des métadonnées.
// - La fonction ProductDetails est un composant React qui prend un objet de type Props en argument et rend un élément h1 avec le détail du produit.
// - Le composant utilise l'interpolation pour inclure la valeur de productId dans le message.
// - La fonction generateMetadata pourrait être utilisée dans des pages Next.js pour générer des métadonnées dynamiques pour le rendu côté serveur.
