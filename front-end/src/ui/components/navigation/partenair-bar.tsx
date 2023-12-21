import Link from "next/link";
import Image from "next/image";

export const PartenairBar = () => {
  return (
    <div className="partenairbar">
      <Link href="https://www.bourgogne-greta.fr/vos-greta-en-bourgogne/le-greta-21/presentation/" target="_blank">
        <Image src="/assets/header-logo2021-pe-fr.png" alt="" width={200} height={100} />
      </Link>
      <Link href="">
        <Image src="/assets/bourg-franc.svg" alt="" width={100} height={100} />
      </Link>
      <Link href="https://www.bourgogne-greta.fr/vos-greta-en-bourgogne/le-greta-21/presentation/" target="_blank">
        <Image src="/assets/logopartleboat.webp" alt="" width={100} height={100} />
      </Link>
      <Link href="https://www.bourgogne-greta.fr/vos-greta-en-bourgogne/le-greta-21/presentation/" target="_blank">
        <Image src="/assets/logoGreta-removebg-preview.png" alt="" width={100} height={100} />
      </Link>
    </div>
  );
};
