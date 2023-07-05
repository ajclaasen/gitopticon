function Repository({ node: { id, name, description, url }}) {
  return (
    <div key={id}>
      <h3><a href={url}>{name}</a></h3>
      <p>{description}</p>
      <br />
    </div>
  )
};

export default Repository