

export const PlansPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-white">Nuestros Planes de Fitness</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Plan 1 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Plan Básico</h2>
          <p className="text-lg text-gray-700 mb-4">Ideal para principiantes que buscan comenzar su viaje de fitness.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Acceso completo al gimnasio</li>
            <li>Entrenamiento personalizado</li>
            <li>Asesoramiento nutricional básico</li>
          </ul>
          <p className="text-lg font-semibold text-blue-500">$29.99/mes</p>
        </div>
        {/* Plan 2 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Plan Intermedio</h2>
          <p className="text-lg text-gray-700 mb-4">Perfecto para aquellos que desean un compromiso más serio con su entrenamiento.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Acceso completo al gimnasio</li>
            <li>Entrenamiento personalizado avanzado</li>
            <li>Asesoramiento nutricional detallado</li>
            <li>Clases de grupo incluidas</li>
          </ul>
          <p className="text-lg font-semibold text-blue-500">$49.99/mes</p>
        </div>
        {/* Plan 3 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Plan Premium</h2>
          <p className="text-lg text-gray-700 mb-4">Para aquellos que buscan lo mejor en entrenamiento y resultados.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Acceso completo al gimnasio</li>
            <li>Entrenamiento personalizado de élite</li>
            <li>Asesoramiento nutricional personalizado</li>
            <li>Clases de grupo ilimitadas</li>
            <li>Acceso exclusivo a instalaciones VIP</li>
          </ul>
          <p className="text-lg font-semibold text-blue-500">$99.99/mes</p>
        </div>
      </div>
    </div>
  );
}


