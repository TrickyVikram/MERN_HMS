import { useEffect, useState, Suspense, lazy } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Loader from './common/Loader';
import DefaultLayout from './layout/DefaultLayout';


const PageTitle = lazy(() => import('./components/PageTitle'));
const Body = lazy(() => import('./Body/pages/Body'));
const ECommerce = lazy(() => import('./pages/Dashboard/ECommerce'));
const Calendar = lazy(() => import('./pages/Calendar'));
const Profile = lazy(() => import('./pages/Profile'));
const FormElements = lazy(() => import('./pages/Form/FormElements'));
const FormLayout = lazy(() => import('./pages/Form/FormLayout'));
const Tables = lazy(() => import('./pages/Tables'));
const Settings = lazy(() => import('./pages/Settings'));
const Chart = lazy(() => import('./pages/Chart'));
const Alerts = lazy(() => import('./pages/UiElements/Alerts'));
const Buttons = lazy(() => import('./pages/UiElements/Buttons'));
const SignIn = lazy(() => import('./pages/Authentication/SignIn'));
const SignUp = lazy(() => import('./pages/Authentication/SignUp'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Sigup = lazy(() => import('./pages/Authentication/SignUp'))

const Dashboard = lazy(() => import('./pages/Dashboard'))
const BookingForm = lazy(() => import('./pages/BookingForm'))
const BookingDetails = lazy(() => import('./pages/BookingDetails'))




function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10);
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (loading) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
      <Routes>

        <Route path="/" element={<Body />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />


        <Route path="/dashboard/*" element={<DefaultLayout />}>
          <Route
            path="*"
            element={
              <>
                <PageTitle title="Not Found" />
                <NotFound />
              </>
            }
          />
        </Route>

        <Route path="/dashboard" element={<DefaultLayout />}>
          <Route
            index
            element={
              <>
                <PageTitle title="Dashboard" />
                <Dashboard />
              </>
            }
          />
          <Route
            path="BookingDetails"
            element={
              <>
                <PageTitle title="BookingDetails" />
                <BookingDetails />
              </>
            }
          />

          <Route
            path="New-Booking"
            element={
              <>
                <PageTitle title="New Booking" />
                <BookingForm />
              </>
            }
          />


          <Route
            path="profile"
            element={
              <>
                <PageTitle title="Profile" />
                <Profile />
              </>
            }
          />


          <Route
            path="Details"
            element={
              <>
                <PageTitle title="Details" />
                <Dashboard />
              </>
            }
          />
          <Route
            path="rooms/ac-room"
            element={
              <>
                <PageTitle title="Rooms | ac-room" />
                <FormElements />
              </>
            }
          />
          <Route
            path="rooms/non-ac-room"
            element={
              <>
                <PageTitle title="Rooms | non-ac-room" />
                <FormLayout />
              </>
            }
          />
          <Route
            path="studentsList"
            element={
              <>
                <PageTitle title="studentsList" />
                <Tables />
              </>
            }
          />
          <Route
            path="settings"
            element={
              <>
                <PageTitle title="Settings" />
                <Settings />
              </>
            }
          />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
