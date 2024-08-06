import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormDataMoodleContextProps {
  formDataMoodle: any;
  setFormDataMoodle: React.Dispatch<React.SetStateAction<any>>;
}

const FormDataMoodleContext = createContext<FormDataMoodleContextProps | undefined>(undefined);

export const FormDataMoodleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formDataMoodle, setFormDataMoodle] = useState<any>(null);

  return (
    <FormDataMoodleContext.Provider value={{ formDataMoodle, setFormDataMoodle }}>
      {children}
    </FormDataMoodleContext.Provider>
  );
};

export const useFormDataMoodle = (): FormDataMoodleContextProps => {
  const context = useContext(FormDataMoodleContext);
  if (!context) {
    throw new Error('useFormDataMoodle must be used within a FormDataMoodleProvider');
  }
  return context;
};
