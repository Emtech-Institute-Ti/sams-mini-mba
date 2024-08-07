import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginbanner } from '../../utils/images';
import useLoginStudent from '../../hooks/useLoginStudent/useLoginStudent';
import { useFormDataMoodle } from '../../context/moodle/MoodleContext';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { setFormDataMoodle } = useFormDataMoodle();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loginStudent, { loading, error }] = useLoginStudent();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginClick = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginStudent(formData);
    if (!error) {
      const response = await loginStudent(formData);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      if (!response?.error) {
        setFormDataMoodle(formData);
        navigate('/campusdashboard');
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2">
          <img
            src={loginbanner}
            alt="Login Banner"
            className="w-full h-80 md:h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-10 md:p-24">
          <h2 className="text-2xl md:text-4xl font-bold text-secondaryPurple mb-10 text-center">
            Iniciar sesión
          </h2>
          <form className="space-y-10" onSubmit={handleLoginClick}>
            <div>
              <label
                className="block text-secondaryPurple font-bold mb-2"
                htmlFor="email"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full p-4 border border-secondaryPurple rounded-lg"
                placeholder="Escribe tu correo electrónico aquí"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-secondaryPurple font-bold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full p-4 border border-secondaryPurple rounded-lg"
                placeholder="Ingresa tu contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-secondaryPurple text-white py-4 rounded-full hover:bg-secondaryPurple-dark transition duration-300"
            >
              {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </button>
          </form>
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          <div className="text-center mt-6">
            <a href="#" className="text-customBlack underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
