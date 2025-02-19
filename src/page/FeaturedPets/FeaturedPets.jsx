import React from 'react';
import usePets from '../../hooks/usePets/usePets';

const pets = [
  {
    id: 1,
    name: 'Buddy',
    image: 'https://placekitten.com/200/200',
    description: 'A playful and friendly golden retriever.',
  },
  {
    id: 2,
    name: 'Milo',
    image: 'https://placekitten.com/201/200',
    description: 'An adorable cat who loves cuddles.',
  },
  {
    id: 3,
    name: 'Luna',
    image: 'https://placekitten.com/202/200',
    description: 'A curious kitten looking for a loving home.',
  },
  {
    id: 4,
    name: 'Rocky',
    image: 'https://placekitten.com/203/200',
    description: 'An energetic pup who loves to play.',
  },
];

const FeaturedPets = () => {
  const [pets] = usePets();
  return (
    <section className="py-12 bg-gray-100">
      <div className="  ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Featured Pets for Adoption
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pets.map(pet => (
            <div
              key={pet.id}
              className="bg-white rounded-lg shadow-lg p-4 text-center"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                {pet.name}
              </h3>
              <p className="text-gray-600">{pet.description}</p>
              <button className="mt-4 px-4 py-2 bg-light-green-700 text-white rounded-lg hover:bg-light-green-500 ">
                Adopt Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
