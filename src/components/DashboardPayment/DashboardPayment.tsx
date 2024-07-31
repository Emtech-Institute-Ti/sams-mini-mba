import React from 'react';

const DashboardPayment: React.FC = () => {
  const payments = [
    {
      concepto: 'Mensualidad 2 - GA',
      monto: '$3,599',
      estado: 'Pendiente',
      pagado: false,
    },
    {
      concepto: 'Mensualidad 3 - GA',
      monto: '$3,599',
      estado: 'Pendiente',
      pagado: false,
    },
    {
      concepto: 'Mensualidad 4 - GA',
      monto: '$3,599',
      estado: 'Pendiente',
      pagado: false,
    },
    {
      concepto: 'Mensualidad 5 - GA',
      monto: '$3,599',
      estado: 'Pendiente',
      pagado: false,
    },
    {
      concepto: 'Mensualidad 6 - GA',
      monto: '$3,599',
      estado: 'Pendiente',
      pagado: false,
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-secondaryPurple mb-4">Pagar</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-t-lg overflow-hidden">
            <thead className="bg-secondaryPurple text-white">
              <tr>
                <th className="py-3 px-4 text-left">Concepto</th>
                <th className="py-3 px-4 text-left">Monto</th>
                <th className="py-3 px-4 text-left">Estado</th>
                <th className="py-3 px-4 text-left">Realizar mi pago</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-3 px-4 text-black">{payment.concepto}</td>
                  <td className="py-3 px-4 text-black">{payment.monto}</td>
                  <td className="py-3 px-4 text-black">{payment.estado}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      className={`py-1 px-3 rounded-full text-white ${
                        payment.pagado ? 'bg-gray-300' : 'bg-secondaryPurple'
                      }`}
                      disabled={payment.pagado}
                    >
                      Pagar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-500">Página 1-1</span>
          <div>
            <button className="text-secondaryPurple" disabled>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="text-secondaryPurple ml-2" disabled>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPayment;
