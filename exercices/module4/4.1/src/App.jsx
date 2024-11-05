import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  const addPhone = (e) => {
    e.preventDefault();
    const phoneObject = {
      name: newName,
      id: Date.now()
    };
    setPersons(persons.concat(phoneObject));
    setNewName("");
  };

  const handlePhotosChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  const Person = ({person}) =>{
    return <p>{person.name}</p>
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhone}>
        <div>
          name: <input value={newName} onChange={handlePhotosChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.id} person={person} />)}
    </div>
  );
};

export default App;
