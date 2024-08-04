import React from 'react';
import Table from './components/Table';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import CryptoElement from './components/CryptoElement'

function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:(
        <div>
        <h1 className="text-3xl font-bold text-center underline">Crypto</h1>
        <Outlet />
      </div>
      ),
      children :[
        {
          index: true,
          element: <Table />,
        },
        {
          path:'/cryptoElement/:cryptoCode',
          element:<CryptoElement />
        }
      ]
    }
  ])
  return (
    
      <RouterProvider router={appRouter} />
      
  );
}

export default App;
