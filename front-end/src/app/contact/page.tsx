"use client"
import Header from "@/ui/components/header";
import { PartenairBar } from "@/ui/components/navigation/partenair-bar";
import Navigation from "@/ui/components/navigation/navigation";
import Link from "next/link";
import Image from "next/image";
import '@/styles/styles-contact.css'

export default function Contact() {
  return (
    <>
      <Header />
      <Navigation />
      <div className="page-info">
        <div className="info-contact">
          <div className="containerAdress">
            <div className="info-adr">
              Lycée « Le Castel » 22, rue Daubenton 21000 Dijon
            </div>
            <div className="info">Tel. 03 80 59 61 80</div>
            <div className="info">agencecom.greta21@ac-dijon.fr</div>

            <table>
              <thead style={{ backgroundColor: "rgba(39, 77, 139, 0.645)", fontWeight: "bold" }}>
                <tr>
                  <th>Jour</th>
                  <th>Matin</th>
                  <th>Après-midi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ backgroundColor: "rgba(39, 77, 139, 0.645)" }}>Lundi</td>
                  <td className="am-hour">9h00 à 12h00</td>
                  <td className="pm-hour">14h00 à 17h00</td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "rgba(39, 77, 139, 0.645)" }}>Mardi</td>
                  <td className="am-hour">9h00 à 12h00</td>
                  <td className="pm-hour">14h00 à 17h00</td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "rgba(39, 77, 139, 0.645)" }}>Mercredi</td>
                  <td className="am-hour">9h00 à 12h00</td>
                  <td className="pm-hour">14h00 à 17h00</td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "rgba(39, 77, 139, 0.645)" }}>Jeudi</td>
                  <td className="am-hour">9h00 à 12h00</td>
                  <td className="pm-hour">14h00 à 17h00</td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "rgba(39, 77, 139, 0.645)" }}>Vendredi</td>
                  <td className="am-hour">9h00 à 12h00</td>
                  <td className="pm-hour">14h00 à 17h00</td>
                </tr>

              </tbody>
            </table>
          </div>
          <div className="info-access">
            <h2 className="info-adr">Comment Venir</h2>
            <div className="details-info">
              Transport en commun <Link href="https://www.divia.fr/itineraires" target="_blank"><Image src="../assets/logo-divia.png" alt="" width={100} height={100} /></Link>
            </div>
            <div className="details-info">
              Transport en commun <Link href="https://www.divia.fr/itineraires" target="_blank"><Image src="../assets/logo-sncf.png" alt="" width={100} height={100}/></Link>
            </div>
            <h2 className="info-adr">Comment Venir</h2>
            <div className="details-info">
              Transport en commun <Link href="https://www.divia.fr/itineraires" target="_blank"><Image src="../assets/logo-divia.png" alt="" width={100} height={100} /></Link>
            </div>
            <div className="details-info">
              Transport en commun <Link href="https://www.divia.fr/itineraires" target="_blank"><Image src="../assets/logo-divia.png" alt="" width={100} height={100}/></Link>
            </div>
          </div>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.614276372284!2d5.039479315648015!3d47.32189833330518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fecd68576a6f1b%3A0x4098f5f14155d4e2!2s22%20Rue%20Daubenton%2C%2021000%20Dijon%2C%20France!5e0!3m2!1sen!2sus!4v1635457657369!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <PartenairBar />
    </>
  );
}