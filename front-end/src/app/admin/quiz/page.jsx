'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import '../style-gestion-candidature.css'
import '../style-gestion-test.css'
import ModalButton from "@/ui/components/modal/modal-button";
import ModalContent from "@/ui/components/modal/modal-content";
import { supabase } from "@/utils/supabase";
/* eslint-disable react/no-unescaped-entities */

export default function Quiz() {
    const [candidats, setCandidats] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les candidats depuis Supabase
    const fetchCandidats = async () => {
      const { data, error } = await supabase
        .from('candidats') // Remplacez 'candidats' par le nom de votre table
        .select('*'); // Sélectionnez les colonnes nécessaires

      if (error) {
        console.error('Erreur lors de la récupération des candidats :', error.message);
        return;
      }

      setCandidats(data);
    };

    fetchCandidats();
  }, []); // Déclenché une seule fois lors du montage du composant


  return (
    <>
      <div className="menu-dashboard">
        <a href="gestion-test.html"><div>Quiz</div></a>
        <h1>Gestion candidature</h1>
        <a href="demande-info.html"><div>Demande d'Infos</div></a>
        <a href="dashboard.html"><div>Tableau de bord</div></a>
      </div>

      <section>
        <div id="questionList" className="display-question">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '75%', marginBottom: '1vw' }}>
            <select name="" id="" style={{ width: 'fit-content', height: '2.4vw' }}>
              <option value="">----</option>
              <option value="">traité</option>
              <option value="">non traité</option>
              <option value="">plus ancien</option>
              <option value="">plus récent</option>
              <option value="">score croissant</option>
              <option value="">score décroissant</option>
            </select>
            <a href=""><Image src="../assets/icons8-microsoft-excel-2019-48.png" alt="" width={24} height={24} /></a>
            <input type="text" placeholder="mots-clé" />
          </div>

          <div className="entete-list">
            <div>Id</div>
            <div>Nom</div>
            <div>email</div>
            <div>score</div>
            <div>statut</div>
          </div>

          {candidats.map(candidat => (
            <span key={candidat.id} className="candidat-element open-modal-button" data-question-id={candidat.id}>
              <div className="idCandidat">{candidat.id}</div>
              <div className="section-name">{`${candidat.prenom} ${candidat.nom}`}</div>
              <div className="apercuQ">{candidat.email}</div>
              <div className="apercuQ">{candidat.score}</div>
              <div className="apercuQ">{candidat.statut}</div>
            </span>
          ))}

          {/* Repeat the model above for other candidates... */}
        </div>
        
        
      </section>
      <ModalButton/>
      

      
    </>
  );
}
