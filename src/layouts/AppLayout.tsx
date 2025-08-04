// layouts/AppLayout.tsx
import { Outlet } from 'react-router-dom';
// import AppSidebar from '../components/AppSidebar';

export default function AppLayout() {
  return (
    <div className="flex">
      {/* <AppSidebar /> */}
      <div className="flex-grow">
        <h1 className='text-4xl'>App</h1>
        <Outlet />
      </div>
    </div>
  );
}
