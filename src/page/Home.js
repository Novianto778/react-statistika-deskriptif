import React from 'react';
import Card from '../components/Card';
import { cardContent } from '../data';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="flex flex-wrap mt-16 md:w-11/12 w-full md:ml-auto justify-evenly">
        {cardContent.map((card) => (
          <Link to={card.url} key={card.id}>
            <Card data={card} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
