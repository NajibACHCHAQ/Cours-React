// Importation de React
import React from 'react';

// Importation de composants Chakra UI
import { Card, Flex, Text, Button } from '@chakra-ui/react';
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons';

// Importation du type TaskProps depuis un fichier "@types"
import { TaskProps } from '@types';

// Définition du composant Task
const Task = ({ individualTask, handleCompleteTask, handleDeleteTask }: TaskProps) => {
  
  // Affichage des détails de la tâche dans la console
  console.log(individualTask);

  // Rendu du composant
  return (
    <Card p="2rem" mb="0.5rem" variant='outline' key={individualTask._id}>
      <Flex alignItems="center">
        {/* Affichage du texte de la tâche, barré si la tâche est complétée */}
        {individualTask.completed ? (
          <Text flexGrow="1" as='del'>{individualTask.task}</Text>
        ) : (
          <Text flexGrow="1">{individualTask.task}</Text>
        )}

        {/* Boutons pour marquer comme complétée ou supprimer la tâche */}
        <Flex>
          {individualTask.completed ? (
            // Bouton désactivé si la tâche est déjà complétée
            <Button
              ml="1rem"
              colorScheme='whatsapp'
              onClick={() => handleCompleteTask(individualTask._id)}
              isDisabled
            >
              <CheckIcon />
            </Button>
          ) : (
            // Bouton actif pour marquer la tâche comme complétée
            <Button
              ml="1rem"
              colorScheme='whatsapp'
              onClick={() => handleCompleteTask(individualTask._id)}
            >
              <CheckIcon />
            </Button>
          )}

          {/* Bouton pour supprimer la tâche */}
          <Button
            ml="1rem"
            colorScheme='red'
            onClick={() => handleDeleteTask(individualTask._id)}
          >
            <DeleteIcon />
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}

// Exportation du composant Task
export default Task;

// Le composant utilise des composants Chakra UI tels que Card, Flex, Text, et Button.
// La propriété individualTask est reçue en tant que paramètre, représentant les détails de la tâche.
// Le composant affiche le texte de la tâche avec une mise en forme spéciale si la tâche est complétée.
// Deux boutons sont inclus : un pour marquer la tâche comme complétée et l'autre pour supprimer la tâche.
// La fonction handleCompleteTask est appelée avec l'ID de la tâche lorsqu'on clique sur le bouton de complétion.
// La fonction handleDeleteTask est appelée avec l'ID de la tâche lorsqu'on clique sur le bouton de suppression.
// La console affiche les détails de la tâche à chaque rendu du composant, probablement pour le débogage.
// Le composant est exporté pour être utilisé ailleurs dans l'application.
