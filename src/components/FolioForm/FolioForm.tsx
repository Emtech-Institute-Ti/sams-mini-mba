import React, { useState } from 'react';
import { foliobanner, check } from '../../utils/images';

const FolioForm: React.FC = () => {
  const [formData, setFormData] = useState({
    folio: '',
    ticketNumber: '',
  });
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleValidateClick = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar folio
    const folioPattern = /^[A-Z0-9]{8,12}$/;
    if (!folioPattern.test(formData.folio)) {
      setErrorMessage(
        'El folio debe contener letras mayúsculas y números, y debe tener entre 8 y 12 caracteres.'
      );
      return;
    }

    // Validar ticketNumber
    const ticketPattern = /^\d{6,8}$/;
    if (!ticketPattern.test(formData.ticketNumber)) {
      setErrorMessage(
        'El número de ticket debe contener solo dígitos y tener entre 6 y 8 caracteres.'
      );
      return;
    }

    // Si ambos son válidos
    setIsValid(true);
    setErrorMessage('');
  };

  return (
    <div className="flex h-screen bg-gray-100 items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2">
          <img
            src={foliobanner}
            alt="Folio Banner"
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-16">
          {isValid ? (
            <div className="text-center">
              <img
                src={check}
                alt="Check Icon"
                className="h-16 w-16 mx-auto mb-8"
              />
              <h2 className="text-2xl font-bold text-secondaryPurple mb-4">
                La validación y registro de tu folio ha sido exitoso.
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Tus accesos para iniciar sesión te llegarán a tu correo
                electrónico.
              </p>
              <button
                className="bg-secondaryPurple text-white py-3 px-6 rounded-full hover:bg-secondaryPurple-dark transition duration-300"
                onClick={() => (window.location.href = '/login')}
              >
                Acceder a Campus
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondaryPurple mb-8 text-center">
                Ingresa el folio de tu pago
              </h2>
              <form
                className="space-y-4 md:space-y-8"
                onSubmit={handleValidateClick}
              >
                <div>
                  <label
                    className="block text-secondaryPurple font-bold mb-2"
                    htmlFor="folio"
                  >
                    Folio:
                  </label>
                  <input
                    id="folio"
                    name="folio"
                    type="text"
                    className="w-full p-3 md:p-4 border border-secondaryPurple rounded-lg"
                    placeholder="Escribe aquí tu folio"
                    value={formData.folio}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-secondaryPurple font-bold mb-2"
                    htmlFor="ticket"
                  >
                    Ticket de compra:
                  </label>
                  <input
                    id="ticket"
                    name="ticketNumber"
                    type="text"
                    className="w-full p-3 md:p-4 border border-secondaryPurple rounded-lg"
                    placeholder="Escribe aquí tu ticket de compra"
                    value={formData.ticketNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondaryPurple text-white py-3 md:py-4 rounded-full hover:bg-secondaryPurple-dark transition duration-300 flex items-center justify-center"
                >
                  Validar
                </button>
              </form>
              {errorMessage && (
                <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FolioForm;
