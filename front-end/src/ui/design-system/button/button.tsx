"use client"
// Importation de la bibliothèque clsx pour gérer les classes conditionnelles
import clsx from "clsx";

// Définition de l'interface Props pour définir les propriétés acceptées par le composant
interface Props {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "icon" | "disabled";
    icon?: any;
    iconTheme?: "light" | "dark" | "grey";
    iconPosition?: "right" | "left" | "center";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
}

// Définition du composant Button
export const Button = ({
    size = "medium",
    variant = "primary",
    icon,
    iconTheme = "dark",
    disabled,
    isLoading,
    children,
}: Props) => {
    let variantStyles: string = "", sizeStyles: string = "", icoSize: number = 0;

    // Utilisation d'une instruction switch pour définir les styles en fonction de la variante spécifiée
    switch (variant) {
        case "primary":
            variantStyles = "primary";
            break;
        case "secondary":
            variantStyles = "secondary";
            break;
        case "icon":
            variantStyles = "";
            break;
        case "disabled":
            variantStyles = "disabled";
            break;
    }

    // Utilisation d'une instruction switch pour définir les styles en fonction de la taille spécifiée
    switch (size) {
        case "small":
            sizeStyles = "small";
            break;
        case "medium":
            sizeStyles = "medium";
            break;
        case "large":
            sizeStyles = "large";
            break;
    }

    // Rendu du composant bouton avec les classes CSS calculées en fonction des propriétés spécifiées
    return (
        <button
            type="submit"
            className={clsx("boutton", variantStyles, sizeStyles, icoSize)}
            onClick={() => console.log("click")} // Action à effectuer lors du clic sur le bouton
            disabled={disabled}
        >
            {children}
        </button>
    );
};


/* -------------------------------

Le composant utilise la bibliothèque clsx pour générer une liste de classes CSS 
conditionnelles, facilitant ainsi la gestion des styles dynamiques.
Les styles de variante et de taille sont calculés en fonction 
des propriétés spécifiées (variant et size).
Le composant prend en charge la possibilité d'ajouter une icône (icon) avec 
différentes propriétés associées à cette icône.
La propriété isLoading n'est pas actuellement utilisée dans le rendu du bouton, 
mais elle pourrait être implémentée dans le futur pour gérer l'état de chargement 
du bouton.
La fonction onClick est actuellement définie pour afficher un message 
dans la console lorsqu'elle est appelée. Vous pouvez la remplacer par la fonction que 
 souhaitez exécuter lors du clic sur le bouton.
Assurez-vous d'ajuster les styles CSS et les classes en conséquence 
dans votre fichier de styles ("styles.css").
                                     ------------------------------------------------*/