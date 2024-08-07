import React from 'react';
import SectionInfo from '../SectionInfo/SectionInfo';
import { MasterInfoItems } from '../../utils/masterInfo';

const MasterInfoSection: React.FC = () => {
  const description = `
    Master Management es un programa especializado que fortalece las habilidades de los gerentes de empresas mexicanas, enfocándose en <strong>competencias clave de liderazgo y gestión</strong>. En seis meses, estarás preparado para mejorar tu desempeño y productividad, promoviendo el crecimiento inmediato del equipo o área a tu cargo.
  `;

  return (
    <SectionInfo
      title="¿Qué es Master Management?"
      description={description}
      infoItems={MasterInfoItems}
    />
  );
};

export default MasterInfoSection;
