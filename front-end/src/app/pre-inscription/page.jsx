"use client"
import { useState } from "react";
import Header from "@/ui/components/header";
import { Section } from "@/ui/components/section";
import Link from "next/link";
import '@/styles/styles-preinscription.css';
import { PartenairBar } from "@/ui/components/navigation/partenair-bar";
import Navigation from "@/ui/components/navigation/navigation";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase";
/* eslint-disable react/no-unescaped-entities */

export default function PreInscription() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    date_naissance: "",
    email: "",
    telephone: "",
    statut: "",
    status: "",
    identifiant_pole_emploi: "",
    commentaire: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Form Data:', formData); // Vérifiez si les données du formulaire sont correctes
      // Ajoutez la logique pour soumettre le formulaire à Supabase
      const { data, error } = await supabase
        .from('candidats') // Remplacez 'candidats' par le nom de votre table
        .insert([
          {
            prenom: formData.prenom,
            nom: formData.nom,
            date_naissance: formData.date_naissance,
            email: formData.email,
            telephone: formData.telephone,
            statut: "en cours",
            status: formData.status,
            identifiant_pole_emploi: formData.identifiant_pole_emploi,
            commentaire: formData.commentaire,
          },
        ]);

      if (error) {
        console.error('Erreur lors de l\'ajout du candidat:', error);
      } else {
        console.log('Candidat ajouté avec succès:', data);
        // Redirigez l'utilisateur ou effectuez d'autres actions nécessaires après la soumission
        router.push("/quiz"); // Redirection vers la page du quiz après la soumission
      }
    } catch (error) {
      console.error('Erreur inattendue:', error);
    }
  };

  const handleStatutChange = (e) => {
    const selectedStatut = e.target.value;
    setFormData({
      ...formData,
      status: selectedStatut,
      identifiant_pole_emploi: selectedStatut === "demandeur_emploi" ? "" : formData.identifiant_pole_emploi,
    });
  };


  return (
    <>
      <Header/>
      <Navigation />
      <Section>
        <p>
          Suite à la saisie du formulaire, vous serez dirigé(e) vers un test de niveau qui débutera immédiatement. Chaque question dispose d'un temps imparti de 30 secondes. Prévoyez entre 30 et 45 minutes pour l'ensemble du processus. Assurez-vous d'avoir suffisamment de temps devant vous avant de débuter le test.
        </p>
        <form action="" className="preinscription-form" onSubmit={handleSubmit}>
        <div className="elements-form">
              <label htmlFor="prenom">Prénom</label>
              <input type="text" id="prenom" name="prenom" placeholder="Votre prénom" onChange={handleChange} value={formData.prenom} required />
            </div>
            <div className="elements-form">
              <label htmlFor="nom">Nom</label>
              <input type="text" id="nom" name="nom" placeholder="Votre nom" onChange={handleChange} value={formData.nom} required/>
          </div>      
          <div className="elements-form">
              <label htmlFor="date_naissance">Date de Naissance</label>
              <input type="date" id="date_naissance" name="date_naissance" placeholder="Votre date de naissance" onChange={handleChange} value={formData.date_naissance} required/>
          </div>      
          <div className="elements-form">
              <label htmlFor="email">Adresse e-mail</label>
              <input type="email" id="email" name="email" placeholder="votre-email@email.fr" onChange={handleChange} value={formData.email} required/>
          </div>      
          <div className="elements-form">
              <label htmlFor="telephone">Numéro de téléphone</label>
              <input type="tel" id="telephone" name="telephone" placeholder="06 .. .. .. .. .." onChange={handleChange} value={formData.telephone} required/>
          </div>      
          <div className="elements-form">
          <label htmlFor="statut">Statut</label>
          <select id="status" name="status" onChange={handleStatutChange} value={formData.status} required>
            <option value=""></option>
            <option value="demandeur_emploi">Demandeur d'emploi</option>
            <option value="salarie">Salarié</option>
            <option value="autoentrepreneur">Autoentrepreneur</option>
            <option value="autre">Autre</option>
          </select>
          <div id="pole_emploi" style={{ display: formData.statut === "demandeur_emploi" ? 'block' : 'none' }}>
            <input
              type="text"
              id="identifiant_pole_emploi"
              name="identifiant_pole_emploi"
              placeholder="Votre identifiant"
              style={{ width: '90%', marginTop: '1vw' }}
              value={formData.identifiant_pole_emploi}
              onChange={handleChange}
            />
          </div>
        </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="commentaire">Commentaire (projet professionnel / besoin de formation) :</label>
              <textarea id="commentaire" name="commentaire" placeholder="Votre commentaire" onChange={handleChange} value={formData.commentaire}></textarea>
            </div>
          <button type="submit" id="start-test" >Commencer le test</button>
        </form>
      </Section>
      <PartenairBar/>

    </>
  );
}









