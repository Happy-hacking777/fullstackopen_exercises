const Persons = ({ filter, persons, deletePerson }) => {
  const personsToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons


  return (
   
    <ul>
      {personsToShow.map(person =>
        <li key={person.id}>
          {person.name}, phone: {person.number}
          <button onClick={() => deletePerson(person.id)}> Delete</button>
        </li>
      )}
    </ul>
  )
}

export default Persons