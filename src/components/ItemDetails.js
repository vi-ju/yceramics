import React from 'react';
import items from '../data/items';
import { Link } from 'react-router-dom';

const ItemDetails = ({ item }) => {
  if (!item) {
    return (
      <div className="main-content flex items-center justify-center min-h-screen">
        <div className="text-gray-500 text-lg">Item not found.</div>
      </div>
    );
  }

  return (
    <div className="main-content min-h-screen bg-[#F1F1F1] flex flex-col">
      {/* Header Section */}
      <div className="w-full bg-[#F1F1F1] pr-8 pt-0 pb-4 flex flex-col gap-2">
        {/* First row: title and description */}
        <div className="flex flex-col items-start gap-0 w-full">
          <h1 className="item-main-title mb-0">{item.title}</h1>
          <p className="paragraph-xl mb-0">{item.description}</p>
        </div>
        {/* Second row: details */}
        <div className="flex flex-row gap-12 mt-4 text-xs uppercase tracking-wider text-gray-500 w-full">
          <div>
            <h2 className="mb-0">Material</h2>
            <div className="p2">{item.material}</div>
          </div>
          <div>
            <h2 className="mb-0">Year</h2>
            <div className="p2">{item.year}</div>
          </div>
          <div>
            <h2 className="mb-0">Dimensions</h2>
            <div className="p2">{item.dimensions}</div>
          </div>
          <div>
            <h2 className="mb-0">Status</h2>
            <div className="p2">{item.status}</div>
          </div>
        </div>
      </div>
      {/* Main Image */}
      <div className="main-image-container bg-white rounded-[2px] mb-2 overflow-hidden flex items-center justify-center" style={{ height: '960px', width: '100%', alignSelf: 'center', aspectRatio: '3/2', marginTop: '24px' }}>
        <img
          src={item.mainImage}
          alt={item.title}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Gallery */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
        {item.gallery.map((img, idx) => (
          <div key={idx} className="aspect-[4/5] bg-white rounded-[2px] overflow-hidden flex items-center justify-center">
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      {/* More Section */}
      <div className="w-full mt-12" style={{ borderTop: '1px solid #F2F2ED' }}>
        <h3 className="font-semibold mt-4" style={{ color: 'rgba(0,0,0,0.96)', fontSize: 11, textTransform: 'uppercase', marginBottom: 16, letterSpacing: '0.14em' }}>More</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {items.filter(i => i.id !== item.id).slice(0, 3).map(moreItem => (
            <Link to={`/work/${moreItem.id}`} key={moreItem.id} className="block rounded-[2px]">
              <div className="aspect-square h-64 overflow-hidden mb-2 image-card">
                <img src={moreItem.mainImage} alt={moreItem.title} className="object-cover w-full h-full card-img" />
              </div>
              <h2 className="mb-1">{moreItem.title}</h2>
              <h2>{moreItem.material} • {moreItem.year}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;