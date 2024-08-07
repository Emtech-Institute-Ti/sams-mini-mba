import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginbanner } from '../../utils/images';
import useRecoverPassword from '../../hooks/useRecoverPassword/useRecoverPassword';
import useVerifyToken from '../../hooks/useVerifyToken/useVerifyToken';
import useResetPassword from '../../hooks/useResetPassword/useResetPassword';

const RecoverPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // 1: request reset, 2: verify token, 3: reset password

  const [
    recoverPassword,
    { loading: recoverLoading, error: recoverError, data: recoverData },
  ] = useRecoverPassword();
  const [
    verifyToken,
    { loading: verifyLoading, error: verifyError, data: verifyData },
  ] = useVerifyToken();
  const [
    resetPassword,
    { loading: resetLoading, error: resetError, data: resetData },
  ] = useResetPassword();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangeToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handleChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleRecoverClick = async (e: React.FormEvent) => {
    e.preventDefault();
    await recoverPassword(email);
    if (!recoverError) {
      setStep(2);
    }
  };

  const handleVerifyClick = async (e: React.FormEvent) => {
    e.preventDefault();
    await verifyToken({ email, token });
    if (!verifyError) {
      setStep(3);
    }
  };

  const handleResetClick = async (e: React.FormEvent) => {
    e.preventDefault();
    await resetPassword({ email, token, newPassword });
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
          <h2 className="text-2xl md:text-4xl font-bold text-secondaryPurple mb-4 text-center">
            ¿Olvidaste tu contraseña?
          </h2>
          {step === 1 && (
            <>
              <p className="text-gray-600 text-center mb-8">
                Ingresa tu e-mail y te enviaremos un código para que recuperes
                tu contraseña.
              </p>
              <form className="space-y-6" onSubmit={handleRecoverClick}>
                <div>
                  <label
                    className="block text-customBlue font-bold mb-2"
                    htmlFor="email"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full p-4 border border-gray-300 rounded-lg"
                    placeholder="Correo"
                    value={email}
                    onChange={handleChangeEmail}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondaryPurple text-white py-4 rounded-full hover:bg-customBlue transition duration-300"
                >
                  {recoverLoading ? 'Enviando...' : 'Recuperar contraseña'}
                </button>
              </form>
              {recoverData && (
                <p className="text-green-500 mt-4 text-center">
                  {recoverData.message}
                </p>
              )}
              {recoverError && (
                <p className="text-red-500 mt-4 text-center">{recoverError}</p>
              )}
            </>
          )}
          {step === 2 && (
            <>
              <p className="text-gray-600 text-center mb-8">
                Ingresa el código que fue enviado a tu correo.
              </p>
              <form className="space-y-6" onSubmit={handleVerifyClick}>
                <div>
                  <label
                    className="block text-customBlue font-bold mb-2"
                    htmlFor="token"
                  >
                    Código de recuperación
                  </label>
                  <input
                    id="token"
                    name="token"
                    type="text"
                    className="w-full p-4 border border-gray-300 rounded-lg"
                    placeholder="Código de recuperación"
                    value={token}
                    onChange={handleChangeToken}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondaryPurple text-white py-4 rounded-full hover:bg-customBlue transition duration-300"
                >
                  {verifyLoading ? 'Verificando...' : 'Verificar código'}
                </button>
              </form>
              {verifyData && (
                <p className="text-green-500 mt-4 text-center">
                  {verifyData.message}
                </p>
              )}
              {verifyError && (
                <p className="text-red-500 mt-4 text-center">{verifyError}</p>
              )}
            </>
          )}
          {step === 3 && (
            <>
              <p className="text-gray-600 text-center mb-8">
                Ingresa tu nueva contraseña.
              </p>
              <form className="space-y-6" onSubmit={handleResetClick}>
                <div>
                  <label
                    className="block text-customBlue font-bold mb-2"
                    htmlFor="newPassword"
                  >
                    Nueva Contraseña
                  </label>
                  <input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    className="w-full p-4 border border-gray-300 rounded-lg"
                    placeholder="Nueva Contraseña"
                    value={newPassword}
                    onChange={handleChangeNewPassword}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondaryPurple text-white py-4 rounded-full hover:bg-customBlue transition duration-300"
                >
                  {resetLoading ? 'Actualizando...' : 'Actualizar contraseña'}
                </button>
              </form>
              {resetData && (
                <p className="text-green-500 mt-4 text-center">
                  {resetData.message}
                </p>
              )}
              {resetError && (
                <p className="text-red-500 mt-4 text-center">{resetError}</p>
              )}
            </>
          )}
          <div className="text-center mt-6">
            <a
              href="#"
              onClick={() => navigate('/login')}
              className="text-customBlack underline"
            >
              Volver a inicio de sesión
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoverPasswordForm;
