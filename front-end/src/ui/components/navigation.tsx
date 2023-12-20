"use client"
import Link from "next/link";
import { ActiveLink } from "./active-link";

export default function Navigation() {
  return (

    <nav className="menu">
      <ActiveLink href="/about">Pr&eacute;-inscription</ActiveLink>
      <ActiveLink href="/quiz">Plus d&apos;Infos</ActiveLink>
      <ActiveLink href="/actu">Actualit&eacute;s</ActiveLink>
      <ActiveLink href="/">Contact</ActiveLink>
    </nav>

  );
}
