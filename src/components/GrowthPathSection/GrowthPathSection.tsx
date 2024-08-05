import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { line } from '../../utils/images';
import { modules } from '../../utils/modules';

const GrowthPathSection: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <section
      className="py-12"
      style={{ backgroundColor: 'rgba(8, 0, 86, 0.03)' }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-secondaryPurple mb-8 text-center">
          Ruta de aprendizaje
        </h2>
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <img
                src={line}
                alt="line"
                className="hidden md:block absolute top-0 left-56 h-full"
              />
              <ul className="hidden md:block space-y-6 relative z-10">
                {modules.map((_, i) => (
                  <li
                    className="flex md:block items-center cursor-pointer"
                    key={i}
                    onClick={() => toggleModule(i)}
                  >
                    <div className="flex-shrink-0">
                      {i === 0 && (
                        <span className="block h-2 w-2 bg-customBlack rounded-full md:hidden"></span>
                      )}
                      {i < 5 && (
                        <span className="block h-12 w-0.5 bg-customBlack md:hidden"></span>
                      )}
                      {i === 5 && (
                        <span className="block h-2 w-2 bg-customBlack rounded-full md:hidden"></span>
                      )}
                    </div>
                    <div className="ml-4 text-secondaryPurple font-bold md:ml-0">{`Módulo ${i + 1}`}</div>
                    {i < 5 && <div className="hidden md:block ml-2 h-12"></div>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-2/3 md:pl-12 mt-8 md:mt-0">
            <ul className="space-y-6">
              {modules.map((item, index) => (
                <li
                  key={index}
                  className="border-b md:border-none border-secondaryPurple pb-4 md:pb-0"
                >
                  <div
                    className="md:hidden"
                    onClick={() => toggleModule(index)}
                  >
                    <div className="text-secondaryPurple font-bold cursor-pointer">{`Módulo ${index + 1}`}</div>
                  </div>
                  <AnimatePresence>
                    {expandedModule === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden"
                      >
                        <h3 className="text-xl font-bold text-gray-900 py-2">
                          {item.title}:
                        </h3>
                        <p className="text-gray-700">{item.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="hidden md:block">
                    <h3 className="text-xl font-bold text-gray-900 py-2">
                      {item.title}:
                    </h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <motion.a
                href="/example.pdf"
                download="example.pdf"
                className="inline-block bg-secondaryPurple text-white px-6 py-3 rounded-full hover:bg-customBlue-dark transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Descargar brochure
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthPathSection;
