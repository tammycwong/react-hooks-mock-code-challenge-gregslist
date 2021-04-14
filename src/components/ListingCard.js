import React, {useState} from "react";

function ListingCard({listing, onDelete, searchTerm}) {
  const {id, image, description, location} = listing;
  const[isFavorite, setIsFavorite] = useState(false)

  function handleIsFavorite() {
    setIsFavorite(!isFavorite)
  }
  function handleOnDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method:"DELETE"
      
    })
      .then((r) => r.json())
      .then(() => {
        onDelete(id)
      })
    }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleIsFavorite} className="emoji-button favorite active" >★</button>
        ) : (
          <button onClick={handleIsFavorite}className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleOnDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
