import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="menu">
      <Link href="/about">Pr&eacute;-inscription</Link>
      <Link href="/">Plus d&apos;Infos</Link>
      <Link href="/">Actualit&eacute;s</Link>
      <Link href="/">Contact</Link>
    </nav>
  );
}
