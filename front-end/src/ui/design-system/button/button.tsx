"use client"
// Importation de la bibliothèque clsx pour gérer les classes conditionnelles
import clsx from "clsx";
import React from "react";
import { IconProps } from "@/types/iconProps";

// Définition de l'interface Props pour définir les propriétés acceptées par le composant
interface Props {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "ico" | "disabled";
    icon?: IconProps;
    iconTheme?: "light" | "dark" | "grey";
    iconPosition?: "right" | "left" | "center";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    type?:string;
}

// Définition du composant Button
export const Button = ({
    size = "medium",
    variant = "primary",
    icon,
    iconTheme = "dark",
    iconPosition,
    disabled,
    isLoading,
    children,
    type
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
        case "ico":
            if (iconTheme === "dark"){
                variantStyles ="primary rounded"
            }
            if (iconTheme === "light"){
                variantStyles ="secondary rounded"
            }
            if (iconTheme === "grey"){
                variantStyles ="basic rounded"
            }
            break;
            
        case "disabled":
            variantStyles = "disabled";
            break;
    }

    // Utilisation d'une instruction switch pour définir les styles en fonction de la taille spécifiée
    switch (size) {
        case "small":
            sizeStyles = "small";
            icoSize= 40;
            break;
        case "medium":
            sizeStyles = "medium";
            icoSize= 70;
            break;
        case "large":
            sizeStyles = "large";
            icoSize= 100;
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
            {icon && variant === "ico"?(<icon.icon size={icoSize}/>):
            (<>
                {icon && iconPosition === "left" &&(
                    <icon.icon size={icoSize}/>
                )}
            {children}
                {icon && iconPosition === "right" &&(
                        <icon.icon size={icoSize}/>
                    )}
            </>) }
            
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