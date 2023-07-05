function Repository({ node: { id, name, description }}) {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <p>{description}</p>
      <br />
    </div>
  )
};

export default Repository