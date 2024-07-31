import React, { useState } from 'react';

const DashboardPaymentHistory: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const payments = [
    {
      concepto: 'Mensualidad 1 - GA',
      monto: '$3,599',
      fecha: '01-01-24',
      estado: 'Pagado',
      estadoColor: 'text-green-500',
    },
    {
      concepto: 'Mensualidad 2 - GA',
      monto: '$3,599',
      fecha: '01-02-24',
      estado: 'Pendiente',
      estadoColor: 'text-primaryGray',
    },
    {
      concepto: 'Mensualidad 3 - GA',
      monto: '$3,599',
      fecha: '01-03-24',
      estado: 'Pendiente',
      estadoColor: 'text-primaryGray',
    },
    {
      concepto: 'Mensualidad 4 - GA',
      monto: '$3,599',
      fecha: '01-04-24',
      estado: 'Pendiente',
      estadoColor: 'text-primaryGray',
    },
    {
      concepto: 'Mensualidad 5 - GA',
      monto: '$3,599',
      fecha: '01-05-24',
      estado: 'Pendiente',
      estadoColor: 'text-primaryGray',
    },
    {
      concepto: 'Mensualidad 6 - GA',
      monto: 'v',
      fecha: '01-06-24',
      estado: 'Pendiente',
      estadoColor: 'text-primaryGray',
    },
  ];

  const totalPages = Math.ceil(payments.length / itemsPerPage);

  const currentItems = payments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-secondaryPurple mb-4">
        Historial de pagos
      </h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="overflow-x-auto rounded-t-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-secondaryPurple text-white rounded-t-lg">
              <tr>
                <th className="py-3 px-4 text-left">Concepto</th>
                <th className="py-3 px-4 text-left">Monto</th>
                <th className="py-3 px-4 text-left">Fecha</th>
                <th className="py-3 px-4 text-left">Estado</th>
                <th className="py-3 px-4 text-left">Recibo</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((payment, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-3 px-4 text-black">{payment.concepto}</td>
                  <td className="py-3 px-4 text-black">{payment.monto}</td>
                  <td className="py-3 px-4 text-black">{payment.fecha}</td>
                  <td className={`py-3 px-4 font-bold ${payment.estadoColor}`}>
                    {payment.estado}
                  </td>
                  <td className="py-3 px-4 text-center text-primaryGray">
                    <i className="fas fa-eye"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-500">
            Página {currentPage} de {totalPages}
          </span>
          <div>
            <button
              className="text-secondaryPurple"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="text-secondaryPurple ml-2"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPaymentHistory;
