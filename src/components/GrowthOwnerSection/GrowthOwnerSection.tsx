import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ownerimg, coursebanner } from '../../utils/images';
import { useGetCourses } from '../../hooks/useGetCourses/useGetCourses';

const GrowthOwnerSection: React.FC = () => {
  const { data: courses, isLoading, error } = useGetCourses();
  const navigate = useNavigate();

  const handleRegisterClick = (courseName: string) => {
    navigate(`/register?course=${encodeURIComponent(courseName)}`);
  };

  if (isLoading) {
    return <p>Cargando cursos...</p>;
  }

  if (error) {
    return <p>Error al cargar los cursos: {error.message}</p>;
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 flex justify-center mb-12">
        <img src={coursebanner} alt="Course Banner" className="w-full h-auto" />
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={ownerimg} alt="Owner" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold text-secondaryPurple mb-4">
            Un programa perfecto para ti si eres dueño de una empresa y deseas:
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>
              Aprender a tu propio ritmo con <strong>acceso 24/7</strong> a
              contenido en línea y sesiones mensuales y en vivo lideradas por
              expertos de la industria.
            </li>
            <li>
              Unirte a una comunidad de empresarios con ideas afines, creando
              una
              <strong> red sólida y alianzas estratégicas</strong>.
            </li>
            <li>
              Observar <strong>mejoras medibles</strong> en tu negocio desde el
              primer día.
            </li>
            <li>
              Mantenerte a la vanguardia con las últimas
              <strong> tendencias y mejores prácticas</strong> del mercado.
            </li>
          </ul>
          <div className="flex flex-col space-y-4">
            {courses &&
              courses.map((course) => (
                <button
                  key={course.course_id}
                  onClick={() => handleRegisterClick(course.course_name)}
                  className="inline-block bg-secondaryPurple text-white px-6 py-2 rounded-full hover:bg-customBlue-dark transition duration-300"
                >
                  Inscríbete en {course.course_name}
                </button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthOwnerSection;
