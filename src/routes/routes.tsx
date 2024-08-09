import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationFormPage from '../pages/RegistrationFormPage/RegistrationFormPage';
import GrowthCoursePage from '../pages/GrowthCoursePage/GrowthCoursePage';
import MasterCoursePage from '../pages/MasterCoursePage/MasterCoursePage';
import PaymentCashPage from '../pages/PaymentCashPage/PaymentCashPage';
import FolioFormPage from '../pages/FolioFormPage/FolioFormPage';
import CampusDashboardPage from '../pages/CampusDashboardPage/CampusDashboardPage';
import CourseDatePage from '../pages/CourseDatePage/CourseDatePage';
import DashboardAccount from '../components/DashboardAccount/DashboardAccount';
import DashboardPaymentHistory from '../components/DashboardPaymentHistory/DashboardPaymentHistory';
import DashboardPayment from '../components/DashboardPayment/DashboardPayment';
import RedirectToMoodle from '../components/MoodleRedirect/MoodleRedirect';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import RecoverPasswordPage from '../pages/RecoverPasswordPage/RecoverPasswordPage';
import DateSelectionPage from '../pages/DateSelectionPage/DateSelectionPage';
import PaymentStatusSuccess from '../pages/PaymentStatusSuccess/PaymentStatusSuccess';
import PaymentStatusFailure from '../pages/PaymentStatusFailure/PaymentStatusFailure';
import PaymentStatusPending from '../pages/PaymentStatusPending/PaymentStatusPending';
import Checkout from '../components/Checkout/Checkout';

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
        <Route path="/course-date" element={<DateSelectionPage />} />
        <Route path="/campusdashboard" element={<PrivateRoute />}>
          <Route index element={<CampusDashboardPage />} />
          <Route path="account" element={<DashboardAccount />} />
          <Route path="payment-history" element={<DashboardPaymentHistory />} />
          <Route path="payment" element={<DashboardPayment />} />
          <Route path="moodle" element={<RedirectToMoodle />} />
        </Route>
        <Route path="/coursedate" element={<CourseDatePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<PaymentStatusSuccess />} />
        <Route path="/failure" element={<PaymentStatusFailure />} />
        <Route path="/pending" element={<PaymentStatusPending />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
