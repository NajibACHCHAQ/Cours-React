import { useState } from 'react';

// Constantes pour le titre et le message de bienvenue
const title = "Bonjour à tous";
const welcomeMessage = "Bienvenue sur notre plateforme";

// Liste de tâches (todos)
const todos = [
  'Presenter react',
  'Presenter le jsx',
  'Creer des composants'
];

// Fonction principale du composant App
function App() {
  // État pour gérer l'acceptation des termes
  const [isTermAccepted, setIsTermAccepted] = useState(false);

  // État pour gérer la valeur du champ de texte
  const [value, setValue] = useState('');
  // Fonction pour mettre à jour la valeur lors de la saisie
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // État pour gérer l'état de la checkbox
  const [checked, setChecked] = useState(true);
  // Fonction pour inverser l'état de la checkbox lors du clic
  const toggleCheck = () => {
    setChecked(!checked);
  };

  // État pour gérer les informations d'une personne
  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Joe',
    age: 18
  });
  // Fonction pour incrémenter l'âge de la personne
  const increment1 = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  // État pour gérer un compteur
  const [count, setCount] = useState(0);
  // Fonction pour incrémenter le compteur
  const increment = () => {
    setCount(count + 1);
    console.log(count); // Affiche la valeur actuelle dans la console
  };

  // Fonction pour gérer le clic sur un bouton
  const handleClick = () => {
    alert("cliquage"); // Affiche une alerte lors du clic
  };

  // Rendu du composant
  return (
    <>
      {/* Éléments JSX du composant */}
      <h1 onClick={handleClick} id="title" className="title">
        {title}
      </h1>
      <Title color="green" />
      <p>
        {/* Paragraphe de texte factice */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptates tempore reprehenderit molestias unde vel fuga nobis,
        ab dolorum cupiditate delectus, corporis tempora, quidem odio
        quo est sunt. A, quia sunt.
      </p>
      <ul>
        {/* Mapping des éléments de la liste des todos et affichage en liste */}
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
      <p>Compteur : {count}</p>
      <button onClick={increment}>Incrementer</button>

      <p>Age de {person.firstName} : {person.age}</p>
      <button onClick={increment1}>+ Une Année</button>

      {/* Formulaire avec un champ de texte, une checkbox et un bouton conditionnel */}
      <form action="">
        <input
          type="text"
          name='firstName'
          value={value}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleCheck}
        />
        {checked && <button>Envoyer</button>}
      </form>

      {/* Formulaire avec un composant CGUCheckbox personnalisé */}
      <form action="">
        <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
        <button disabled={!isTermAccepted}>Soumettre</button>
      </form>
    </>
  );
}

// Composant fonctionnel Title
function Title({ color }) {
  // Affiche un titre avec une couleur personnalisée
  return <h3 style={{ color: color }}>{welcomeMessage}</h3>;
}

// Composant fonctionnel CGUCheckbox
function CGUCheckbox({ checked, onCheck }) {
  // Affiche une checkbox avec un label pour accepter les CGU
  return (
    <div>
      <label htmlFor="">
        <input
          type="checkbox"
          onChange={(e) => onCheck(e.target.checked)}
          checked={checked}
        />
        Accepter les CGU
      </label>
    </div>
  );
}

// Export du composant App par défaut
export default App;
