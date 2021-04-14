import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({search}) {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
  fetch("http://localhost:6001/listings") 
    .then((r) => r.json())
    .then((listings) => {
      // console.log(listings)
      setListings(listings)
    });
  }, []);

  function handleOnDelete(id) {
    const updatedListingsArray = listings.filter(listing=>listing.id !==id)
    setListings(updatedListingsArray)
  }
  function handleSearchTerm(newSearch) {
    setSearchTerm(newSearch)
  }
  const filteredListings = listings.filter(listing=> {
    return listing.description.toLowerCase().includes(search.toLowerCase());
  })

  const listingCards = filteredListings.map((listing) => {
    return <ListingCard
    key= {listing.id}
    listing={listing}
    onDelete={handleOnDelete}
    />
  })

  
  return (
    <main>
      <ul className="cards">{listingCards}</ul>
    </main>
  );
}


export default ListingsContainer;
