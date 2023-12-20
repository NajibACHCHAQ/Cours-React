
/* Ce composant Typography est un composant React qui permet de styliser du texte
   de manière flexible en fonction des propriétés spécifiées. Voici une explication
   du code avec des commentaires ----------------------------------------------*/

// Importation de la bibliothèque clsx pour gérer les classes conditionnelles
import clsx from "clsx";

// Définition de l'interface Props pour définir les propriétés acceptées par le composant
interface Props {
    variant?: "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "lead" | "body";
    components?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
    theme?: "black" | "red" | "green";
    weight?: "100" | "200" | "300" | "400" | "500";
    className?: string;
    children: React.ReactNode;
}

// Définition du composant Typography
export const Typography = ({
    variant = "h3",
    components: Component = "div",
    theme = "black",
    weight = "500",
    className,
    children,
}: Props) => {
    let variantStyle: string = "";

    // Utilisation d'une instruction switch pour définir le style en fonction de la variante spécifiée
    switch (variant) {
        case "display":
            variantStyle = "display";
            break;
        case "h1":
            variantStyle = "text-green-500";
            break;
        // Ajouter d'autres cas pour les autres variantes si nécessaire
        default:
            variantStyle = ""; // Style par défaut si la variante n'est pas reconnue
            break;
    }

    // Utilisation de clsx pour générer une liste de classes conditionnelles
    return <Component className={clsx(variantStyle, className)}>{children}</Component>;
};

// Explications :

// variant, Component, theme, weight, className, et children sont des propriétés acceptées par le composant.
// Une instruction switch est utilisée pour définir la classe CSS spécifique en fonction de la variante spécifiée.
// La bibliothèque clsx est utilisée pour gérer les classes conditionnelles, facilitant ainsi la gestion des classes CSS dynamiques.
// Le composant rend le texte stylisé avec les classes CSS calculées en fonction des propriétés spécifiées.
// Cela permet d'utiliser le composant Typography de manière flexible en spécifiant différentes propriétés pour obtenir le style de texte souhaité. Par exemple :

            {/* <Typography variant="h1" theme="red" weight="400">
                Mon texte stylisé
            </Typography> */}