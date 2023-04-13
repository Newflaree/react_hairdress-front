export const Title = ({ title }) => {
  return (
    ( title )
      ? (
          <div className="title-section">
            <h2 className="mb-4">{ title }</h2>
          </div> 
        )
      : ( '' )
  );
}
