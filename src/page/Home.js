import React from 'react';
import Card from '../components/Card';
import { cardContent } from '../data';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="flex flex-wrap md:mt-16 mt-0 w-11/12 ml-auto justify-evenly">
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
