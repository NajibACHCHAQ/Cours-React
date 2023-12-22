import Header from "@/ui/components/header";
import { Section } from "@/ui/components/section";
import Link from "next/link";
import '@/styles/styles-preinscription.css';
import { PartenairBar } from "@/ui/components/navigation/partenair-bar";
/* eslint-disable react/no-unescaped-entities */
export default function PreInscription() {
    return (
      <>
      <Header/>
        <Section>
          <p>
            Suite à la saisie du formulaire, vous serez dirigé(e) vers un test de niveau qui débutera immédiatement. Chaque question dispose d'un temps imparti de 30 secondes. Prévoyez entre 30 et 45 minutes pour l'ensemble du processus. Assurez-vous d'avoir suffisamment de temps devant vous avant de débuter le test.
          </p>
          <form action="" className="preinscription-form">
            <div className="titre-form">Formulaire de Pré-inscription</div>
            <div className="elements-form">
              <label htmlFor="prenom">Prénom</label>
              <input type="text" id="prenom" name="prenom" placeholder="Votre prénom" required />
            </div>
            <div className="elements-form">
              <label htmlFor="nom">Nom</label>
              <input type="text" id="nom" name="nom" placeholder="Votre nom" required/>
          </div>      
          <div className="elements-form">
              <label htmlFor="date_naissance">Date de Naissance</label>
              <input type="date" id="date_naissance" name="date_naissance" placeholder="Votre date de naissance" required/>
          </div>      
          <div className="elements-form">
              <label htmlFor="email">Adresse e-mail</label>
              <input type="email" id="email" name="email" placeholder="votre-email@email.fr" required/>
          </div>      
          <div className="elements-form">
              <label htmlFor="telephone">Numéro de téléphone</label>
              <input type="tel" id="telephone" name="telephone" placeholder="06 .. .. .. .. .." required/>
          </div>      
         <div className="elements-form">
              <label htmlFor="statut">Statut</label>
              <select id="statut" name="statut" required>
                <option value=""></option>
                <option value="demandeur_emploi">Demandeur d'emploi</option>
                <option value="salarie_autoentrepreneur">Salarié</option>
                <option value="salarie_autoentrepreneur">Autoentrepreneur</option>
                <option value="autre">Autre</option>
              </select>
              <div id="pole_emploi" style={{ display: 'none' }}>
                <input type="text" id="identifiant_pole_emploi" name="identifiant_pole_emploi" placeholder="Votre identifiant" style={{ width: '90%', marginTop: '1vw' }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="commentaire">Commentaire (projet professionnel / besoin de formation) :</label>
              <textarea id="commentaire" name="commentaire" placeholder="Votre commentaire"></textarea>
            </div>
          </form>
          <Link href="/quiz"><button id="start-test">Commencez le test</button></Link>
        </Section>
        <PartenairBar/>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("DOMContentLoaded", function () {
                var statutSelect = document.getElementById("statut");
                var poleEmploiDiv = document.getElementById("pole_emploi");

                // Gérer l'événement de changement de statut
                statutSelect.addEventListener("change", function () {
                  // Afficher le champ d'identifiant Pôle Emploi uniquement si le statut est "Demandeur d'emploi"
                  poleEmploiDiv.style.display = (statutSelect.value === "demandeur_emploi") ? "block" : "none";
                });
              });
            `,
          }}
        />
      </>
    );
  }
  