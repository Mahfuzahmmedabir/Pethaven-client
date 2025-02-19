import {
  Heart,
  PawPrint,
  Bone,
  ShieldCheck,
  Leaf,
  Utensils,
} from 'lucide-react';

const petTips = [
  {
    id: 1,
    icon: <Heart size={40} className="text-red-500" />,
    title: 'Regular Vet Checkups',
    description:
      'Schedule routine vet visits to ensure your pet stays healthy and happy.',
  },
  {
    id: 2,
    icon: <PawPrint size={40} className="text-yellow-500" />,
    title: 'Exercise & Playtime',
    description:
      'Give your pet plenty of physical activity and mental stimulation.',
  },
  {
    id: 3,
    icon: <Bone size={40} className="text-blue-500" />,
    title: 'Balanced Diet',
    description: 'Provide nutritious food that meets your pet’s dietary needs.',
  },
  {
    id: 4,
    icon: <ShieldCheck size={40} className="text-green-500" />,
    title: 'Keep Vaccinations Up to Date',
    description:
      'Ensure your pet is protected from diseases with regular vaccinations.',
  },
  {
    id: 5,
    icon: <Leaf size={40} className="text-purple-500" />,
    title: 'Grooming & Hygiene',
    description:
      'Brush fur, trim nails, and clean ears to keep your pet well-groomed.',
  },
  {
    id: 6,
    icon: <Utensils size={40} className="text-orange-500" />,
    title: 'Hydration & Fresh Water',
    description:
      'Always provide clean, fresh water for your pet to stay hydrated.',
  },
];

const PetCareTips = () => {
  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          🐾 Essential Pet Care Tips
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {petTips.map(tip => (
            <div
              key={tip.id}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">{tip.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700">
                {tip.title}
              </h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetCareTips;
