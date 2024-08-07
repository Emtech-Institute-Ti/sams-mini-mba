import React from 'react';
import { GrowthInfoItems } from '../../utils/growthinfo';
import SectionInfo from '../SectionInfo/SectionInfo';

const GrowthInfoSection: React.FC = () => {
  const description = `
    <strong>Growth Accelerator es un programa integral diseñado para empresarios y dueños de PyMEs en México que desean transformar sus negocios.</strong>
    En solo seis meses, adquirirás habilidades y conocimientos que te permitirán llevar tu empresa al siguiente nivel,
    mejorando la eficiencia, aumentando la productividad y asegurando un crecimiento sostenido.
  `;

  return (
    <SectionInfo
      title="¿Qué es Growth Accelerator?"
      description={description}
      infoItems={GrowthInfoItems}
    />
  );
};

export default GrowthInfoSection;
