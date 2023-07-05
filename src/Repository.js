function Repository({ node: { name, description, url }}) {
  return (
    <div>
      <h3><a href={url}>{name}</a></h3>
      <p>{description}</p>
      <br />
    </div>
  )
};

export default Repository;
