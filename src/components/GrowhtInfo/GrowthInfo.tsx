import { monitoricon, notesicon, calendaricon } from '../../utils/images';

const GrowthInfoSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-secondaryPurple mb-4 text-center">
          ¿Qué es Growth Accelerator?
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center py-24">
          <strong>
            Growth Accelerator es un programa integral diseñado para empresarios
            y dueños de PyMEs en México que desean transformar sus negocios.
          </strong>{' '}
          En solo seis meses, adquirirás habilidades y conocimientos que te
          permitirán llevar tu empresa al siguiente nivel, mejorando la
          eficiencia, aumentando la productividad y asegurando un crecimiento
          sostenido.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
            <img
              src={monitoricon}
              alt="Icon 1"
              className="w-12 h-12 mr-4 mt-12"
            />
            <div className="text-left">
              <h3 className="text-xl font-bold text-secondaryPurple mb-2">
                Modalidad:
              </h3>
              <p className="text-gray-700">
                Híbrida
                <br />
                Combinación de contenido en una plataforma con sesiones
                mensuales con un experto.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
            <img
              src={calendaricon}
              alt="Icon 2"
              className="w-12 h-12 mr-4 mt-12"
            />
            <div className="text-left">
              <h3 className="text-xl font-bold text-secondaryPurple mb-2">
                Duración:
              </h3>
              <p className="text-gray-700">
                6 meses
                <br />
                (Por confirmar) A partir del 1 de septiembre de 2024.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
            <img
              src={notesicon}
              alt="Icon 3"
              className="w-12 h-12 mr-4 mt-12"
            />
            <div className="text-left">
              <h3 className="text-xl font-bold text-secondaryPurple mb-2">
                Módulos:
              </h3>
              <p className="text-gray-700">
                6
                <br />
                En donde conocerás cada mes, aspectos cruciales para la
                productividad y rentabilidad de tu empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthInfoSection;
