import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
const [newNumber, setNewNumber] = useState('')
const [filter, setFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
   const nameExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())
   nameExists
   ? alert(`${newName} is already added to phonebook`)
   :(() => {
    const capitalizedNewName = newName.charAt(0).toUpperCase() + newName.slice(1).toLowerCase()
  const newPerson = {
    id: persons.length +1,
    name: capitalizedNewName,
    number: newNumber
  }
  setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  })()
}
  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
   
  }
  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChnge = (event) => {
    setFilter(event.target.value)
  }
    const personsToShow = filter
    ?persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    :persons
  
 

  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input 
      value={filter}
      onChange={handleFilterChnge}/></div>
      <h3>add a new</h3>
      <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNewNameChange}/>
        </div>
        <div>number: <input 
        value={newNumber}
        onChange={handleNewNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <ul>
        {personsToShow.map(person =>
          <li key={person.id}>{person.name}, phone: {person.number}</li>
        )}
      </ul>
    </div>
    
  )
}

export default App