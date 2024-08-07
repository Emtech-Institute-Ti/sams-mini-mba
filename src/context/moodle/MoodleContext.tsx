import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FormDataMoodle } from '../../types/ApiDto';
import CryptoJS from 'crypto-js';

interface FormDataMoodleContextProps {
  formDataMoodle: FormDataMoodle | null;
  setFormDataMoodle: (data: FormDataMoodle) => void;
}

const FormDataMoodleContext = createContext<
  FormDataMoodleContextProps | undefined
>(undefined);

const SECRET_KEY = 'hwuFvg7NuMgS7TV';

export const FormDataMoodleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formDataMoodle, setFormDataMoodleState] =
    useState<FormDataMoodle | null>(() => {
      const encryptedData = localStorage.getItem('formDataMoodle');
      if (encryptedData) {
        const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decryptedData) as FormDataMoodle;
      }
      return null;
    });

  const setFormDataMoodle = (data: FormDataMoodle) => {
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      SECRET_KEY
    ).toString();
    localStorage.setItem('formDataMoodle', encryptedData);
    setFormDataMoodleState(data);
  };

  return (
    <FormDataMoodleContext.Provider
      value={{ formDataMoodle, setFormDataMoodle }}
    >
      {children}
    </FormDataMoodleContext.Provider>
  );
};

export const useFormDataMoodle = (): FormDataMoodleContextProps => {
  const context = useContext(FormDataMoodleContext);
  if (!context) {
    throw new Error(
      'useFormDataMoodle must be used within a FormDataMoodleProvider'
    );
  }
  return context;
};
