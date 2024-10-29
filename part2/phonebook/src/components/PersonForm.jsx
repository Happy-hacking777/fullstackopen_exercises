const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber, personService, setUpdateMessage }) => {

  const addName = (event) => {
    event.preventDefault();

    // Find if the person already exists in the phonebook
    const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());

    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${existingPerson.name} is already in the phonebook, replace the old number with the new one?`
      );

      if (confirmUpdate) {
        // Update the existing person's number
        const updatedPerson = { ...existingPerson, number: newNumber };
        
        personService
          .update(existingPerson.id, updatedPerson)
          .then(returnedPerson => {
            // Update the state with the new number for the existing person
            setPersons(persons.map(p => (p.id !== existingPerson.id ? p : returnedPerson)));
            setUpdateMessage(`Updated ${returnedPerson.name}`);
                        setTimeout(() => setUpdateMessage(null), 5000);
                    
          })
          .catch(error => {
            alert(`Failed to update the number for ${existingPerson.name}`);
            console.error("Error updating number:", error);
          });
      }
    } else {
      // If the person doesn't already exist, create a new person entry
      const capitalizedNewName = newName.charAt(0).toUpperCase() + newName.slice(1).toLowerCase();
      const maxId = persons.length > 0 ? Math.max(...persons.map(person => person.id)) : 0;
      
      const newPerson = {
        id: String(maxId + 1),
        name: capitalizedNewName,
        number: newNumber
      };

      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setUpdateMessage(`Added ${returnedPerson.name}`);
                    setTimeout(() => setUpdateMessage(null), 5000);
        })
        .catch(error => {
          console.error("Error adding person:", error);
        });
    }
   

    // Clear the input fields after either adding or attempting to update
    setNewName('');
    setNewNumber('');
  };

  return (
    <form onSubmit={addName}>
      <div>
        name: <input 
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
      </div>
      <div>
        number: <input 
          value={newNumber}
          onChange={e => setNewNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;