import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RoomContext } from '../context';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

const SingleRoom = () => {
  const { slug } = useParams();
  const { getRoom } = useContext(RoomContext);
  const room = getRoom(slug);

  if (!room) {
    return (
      <div className="error">
        <h3>No such room exists</h3>
        <Link to="/rooms" className="btn-primary">
          Back to rooms
        </Link>
      </div>
    );
  }

  const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;

  return (
    <>
      <Hero hero="roomsHero">
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </Hero>
      <div className="single-room">
        <div className="single-room-images">
          {images.map((image, index) => (
            <img key={index} src={image} alt={name} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>Price : ₹{price}</h6>
            <h6>Size : {size} SQFT</h6>
            <h6>Max capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
            <h6>{pets ? "Pets allowed" : "No pets allowed"}</h6>
            <h6>{breakfast && "Free breakfast included"}</h6>
          </article>
        </div>
      </div>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
