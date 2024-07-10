import React from 'react'
import ReactDOM from 'react-dom/client'
import Apps from './Apps'
import './index.css'
import App from './App'
import App2 from './Components/Customers_log/App2'
import customerdashboard from './customer_dashboard'
import CustomerDashboard from './customer_dashboard';
import BusSearch from './Components/BusSearch'
import BusDetails from './Components/BusDetails'
import App1 from './App1'
import Profile from './Components/profile'
import MapPage from './Components/MapPage'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <MapPage /> */}
    {/* <App2 /> */}
    {/* <CustomerDashboard /> */}
    {/* <BusSearch /> */}
    {/* < App1 /> */}
    {/* < Profile /> */}
    {/* <BusDetails /> */}
    {/* <InfoPage /> */}

  </React.StrictMode>,
)
