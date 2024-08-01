import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InfoSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-white py-24">
      <div
        className="container mx-auto px-4 flex flex-col items-center justify-center space-y-12"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl"
        >
          <p className="text-lg text-gray-900 mb-8">
            En el vertiginoso mundo empresarial,{' '}
            <span className="font-bold">
              la clave del éxito se encuentra en la capacidad de adaptación,
              innovación y liderazgo.
            </span>
            <br />
            Ya seas el dueño de un negocio o el gerente de una empresa.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center max-w-3xl"
        >
          <p className="text-lg text-gray-900 mb-8">
            <span className="font-bold text-secondaryPurple">Smart MBA</span>{' '}
            está diseñado para ayudar que las{' '}
            <span className="font-bold text-customBlack">
              PyMES mexicanas den su siguiente paso en competitividad y
              rentabilidad
            </span>{' '}
            a través de estrategias realistas y que aseguren una estabilidad a
            largo plazo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
