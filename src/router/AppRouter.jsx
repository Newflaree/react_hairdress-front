import { Route, Routes } from 'react-router-dom';

// Routes
import { AuthRoutes } from '../auth/routes';
import { HairdressRoutes } from '../hairdress/routes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='auth/*' element={ <AuthRoutes /> } />
      <Route path='/*' element={ <HairdressRoutes /> } />
    </Routes>
  );
}
