// Importation de la bibliothèque "next/link" pour gérer les liens
import Link from "next/link";

// Importation de la fonction "usePathname" de la bibliothèque "next/navigation"
import { usePathname } from "next/navigation";

// Importation du fichier de styles CSS
import "./styles.css";

// Définition des liens de navigation
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

// Définition du composant AuthLayout
export default function AuthLayout({
  children, // Propriété children qui représente le contenu interne du composant
}: {
  children: React.ReactNode;
}) {
  // Utilisation de la fonction "usePathname" pour récupérer le chemin actuel
  const pathname = usePathname();

  return (
    <div>
      {/* Génération des liens de navigation en fonction du tableau navLinks */}
      {navLinks.map((link) => {
        // Vérification si le chemin actuel commence par le href du lien
        const isActive = pathname.startsWith(link.href);

        // Rendu du lien avec une classe différente en fonction de son état (actif ou non actif)
        return (
          <Link href={link.href} key={link.name}>
            <a className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
              {link.name}
            </a>
          </Link>
        );
      })}

      {/* Rendu du contenu interne du composant */}
      {children}
    </div>
  );
}

// Les liens de navigation sont générés dynamiquement à partir du tableau navLinks.
// La classe CSS "font-bold" est appliquée aux liens actifs pour les mettre en surbrillance.
// Les liens sont rendus à l'aide de la composante "Link" de Next.js, ce qui est une bonne pratique pour la navigation entre les pages.
// Le composant utilise "children" pour afficher le contenu spécifique à la page d'authentification, ce qui permet une utilisation flexible du composant.

  