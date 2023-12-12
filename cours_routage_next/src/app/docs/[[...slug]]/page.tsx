// Exportation d'une fonction par défaut nommée Docs qui prend un objet en argument
export default function Docs({
    params, // Destructuration de l'objet params depuis l'argument
}: {
    params?: {
        slug?: string[]; // L'objet params doit avoir une propriété nommée 'slug' qui est un tableau de chaînes de caractères
    };
}) {
    // Vérification si la longueur du tableau 'slug' dans l'objet params est égale à 2
    if (params?.slug?.length === 2) {
        // Si vrai, rendu d'un élément h1 avec un message pour deux paramètres
        return (
            <h1>
                {/* Utilisation de l'interpolation pour inclure les valeurs de params.slug[0] et params.slug[1] dans le message */}
                Affichage de la documentation pour la fonctionnalité {params.slug[0]} et le concept {params.slug[1]}
            </h1>
        );
    } else if (params?.slug?.length === 1) {
        // Si la longueur est égale à 1, rendu d'un élément h1 avec un message pour un paramètre
        return <h1>Affichage de la documentation pour la fonctionnalité {params.slug[0]}</h1>;
    }

    // Si la longueur du tableau 'slug' n'est ni 2 ni 1, rendu d'un élément h1 pour la page d'accueil de la documentation
    return <h1>Page d'accueil de la documentation</h1>;
}

// Explication détaillée :
// - La fonction Docs est un composant React destiné à afficher différentes parties de la documentation en fonction des paramètres passés.
// - L'objet params est destructuré depuis l'argument. La propriété params est optionnelle, tout comme la propriété slug à l'intérieur de params.
// - La propriété slug doit être un tableau de chaînes de caractères.
// - La vérification avec ?. est utilisée pour éviter des erreurs si params ou params.slug est undefined.
// - L'élément h1 est rendu avec un message dynamique en fonction de la longueur du tableau slug dans l'objet params.
// - Les commentaires ajoutés expliquent chaque étape du processus.
