import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { avataricon } from '../../utils/images';
import PaymentMethodSelection from '../PaymentMethodSelection/PaymentMethodSelection';
import useCreateStudent from '../../hooks/useCreateStudent/useCreateStudent';
import useGetCourses from '../../hooks/useGetCourses/useGetCourses';

const RegistrationForm: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const { data: courses } = useGetCourses();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '2000-07-14',
    email: '',
    password: 'jhon232w',
    sector_company: '',
    rol_company: '',
    courseOfInterest: '',
  });

  const [registerStudent] = useCreateStudent();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const course = params.get('course');
    if (course) {
      setFormData((prev) => ({ ...prev, courseOfInterest: course }));
    }
  }, [location.search]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterClick = async () => {
    await registerStudent(formData);
    console.log(formData, 'formdata');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      <div className="bg-white p-8 md:p-16 shadow-lg rounded-lg max-w-3xl w-full mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-secondaryPurple mb-8 text-center">
          Formulario de inscripción
        </h2>
        <div className="flex justify-center mb-8">
          <img src={avataricon} alt="Avatar Icon" className="h-16 w-16" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8">
          <div>
            <label className="block text-sm font-bold text-secondaryPurple mb-2">
              Nombre
            </label>
            <input
              className="p-4 border border-secondaryPurple rounded-lg w-full"
              placeholder="Escribe tu nombre aquí"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-secondaryPurple mb-2">
              Apellido
            </label>
            <input
              className="p-4 border border-secondaryPurple rounded-lg w-full"
              placeholder="Escribe tus apellidos aquí"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-sm font-bold text-secondaryPurple mb-2">
            Correo electrónico
          </label>
          <input
            className="w-full p-4 border border-secondaryPurple rounded-lg"
            placeholder="Escribe tu correo electrónico"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-customBlack mb-6 text-center">
          Información laboral
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8">
          <div>
            <label className="block text-sm font-bold text-secondaryPurple mb-2">
              Sector al que perteneces
            </label>
            <input
              className="p-4 border border-secondaryPurple rounded-lg w-full"
              placeholder="Escribe el sector aquí"
              name="sector_company"
              value={formData.sector_company}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-secondaryPurple mb-2">
              Rol que desempeñas
            </label>
            <input
              className="p-4 border border-secondaryPurple rounded-lg w-full"
              placeholder="Escribe tu rol aquí"
              name="rol_company"
              value={formData.rol_company}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-sm font-bold text-secondaryPurple mb-2">
            ¿Cuál es el curso de tu interés?
          </label>
          {formData.courseOfInterest ? (
            <input
              className="w-full p-4 border border-secondaryPurple rounded-lg text-secondaryPurple font-bold"
              name="courseOfInterest"
              value={formData.courseOfInterest}
              onChange={handleChange}
              readOnly
            />
          ) : (
            <select
              className="w-full p-4 border border-secondaryPurple rounded-lg text-secondaryPurple font-bold"
              name="courseOfInterest"
              value={formData.courseOfInterest}
              onChange={handleChange}
            >
              <option value="" disabled>
                Selecciona el curso de tu interés
              </option>
              {courses &&
                courses.map((course) => (
                  <option key={course.course_id} value={course.course_name}>
                    {course.course_name}
                  </option>
                ))}
            </select>
          )}
        </div>
        <div className="text-center">
          <button
            onClick={handleRegisterClick}
            className="bg-secondaryPurple text-white px-6 py-2 rounded-full hover:bg-customBlue-dark transition duration-300"
          >
            Registrarme
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 md:p-16 shadow-lg rounded-lg text-center w-full max-w-5xl mx-auto relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-700 text-2xl"
            >
              &times;
            </button>
            <PaymentMethodSelection onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
