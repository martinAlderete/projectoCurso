import { useState, useEffect } from 'react';


export const HomePage = () => {
  const [images, setImages] = useState([]);

  const apiKey = "n6H05eLVfhQ4rl5wmzdR0b1HkWcleZruHpHOYk3SD0n8TGjHR4vCF1qU";

  useEffect(() => {
   
    const fetchImages = async () => {
      try {
        const response = await fetch('https://api.pexels.com/v1/search?query=gym&per_page=3', {
          headers: {
            Authorization: apiKey
          }
        });
        if (response.ok) {
          const data = await response.json();
          setImages(data.photos); 
        } else {
          console.error('Error al obtener las imágenes:', response.statusText);
        }
      } catch (error) {
        console.error('Error al obtener las imágenes:', error);
      }
    };

    
    fetchImages();
  }, []);

  return (
    <div className="container flex flex-col justify-center items-center mx-auto px-4 py-8 gap-8 h-max">
      <h1 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white text-3xl font-bold mb-4 font-serif">¡Bienvenido a nuestra Plataforma de Fitness y Salud!</h1>
      <div className="flex flex-wrap justify-around items-center gap-5">
        {images.map((image, index) => (
          <img key={index} src={image.src.medium} alt={`Gym ${index + 1}`} className="drop-shadow-2xl" />
        ))}
      </div>
      <div className='container flex flex-col justify-between items-start gap-2'>

      <p className="text-lg  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white font-serif font-semibold">
        En nuestra plataforma, nos dedicamos a ayudarte a alcanzar tus objetivos de fitness y salud de manera efectiva y divertida.
      </p>
      <p className="text-lg  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white font-serif font-semibold">
        Ofrecemos una amplia gama de recursos y herramientas, desde programas de entrenamiento personalizados hasta planes de nutrición adaptados a tus necesidades individuales.
      </p>
      <p className="text-lg  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white font-serif font-semibold">
        Además, nuestra comunidad activa de usuarios y expertos en fitness está aquí para brindarte apoyo, motivación y consejos para que puedas alcanzar tu mejor versión.
      </p>
      <p className="text-lg  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white font-serif font-semibold">
        ¡Explora nuestra plataforma y únete a nosotros en el viaje hacia una vida más saludable y activa!
      </p>
      </div>
    </div>
  );
};
