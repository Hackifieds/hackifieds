//Basic Stateless Functional Component
let Listing = (props) => //Consider ES6 object destructuring to filter props object for desired properties only?
  <p>{props.listing.date}</p>
  <p>{props.listing.title}</p>
  <p>{props.listing.description}</p>
  <p>{props.listing.location}</p>
  <p>{props.listing.price}</p>;