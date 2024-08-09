import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginbanner } from '../../utils/images';
import { useFormDataMoodle } from '../../context/moodle/MoodleContext';
import { useLoginStudent } from '../../hooks/useLoginStudent/useLoginStudent';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { setFormDataMoodle } = useFormDataMoodle();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { mutate: loginStudent, status, error } = useLoginStudent();
  const isLoading = status === 'pending';
  const isError = status === 'error';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginClick = async (e: React.FormEvent) => {
    e.preventDefault();

    loginStudent(formData, {
      onSuccess: (response) => {
        if (response.success) {
          localStorage.setItem('wsToken', response.token);
          setFormDataMoodle(formData);
          navigate('/campusdashboard');
        }
      },
      onError: (err: Error) => {
        console.error('Error en la mutación:', err.message);
      },
    });
  };

  const handleForgotPasswordClick = () => {
    navigate('/recover-password');
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
            {isError && (
              <p className="text-red-500 text-center">
                {error?.message || 'Error al intentar iniciar sesión.'}
              </p>
            )}
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
              disabled={isLoading}
            >
              {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </button>
          </form>
          <div className="text-center mt-6">
            <a
              href="#"
              className="text-customBlack underline"
              onClick={handleForgotPasswordClick}
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
