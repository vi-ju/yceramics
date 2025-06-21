import React from 'react';
import { Link } from 'react-router-dom';
import items from '../data/items';

const Home = () => (
  <main className="main-content">
    {/* Hero Section */}
    <Link to={`/work/${items[0].id}`} className="block">
      <div
        className="image-card mb-2"
        style={{ aspectRatio: '16 / 9' }}
      >
        <img src="/images/item1.jpg" alt="Featured Ceramic Work" className="w-full h-full object-cover card-img" />
      </div>
    </Link>
    {/* Gallery Grid */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div className="grid grid-cols-3 gap-2 w-full">
        {items.slice(1).map((item) => (
          <Link
            key={item.id}
            to={`/work/${item.id}`}
            className="aspect-square image-card"
            style={{ display: 'block' }}
          >
            <img
              src={item.mainImage}
              alt={item.title}
              className="w-full h-full object-cover card-img"
            />
          </Link>
        ))}
      </div>
      {/* New Row: 2 cards per row */}
      <div className="grid grid-cols-2 gap-2 w-full">
        {items.slice(0, 2).map((item) => (
          <Link
            key={`row2-${item.id}`}
            to={`/work/${item.id}`}
            className="aspect-[10/13] image-card"
            style={{ display: 'block' }}
          >
            <img
              src={item.mainImage}
              alt={item.title}
              className="w-full h-full object-cover card-img"
            />
          </Link>
        ))}
      </div>
    </div>
  </main>
);

export default Home; 