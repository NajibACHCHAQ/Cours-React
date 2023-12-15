// Importation de composants Chakra UI
import { Flex, Input, Button } from "@chakra-ui/react";
import { SmallAddIcon } from '@chakra-ui/icons';

// Importation du type AddTaskProps depuis un fichier "@types"
import { AddTaskProps } from "@types";

// Définition du composant AddTask
const AddTask = ({ task, setTask, handleCreateTask }: AddTaskProps) => {
  return (
    <Flex pt="2rem" pl="2rem" pr="2rem" pb="1rem">
      {/* Input pour la saisie de la nouvelle tâche */}
      <Input 
        placeholder='Nouvelle tâche...' 
        size='lg' 
        onChange={(e: { target: { value: string } }) => setTask(e.target.value)} 
        value={task}
        style={{ 'background': '#fff' }}
      />
      
      {/* Bouton pour créer une nouvelle tâche */}
      <Button 
        colorScheme='twitter' 
        size='lg'
        onClick={() => handleCreateTask()}
      >
        <SmallAddIcon />
      </Button>
    </Flex>
  );
};

// Exportation du composant AddTask
export default AddTask;


// Le composant utilise des composants Chakra UI tels que Flex, Input, et Button pour construire l'interface utilisateur.
// AddTask reçoit des propriétés (task, setTask, handleCreateTask) via l'objet AddTaskProps.
// Le composant utilise un Flex pour aligner les éléments horizontalement, avec des marges (pt, pl, pr, pb) spécifiées.
// L'Input est utilisé pour permettre à l'utilisateur de saisir la nouvelle tâche. Le texte saisi est contrôlé par l'état task.
// Le Button est utilisé pour déclencher la création d'une nouvelle tâche lorsqu'il est cliqué. Il utilise un icône SmallAddIcon de Chakra UI.
// Le style style={{ 'background': '#fff' }} est appliqué pour définir un fond blanc pour l'Input.
// La fonction onChange de l'Input met à jour l'état task à chaque changement de la valeur de l'Input.
// La fonction onClick du Button appelle la fonction handleCreateTask pour créer une nouvelle tâche.
// Le composant est exporté pour être utilisé ailleurs dans l'application.
// Ce composant encapsule la fonctionnalité d'ajout de tâches et peut être inclus dans la page principale (Home) pour permettre à l'utilisateur d'ajouter des tâches facilement.