function ItemDescription({ name,description }) {
  return (
    <>
      <h1>{name}</h1>
      <h6>
        <i>{description}</i>
      </h6>
    </>
  );
}

export default ItemDescription