import {notFound} from "next/navigation"
// Exportation d'une fonction par défaut nommée ReviewDetails
export default function ReviewDetails({
    params, // Destructuration de l'objet params depuis l'argument
}: {
    params: {
        productId: string; // Propriété 'productId' de l'objet params, une chaîne de caractères
        reviewId: string; // Propriété 'reviewId' de l'objet params, une chaîne de caractères
    };
}) { if(parseInt(params.reviewId)> 1000){
    notFound()
}
    // Rendu d'un élément h1 avec un message incorporant les valeurs de productId et reviewId

    return (
        <h1>
            {/* Utilisation de l'interpolation pour inclure les valeurs de reviewId et productId dans le message */}
            Avis {params.reviewId} pour le produit {params.productId}
        </h1>
    );
}

// Explication détaillée :
// - La fonction ReviewDetails est un composant React destiné à afficher les détails d'une revue.
// - Elle prend un objet en argument, qui est déstructuré pour extraire la propriété params.
// - La propriété params doit être un objet avec deux propriétés : productId et reviewId, toutes deux de type string.
// - L'élément h1 est rendu avec un message utilisant l'interpolation pour inclure les valeurs de reviewId et productId.
// - Ce composant pourrait être utilisé pour afficher dynamiquement les détails d'une revue spécifique pour un produit donné.
