"use client"
import Link from "next/link";
import { ActiveLink } from "./active-link";
/* eslint-disable react/no-unescaped-entities */

export default function Navigation() {
  return (

    <nav className="menu">
      <ActiveLink href="/">Accueil</ActiveLink>
      <ActiveLink href="/pre-inscription">Pré-inscription</ActiveLink>
      <ActiveLink href="/quiz">Plus d'Infos</ActiveLink>
      <ActiveLink href="/actu">Actualités</ActiveLink>
      <ActiveLink href="/contact">Contact</ActiveLink>
    </nav>

  );
}
