function ListRendering() {
  const names = ["alok", "yogi", "duwesh", "birendra"];

  return (
    <div>
      {names.map((name) => {
        return <h1>{name}</h1>;
      })}
    </div>
  );
}

export default ListRendering;
