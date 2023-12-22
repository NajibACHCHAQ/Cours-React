import Image from "next/image";
import '@/styles/styles-presentation.css';
/* eslint-disable react/no-unescaped-entities */
export const Presentation = () => {
  return (
    <div className="card-container">
      <div className="paysage">
        <div className="titre-section">
          <Image src="../assets/phare_illustration60px.png" alt="" width={80} height={100} />
          Un parcours sur mesure
          <Image src="../assets/illustration-boussole.png" alt="" width={100} height={100} />
        </div>
        <div className="navivation-boat">
          <Image src="../assets/boatgreta2.png" alt="" width={100} height={123} />
        </div>
      </div>
      <div className="eau" >
        
      </div>
      <div className="card-content">
        <div className="start">
          <div style={{ fontSize: "4vw", marginTop: "6vw", transform: "rotate(-20deg)", position: "relative", left: "8vw", color: "antiquewhite", fontWeight: "bold" }}>
            Au départ
            <Image src="../assets/white_arrows1-removebg-preview.png" alt="" style={{  backgroundColor: "transparent", boxShadow: "none", float: "right", marginRight: "20px" }} width={50} height={80} />
          </div>
          <div className="card" style={{ transform: "rotate(0deg)" }}>
            <div className="titre-card-parcours">
              <div className="titre-principal-card-parcours"> Un Sas Commun</div>
              <div className="sous-titre-card-parcours">64h</div>
            </div>
            <div className="card-element">Module de remise à niveau en bureautique</div>
            <div className="card-element">Module RAN Mathématiques</div>
            <div className="card-element">Module Télétravail</div>
            <div className="card-element">Développement durable</div>
            <div className="card-element">Ecocitoyenneté - Eco geste</div>
            <div className="card-element">Egalité professionnnelle - Enjeux du numérique</div>
            <div>image</div>
          </div>
          <div className="orientation">ensuite</div>
        
            <div className="card" style={{ transform: "rotate(3deg)" }}>
              <div className="titre-card-parcours">
                <div className="titre-principal-card-parcours"> Parcours exclusif EEP</div>
                <div className="sous-titre-card-parcours">180h</div>
              </div>
              <div className="card-element">Pratique professionnel</div>
              <div className="card-element">Modules bureautique</div>
              <div className="card-element">Communication</div>
              <div className="card-element">Techniques de recherche d'emploi</div>
              <div className="card-element">Certification :</div>
              <div className="card-element">
                <span>TOSA - Word - Excel - PowerPoint</span>
              </div>
            </div>
            <div className="orientation"> Ou</div>
            <div className="etape ">
              <div className="card" style={{ transform: "rotate(-3deg)" }}>
                <div className="titre-card-parcours">
                  <div className="titre-principal-card-parcours"> Titre professionnel <span>CAP/BEP</span></div>
                  <div className="sous-titre-card-parcours">Employé(e) Administratif</div>
                </div>
                <div className="card-element">Enseignement professionnel</div>
                <div className="card-element">TRE</div>
                <div className="card-element">Pratique pro au sein de l'EEP</div>
                <div className="card-element">Anglais Pro</div>
                <div className="card-element">Module additionnels au choix :</div>
                <div className="card-element">
                  <span>Projet Voltaire - Teletravail</span>
                </div>
              </div>
              <div className="card" style={{ transform: "rotate(3deg)" }}>
                <div className="titre-card-parcours">
                  <div className="titre-principal-card-parcours"> Titre ASCA <span>(BAC)</span></div>
                  <div className="sous-titre-card-parcours">Assistant de comptabilite et d'administration</div>
                </div>
                <div className="card-element">Enseignement professionnel</div>
                <div className="card-element">TRE</div>
                <div className="card-element">Pratique pro au sein de l'EEP</div>
                <div className="card-element">Anglais Pro</div>
                <div className="card-element">Module additionnels au choix</div>
                <div className="card-element">
                  <span>Projet Voltaire - Teletravail</span>
                </div>
              </div>
              
            </div>
            <div className="card" style={{ transform: "rotate(3deg)" }}>
                <div className="titre-card-parcours">
                  <div className="titre-principal-card-parcours"> Titre ASCA <span>(BAC)</span></div>
                  <div className="sous-titre-card-parcours">Assistant de comptabilite et d'administration</div>
                </div>
                <div className="card-element">Enseignement professionnel</div>
                <div className="card-element">TRE</div>
                <div className="card-element">Pratique pro au sein de l'EEP</div>
                <div className="card-element">Anglais Pro</div>
                <div className="card-element">Module additionnels au choix</div>
                <div className="card-element">
                  <span>Projet Voltaire - Teletravail</span>
                </div>
              </div>

        
        </div>
      </div>
    </div>
  );
};
