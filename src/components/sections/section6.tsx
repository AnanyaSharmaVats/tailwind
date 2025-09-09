import * as React from 'react';

const Section6 = () => {
  return (
    <section className="w-full mx-[20px] flex gap-4">
     

      {/* Left half */}
      <div className="w-1/2 grid grid-rows-5 gap-4">
        {/* Top left */}
        <div className="row-span-2">
          <div className="grid gap-4">
            <div className="p-2 bg-gray-100 rounded-lg flex flex-col items-center text-center m-5">
              <h3 className="font-semibold text-gray-800">Cozy Sofas</h3>
              <p className="text-gray-500 text-sm">
                Discover sofas that combine comfort and style for your living room.
              </p>
              <img
                src="/images/bedroom.png"
                alt="Cozy Sofas"
                className="mt-2 rounded-lg object-cover h-100 w-full"
              />
            </div>
            <div className="p-2 bg-gray-100 rounded-lg flex flex-col items-center text-center m-5">
              <h3 className="font-semibold text-gray-800">Elegant Chairs</h3>
              <p className="text-gray-500 text-sm">
                Add a touch of sophistication with our curated chair collection.
              </p>
              <img
                src="/images/bedroom.png"
                alt="Elegant Chairs"
                className="mt-2 rounded-lg object-cover h-100 w-full"
              />
            </div>
            <div className="p-2 bg-gray-100 rounded-lg flex flex-col items-center text-center m-5">
              <h3 className="font-semibold text-gray-800">Stylish Tables</h3>
              <p className="text-gray-500 text-sm">
                Perfect tables for your dining and living spaces.
              </p>
              <img
                src="/images/bedroom.png"
                alt="Stylish Tables"
                className="mt-2 rounded-lg object-cover h-100 w-full"
              />
            </div>
          </div>
        </div>

        {/* Bottom left */}
        <div className="row-span-2 row-start-3">
          <div className="grid gap-4">
            <div className="p-2 bg-gray-100 rounded-lg flex flex-col items-center text-center m-5">
              <h3 className="font-semibold text-gray-800">Storage Solutions</h3>
              <p className="text-gray-500 text-sm">
                Keep your home tidy with functional yet stylish storage.
              </p>
              <img
                src="/images/bedroom.png"
                alt="Storage Solutions"
                className="mt-2 rounded-lg object-cover h-100 w-full"
              />
            </div>
            <div className="p-2 bg-gray-100 rounded-lg flex flex-col items-center text-center m-5">
              <h3 className="font-semibold text-gray-800">Bedroom Decor</h3>
              <p className="text-gray-500 text-sm">
                Refresh your bedroom with cozy bedding and elegant furniture.
              </p>
              <img
                src="/images/bedroom.png"
                alt="Bedroom Decor"
                className="mt-2 rounded-lg object-cover h-100 w-full"
              />
            </div>
            <div className="p-2 bg-gray-100 rounded-lg flex flex-col items-center text-center m-5">
              <h3 className="font-semibold text-gray-800">Outdoor Living</h3>
              <p className="text-gray-500 text-sm">
                Stylish furniture for patios and gardens.
              </p>
              <img
                src="/images/bedroom.png"
                alt="Outdoor Living"
                className="mt-2 rounded-lg object-cover h-100 w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right half */}
      <div className="w-1/2 grid grid-rows-5 gap-4">
        {/* Top right */}
        <div className="row-span-2 row-start-1">
          <div className="grid gap-4">
            <div className="p-2 bg-gray-100 rounded-lg flex flex-col items-center text-center m-5">
              <h3 className="font-semibold text-gray-800">Lighting Ideas</h3>
              <p className="text-gray-500 text-sm">
                Illuminate your home with our modern and classic lighting options.
              </p>
              <img
                src="/images/bedroom.png"
                alt="Lighting Ideas"
                className="mt-2 rounded-lg object-cover h-100 w-full"
              />
            </div>
            <div className="p-2 bg-gray-100 rounded-lg flex flex-col items-center text-center m-5">
              <h3 className="font-semibold text-gray-800">Rugs & Carpets</h3>
              <p className="text-gray-500 text-sm">
                Add warmth and texture to any room with our rug collection.
              </p>
              <img
                src="/images/bedroom.png"
                alt="Rugs & Carpets"
                className="mt-2 rounded-lg object-cover h-100 w-full"
              />
            </div>
            <div className="p-2 bg-gray-100 rounded-lg flex flex-col items-center text-center m-5">
              <h3 className="font-semibold text-gray-800">Decor Accessories</h3>
              <p className="text-gray-500 text-sm">
                Small touches that make a big impact on your home’s style.
              </p>
              <img
                src="/images/bedroom.png"
                alt="Decor Accessories"
                className="mt-2 rounded-lg object-cover h-100 w-full"
              />
            </div>
          </div>
        </div>

        {/* Bottom right */}
        <div className="row-span-2 row-start-3">
          <div className="grid gap-4">
            <div className="p-2 bg-gray-100 rounded-lg flex flex-col items-center text-center m-5">
              <h3 className="font-semibold text-gray-800">Office Furniture</h3>
              <p className="text-gray-500 text-sm">
                Ergonomic and stylish solutions for your home office.
              </p>
              <img
                src="/images/bedroom.png"
                alt="Office Furniture"
                className="mt-2 rounded-lg object-cover h-100 w-full"
              />
            </div>
            <div className="p-2 bg-gray-100 rounded-lg flex flex-col items-center text-center m-5">
              <h3 className="font-semibold text-gray-800">Kitchen Essentials</h3>
              <p className="text-gray-500 text-sm">
                Functional furniture and decor for a modern kitchen.
              </p>
              <img
                src="/images/bedroom.png"
                alt="Kitchen Essentials"
                className="mt-2 rounded-lg object-cover h-100 w-full"
              />
            </div>
            <div className="p-2 bg-gray-100 rounded-lg flex flex-col items-center text-center m-5">
              <h3 className="font-semibold text-gray-800">Seasonal Favorites</h3>
              <p className="text-gray-500 text-sm">
                Curated pieces to refresh your home each season.
              </p>
              <img
                src="/images/bedroom.png"
                alt="Seasonal Favorites"
                className="mt-2 rounded-lg object-cover h-100 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
