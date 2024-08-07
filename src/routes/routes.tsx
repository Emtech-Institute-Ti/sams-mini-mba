import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationFormPage from '../pages/RegistrationFormPage/RegistrationFormPage';
import GrowthCoursePage from '../pages/GrowthPage/GrowthPage';
import MasterCoursePage from '../pages/MasterPage/MasterPage';
import PaymentCashPage from '../pages/PaymentCashPage/PaymentCashPage';
import FolioFormPage from '../pages/FolioFormPage/FolioFormPage';
import CampusDashboardPage from '../pages/CampusDashboardPage/CampusDashboardPage';
import CourseDatePage from '../pages/CourseDatePage/CourseDatePage';
import DashboardAccount from '../components/DashboardAccount/DashboardAccount';
import DashboardPaymentHistory from '../components/DashboardPaymentHistory/DashboardPaymentHistory';
import DashboardPayment from '../components/DashboardPayment/DashboardPayment';
import RedirectToMoodle from '../components/MoodleRedirect/MoodleRedirect';
import RecoverPasswordPage from '../pages/RecoverPasswordPage/RecoverPasswordPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/recover-password" element={<RecoverPasswordPage />} />
        <Route path="/register" element={<RegistrationFormPage />} />
        <Route path="/growthcourse" element={<GrowthCoursePage />} />
        <Route path="/mastercourse" element={<MasterCoursePage />} />
        <Route path="/paymentcash" element={<PaymentCashPage />} />
        <Route path="/folioform" element={<FolioFormPage />} />
        <Route path="/campusdashboard" element={<CampusDashboardPage />}>
          <Route path="account" element={<DashboardAccount />} />
          <Route path="payment-history" element={<DashboardPaymentHistory />} />
          <Route path="payment" element={<DashboardPayment />} />
          <Route path="moodle" element={<RedirectToMoodle />} />
        </Route>
        <Route path="/coursedate" element={<CourseDatePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
