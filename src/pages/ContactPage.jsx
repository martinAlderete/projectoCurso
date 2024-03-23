

export const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center text-white">
      <h1 className="text-3xl font-bold mb-4">¡Contáctanos!</h1>
      <p className="text-lg">
        ¿Tienes alguna pregunta, sugerencia o simplemente quieres decir hola? Estamos aquí para ayudarte.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Información de Contacto</h2>
        <ul className="list-disc list-inside">
          <li>Correo Electrónico: info@ejemplo.com</li>
          <li>Teléfono: +1234567890</li>
          <li>Dirección: 123 Calle Principal, Ciudad, País</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Formulario de Contacto</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium">Nombre</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium">Correo Electrónico</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium">Mensaje</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="px-6 py-3 text-lg font-semibold bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
}
