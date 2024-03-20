export const SideNavButtons = ({ name, attribute, handleOnClick }) => {
  return (
    <>
      {attribute.length === 0 ? (
        <></>
      ) : (
        attribute.map((value, index) => (
          <button
            key={index}
            className="banned-buttons"
            type="attribute"
            name={name}
            value={value}
            onClick={handleOnClick}
          >
            {name === 'life_span'
              ? `${value} years`
              : name === 'imperial'
              ? `${value} lbs`
              : name === 'metric'
              ? `${value} kg`
              : value}
          </button>
        ))
      )}
    </>
  )
}
