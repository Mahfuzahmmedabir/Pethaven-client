import image from '../../assets/kyaw-tun-RAifY0OJe4w-unsplash.jpg';

const CTASection = () => {
  return (
    <section className="relative bg-cover bg-pet-haven2 bg-center h-96 flex items-center justify-center text-white">
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="relative text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Give a Pet a Forever Home! 🏡
        </h2>
        <p className="text-lg mb-6">
          Find your perfect furry friend and change a life today.
        </p>
        <a
          href="/adopt"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
        >
          Browse Adoptable Pets
        </a>
      </div>
    </section>
  );
};

export default CTASection;
