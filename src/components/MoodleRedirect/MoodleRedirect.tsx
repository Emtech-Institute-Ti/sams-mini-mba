import React, { useEffect } from 'react';
import { useFormDataMoodle } from '../../context/moodle/MoodleContext';

const RedirectToMoodle: React.FC = () => {
  const { formDataMoodle } = useFormDataMoodle();

  useEffect(() => {
    if (formDataMoodle) {
      const redirectToCampus = () => {
        const form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", "https://moodle.stdst.site/moodle/login/index.php");

        const tokenField = document.createElement("input");
        tokenField.setAttribute("type", "hidden");
        tokenField.setAttribute("name", "logintoken");
        tokenField.setAttribute("value", "994af1987cca107899edddd1bf87c169");
        form.appendChild(tokenField);

        const usernameField = document.createElement("input");
        usernameField.setAttribute("type", "hidden");
        usernameField.setAttribute("name", "username");
        usernameField.setAttribute("value", formDataMoodle.email);
        form.appendChild(usernameField);

        const passwordField = document.createElement("input");
        passwordField.setAttribute("type", "hidden");
        passwordField.setAttribute("name", "password");
        passwordField.setAttribute("value", formDataMoodle.password);
        form.appendChild(passwordField);

        document.body.appendChild(form);
        form.submit();
      };

      redirectToCampus();
    }
  }, [formDataMoodle]);

  return <div>Cargando...</div>;
};

export default RedirectToMoodle;