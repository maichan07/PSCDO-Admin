import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CustomerReport from './pages/CustomerReport';
import DeliveryData from './pages/DeliveryData';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/customer-report" element={<CustomerReport />} />
      <Route path="/delivery-data" element={<DeliveryData />} />
    </Routes>
  );
};

export default AppRoutes;