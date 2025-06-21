import React from 'react';
import { useParams, Link } from 'react-router-dom';
import items from '../data/items';

const ItemPage = () => {
  const { id } = useParams();
  const item = items.find((item) => item.id === id);
  const otherItems = items.filter((i) => i.id !== id).slice(0, 3);

  if (!item) {
    return (
      <div className="main-content flex items-center justify-center min-h-screen">
        <div className="text-gray-500 text-lg">Item not found.</div>
      </div>
    );
  }

  return (
    <div className="main-content min-h-screen bg-[#E3E5E5] flex flex-col">
      {/* Header Section */}
      <div className="w-full bg-[#E3E5E5] pr-8 pb-4 flex flex-col">
        <div className="mb-4">
          <h2 className="mb-0">{item.title}</h2>
          <p className="p1">{item.description}</p>
        </div>
        <div className="flex items-baseline justify-start w-full">
          <div className="flex gap-5 text-xs uppercase tracking-wider text-gray-500">
            <div>
              <h3 className="font-semibold" style={{ color: '#6E7676', fontSize: 11, textTransform: 'uppercase', marginBottom: 0 }}>Material</h3>
              <div className="text-gray-900 normal-case not-italic font-normal">{item.material}</div>
            </div>
            <div>
              <h3 className="font-semibold" style={{ color: '#6E7676', fontSize: 11, textTransform: 'uppercase', marginBottom: 0 }}>Dimensions</h3>
              <div className="text-gray-900 normal-case not-italic font-normal">{item.dimensions}</div>
            </div>
            <div>
              <h3 className="font-semibold" style={{ color: '#6E7676', fontSize: 11, textTransform: 'uppercase', marginBottom: 0 }}>Year</h3>
              <div className="text-gray-900 normal-case not-italic font-normal">{item.year}</div>
            </div>
            <div>
              <h3 className="font-semibold" style={{ color: '#6E7676', fontSize: 11, textTransform: 'uppercase', marginBottom: 0 }}>Status</h3>
              <div className="text-gray-900 normal-case not-italic font-normal">{item.status}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Image */}
      <div
        className="w-full bg-white rounded-[2px] mb-2 overflow-hidden flex items-center justify-center"
        style={{ aspectRatio: '16 / 9' }}
      >
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

      {/* More Items Section */}
      <div className="mt-8 pt-3 border-t border-gray-300">
        <h2 className="mb-3">MORE WORKS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {otherItems.map((otherItem) => (
            <Link key={otherItem.id} to={`/work/${otherItem.id}`} className="block flex flex-col h-full">
              <div className="image-card flex-grow">
                <img
                  src={otherItem.mainImage}
                  alt={otherItem.title}
                  className="w-full h-full object-cover card-img"
                />
              </div>
              <div className="pt-2 text-xs uppercase tracking-wider">
                <span>{otherItem.title}</span>
                <span className="mx-2">&#8226;</span>
                <span>{otherItem.material}</span>
                <span className="mx-2">&#8226;</span>
                <span>{otherItem.status}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemPage; 