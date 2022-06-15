function ListWithKey() {
  const persons = [
    { id: 1, name: "alok", age: 25 },
    { id: 2, name: "yogi", age: 23 },
    { id: 3, name: "duwesh", age: 25 },
    { id: 4, name: "birendra", age: 27 }
  ];

  return (
    <div>
      {persons.map((person) => {
        return (
          <div key={persons.id}>
            name:{person.name}
            <p>age:{person.age}</p>
          </div>
        );
      })}
    </div>
  );
}
export default ListWithKey;
