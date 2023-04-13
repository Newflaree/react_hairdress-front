import { Navigate, Route, Routes } from 'react-router-dom';
import { ContactPage, HomePage, ProductsPage, ServicesPage } from '../pages';

export const HairdressRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path='/products' element={ <ProductsPage /> } />
      <Route path='/services' element={ <ServicesPage /> } />
      <Route path='/contact' element={ <ContactPage /> } />

      <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  );
}
