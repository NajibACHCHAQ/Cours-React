'use client'
// Importation des hooks useState et useEffect depuis React
import { useState, useEffect } from "react";

// Importation des composants de Chakra UI
import { Flex} from '@chakra-ui/react'

// Importation du type ITask depuis un fichier "@types"
import { ITask } from "@types";

// Importation des composants personnalisés
import Task from "@components/Task";
import NoTask from "@components/NoTask";
import Loading from "@components/Loading";
import Header from "@components/Header";
import AddTask from "@components/AddTask";

// Définition du composant Home
export default function Home() {

  // État local pour la saisie utilisateur de la tâche
  const [task, setTask] = useState("");

  // État local pour stocker toutes les tâches
  const [allTasks, setAllTasks] = useState([]);

  // État local pour indiquer si le chargement est en cours
  const [isLoading, setIsLoading] = useState(true);

  // Fonction pour créer une nouvelle tâche
  const handleCreateTask = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/task/new", {
        method: "POST",
        body: JSON.stringify({
          task: task,
        }),
      });
      if (response.ok) {
        setTask('');
        await fetchTasks();
      } else {
        console.log('Error creating task:', response.status);
      }
    } catch (error) {
      console.log('Error creating task:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Fonction pour récupérer toutes les tâches depuis le serveur
  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/task/all");
      const data = await response.json();
      setAllTasks(data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching tasks:", error);
    }
  };

  // Fonction pour supprimer une tâche
  const handleDeleteTask = async (id: string) => {
    try {
      const response = await fetch(`/api/task/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setAllTasks((prevTasks) => prevTasks.filter((task: ITask) => task._id !== id));
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fonction pour marquer une tâche comme complétée
  const handleCompleteTask = async (id: string) => {
    try {
      const response = await fetch(`/api/task/complete/${id.toString()}`, {
        method: "PATCH",
      });
      if (response.ok) {
        await fetchTasks();
      } else {
        console.log("Error editing task.");
      }
    } catch (error) {
      console.log("Error editing task:", error);
    }
  };

  // Récupération de toutes les tâches au chargement initial du composant
  useEffect(() => {
    fetchTasks();
  }, []);

  // Rendu du composant
  return (
    <>
      <Header />
      <AddTask task={task} setTask={setTask} handleCreateTask={handleCreateTask} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Flex direction="column" p="2rem">
            {allTasks.length > 0 ? 
              allTasks.map((individualTask: ITask) => (
                <Task key={individualTask._id} individualTask={individualTask} handleCompleteTask={handleCompleteTask} handleDeleteTask={handleDeleteTask} />
              )) : (
                <NoTask />
              )}
          </Flex>
        </>
      )}
    </>
  );
}


// Le composant utilise des états locaux pour gérer la saisie de l'utilisateur (task), toutes les tâches (allTasks), et le statut de chargement (isLoading).
// Les fonctions handleCreateTask, fetchTasks, handleDeleteTask, et handleCompleteTask sont utilisées pour interagir avec l'API du serveur.
// Le composant utilise useEffect pour récupérer toutes les tâches lors du chargement initial du composant.
// Il utilise différents composants Chakra UI pour créer une interface utilisateur réactive, comme Input, Button, Flex, etc.
// Les composants personnalisés (Task, NoTask, Loading, Header, AddTask) sont utilisés pour modulariser le code.
// Le composant gère l'état de chargement, affiche la liste des tâches, et permet à l'utilisateur d'ajouter, supprimer et mar