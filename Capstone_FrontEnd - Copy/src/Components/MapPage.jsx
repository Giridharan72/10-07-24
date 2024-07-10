// // // import React, { useEffect } from 'react';
// // // import L from 'leaflet';
// // // import 'leaflet/dist/leaflet.css';

// // // const MapPage = () => {
// // //   useEffect(() => {
// // //     // Initialize map
// // //     const map = L.map('map', {
// // //       center: [12.9716, 77.5946], // Bangalore coordinates
// // //       zoom: 12, // Initial zoom level
// // //     });

// // //     // Add OpenStreetMap tile layer
// // //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// // //       attribution: '&copy; OpenStreetMap contributors',
// // //       maxZoom: 18,
// // //     }).addTo(map);

// // //     // Cleanup function
// // //     return () => {
// // //       map.remove();
// // //     };
// // //   }, []);

// // //   return (
// // //     <div id="map" style={{ height: '50vh',width:'600px' }}>
// // //       {/* Map container */}
// // //     </div>
// // //   );
// // // };

// // // export default MapPage;

// // import React, { useEffect } from 'react';
// // import L from 'leaflet';
// // import 'leaflet/dist/leaflet.css';
// // import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
// // import 'leaflet-routing-machine';

// // const MapPage = () => {
// //   useEffect(() => {
// //     // Initialize map
// //     const map = L.map('map', {
// //       center: [12.9716, 77.5946], // Bangalore coordinates
// //       zoom: 7, // Adjust zoom level for better visibility of the route
// //     });

// //     // Add OpenStreetMap tile layer
// //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //       attribution: '&copy; OpenStreetMap contributors',
// //       maxZoom: 18,
// //     }).addTo(map);

// //     // Add routing control
// //     L.Routing.control({
// //       waypoints: [
// //         L.latLng(12.9716, 77.5946), // Bengaluru coordinates
// //         L.latLng(11.6643, 78.1460)  // Salem, Tamil Nadu coordinates
// //       ],
// //       routeWhileDragging: true
// //     }).addTo(map);

// //     // Cleanup function
// //     return () => {
// //       map.remove();
// //     };
// //   }, []);

// //   return (
// //     <div id="map" style={{ height: '50vh', width: '600px' }}>
// //       {/* Map container */}
// //     </div>
// //   );
// // };

// // export default MapPage;

// import React, { useEffect, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
// import 'leaflet-routing-machine';

// const MapPage = () => {
//   const [distance, setDistance] = useState('');

//   useEffect(() => {
//     // Initialize map
//     const map = L.map('map', {
//       center: [12.9716, 77.5946], // Bangalore coordinates
//       zoom: 7, // Adjust zoom level for better visibility of the route
//     });

//     // Add OpenStreetMap tile layer
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors',
//       maxZoom: 18,
//     }).addTo(map);

//     // Add routing control
//     const control = L.Routing.control({
//       waypoints: [
//         L.latLng(12.9716, 77.5946), // Bengaluru coordinates
//         L.latLng(11.6643, 78.1460)  // Salem, Tamil Nadu coordinates
//       ],
//       routeWhileDragging: true
//     }).addTo(map);

//     control.on('routesfound', function(e) {
//       const routes = e.routes;
//       const summary = routes[0].summary;
//       const distanceInKm = (summary.totalDistance / 1000).toFixed(2); // Convert meters to kilometers
//       setDistance(`Distance: ${distanceInKm} km`);
//     });

//     // Cleanup function
//     return () => {
//       map.remove();
//     };
//   }, []);

//   return (
//     <div>
//       <div id="map" style={{ height: '50vh', width: '600px' }}>
//         {/* Map container */}
//       </div>
//       <div>
//         <p>{distance}</p>
//       </div>
//     </div>
//   );
// };

// export default MapPage;

// import React, { useEffect } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
// import 'leaflet-routing-machine';

// const MapPage = ({ from, to }) => {
//   useEffect(() => {
//     // Initialize map
//     const map = L.map('map', {
//       center: [12.9716, 77.5946], // Default center, you can adjust this
//       zoom: 7, // Adjust zoom level for better visibility of the route
//     });

//     // Add OpenStreetMap tile layer
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors',
//       maxZoom: 18,
//     }).addTo(map);

//     // Geocoding locations to get latitude and longitude
//     const geocodeLocation = async (location) => {
//       const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`);
//       const data = await response.json();
//       if (data.length > 0) {
//         return [data[0].lat, data[0].lon];
//       }
//       return null;
//     };

//     const addRoute = async () => {
//       const fromCoords = await geocodeLocation(from);
//       const toCoords = await geocodeLocation(to);

//       if (fromCoords && toCoords) {
//         L.Routing.control({
//           waypoints: [
//             L.latLng(fromCoords[0], fromCoords[1]),
//             L.latLng(toCoords[0], toCoords[1]),
//           ],
//           routeWhileDragging: true,
//         }).addTo(map);
//       }
//     };

//     addRoute();

//     // Cleanup function
//     return () => {
//       map.remove();
//     };
//   }, [from, to]);

//   return (
//     <div id="map" style={{ height: '50vh', width: '100%' }}>
//      <p>Distance: {distance} km</p>
//      <p>Duration: {duration} mins</p>
//     </div>
//   );
// };

// export default MapPage;

// import React, { useEffect, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
// import 'leaflet-routing-machine';

// const MapPage = ({ from, to }) => {
//   const [distance, setDistance] = useState(null);
//   const [duration, setDuration] = useState(null);

//   useEffect(() => {
//     // Initialize map
//     const map = L.map('map', {
//       center: [12.9716, 77.5946], // Default center, adjust if necessary
//       zoom: 7, // Adjust zoom level for better visibility of the route
//     });

//     // Add OpenStreetMap tile layer
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors',
//       maxZoom: 18,
//     }).addTo(map);

//     // Geocoding locations to get latitude and longitude
//     const geocodeLocation = async (location) => {
//       const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`);
//       const data = await response.json();
//       if (data.length > 0) {
//         return [data[0].lat, data[0].lon];
//       }
//       return null;
//     };

//     const addRoute = async () => {
//       const fromCoords = await geocodeLocation(from);
//       const toCoords = await geocodeLocation(to);

//       if (fromCoords && toCoords) {
//         const control = L.Routing.control({
//           waypoints: [
//             L.latLng(fromCoords[0], fromCoords[1]),
//             L.latLng(toCoords[0], toCoords[1]),
//           ],
//           routeWhileDragging: true,
//         }).addTo(map);

//         // control.on('routesfound', (e) => {
//         //   const routes = e.routes;
//         //   const summary = routes[0].summary;
//         //   setDistance((summary.totalDistance / 1000).toFixed(2)); // Convert to kilometers
//         //   setDuration((summary.totalTime / 60).toFixed(2)); // Convert to minutes
//         // });
//       }
//     };

//     addRoute();

//     // Cleanup function
//     return () => {
//       map.remove();
//     };
//   }, [from, to]);

//   return (
//     <div>
//       <div id="map" style={{ height: '50vh', width: '100%' }}></div>
//       {/* {distance && duration && (
//         <div>
//           <p>Distance: {distance} km</p>
//           <p>Duration: {duration} mins</p>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default MapPage;

// import React, { useEffect, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
// import 'leaflet-routing-machine';

// const MapPage = ({ from, to }) => {
//   const [distance, setDistance] = useState(null);
//   const [duration, setDuration] = useState(null);

//   useEffect(() => {
//     // Initialize map
//     const map = L.map('map', {
//       center: [12.9716, 77.5946], // Default center, adjust if necessary
//       zoom: 7, // Adjust zoom level for better visibility of the route
//     });

//     // Add OpenStreetMap tile layer
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors',
//       maxZoom: 18,
//     }).addTo(map);

//     // Geocoding locations to get latitude and longitude
//     const geocodeLocation = async (location) => {
//       try {
//         const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`);
//         const data = await response.json();
//         if (data.length > 0) {
//           return [data[0].lat, data[0].lon];
//         }
//         console.error(`No geocoding results for location: ${location}`);
//         return null;
//       } catch (error) {
//         console.error(`Geocoding error for location: ${location}`, error);
//         return null;
//       }
//     };

//     const addRoute = async () => {
//       const fromCoords = await geocodeLocation(from);
//       const toCoords = await geocodeLocation(to);

//       if (fromCoords && toCoords) {
//         const control = L.Routing.control({
//           waypoints: [
//             L.latLng(fromCoords[0], fromCoords[1]),
//             L.latLng(toCoords[0], toCoords[1]),
//           ],
//           routeWhileDragging: true,
//         }).addTo(map);

//         control.on('routesfound', (e) => {
//           const routes = e.routes;
//           const summary = routes[0].summary;
//           setDistance((summary.totalDistance / 1000).toFixed(2)); // Convert to kilometers
//           setDuration((summary.totalTime / 60).toFixed(2)); // Convert to minutes
//         });
//       } else {
//         console.error('Could not geocode one or both locations');
//       }
//     };

//     addRoute();

//     // Cleanup function
//     return () => {
//       map.remove();
//     };
//   }, [from, to]);

//   return (
//     <div>
//       <div id="map" style={{ height: '50vh', width: '100%' }}></div>
//       {distance && duration && (
//         <div>
//           <p>Distance: {distance} km</p>
//           <p>Duration: {duration} mins</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MapPage;


// import React, { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import axios from "axios";

// const MapPage = ({ from, to }) => {
//   const [coordinates, setCoordinates] = useState([]);
//   const [busStops, setBusStops] = useState([]);

//   useEffect(() => {
//     if (from && to) {
//       fetchRouteCoordinates(from, to);
//     }
//   }, [from, to]);

//   const fetchRouteCoordinates = async (from, to) => {
//     try {
//       const response = await axios.get("http://localhost:3000/api/route", {
//         params: { from, to },
//       });
//       const { routeCoordinates, busStops } = response.data;
//       setCoordinates(routeCoordinates);
//       setBusStops(busStops);
//     } catch (error) {
//       console.error("Error fetching route coordinates:", error);
//     }
//   };

//   const mapCenter = coordinates.length > 0 ? coordinates[0] : [51.505, -0.09];

//   return (
//     <MapContainer center={mapCenter} zoom={13} style={{ height: "400px", width: "100%" }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {coordinates.length > 0 && (
//         <Polyline positions={coordinates} color="blue" />
//       )}
//       {busStops.length > 0 &&
//         busStops.map((stop, index) => (
//           <Marker key={index} position={stop}>
//             <Popup>
//               Bus Stop {index + 1}
//             </Popup>
//           </Marker>
//         ))}
//     </MapContainer>
//   );
// };

// export default MapPage;

// import React, { useEffect, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
// import 'leaflet-routing-machine';

// const MapPage = ({ from, to }) => {
//   const [distance, setDistance] = useState(null);
//   const [duration, setDuration] = useState(null);

//   useEffect(() => {
//     // Initialize map
//     const map = L.map('map', {
//       center: [12.9716, 77.5946], // Default center, adjust if necessary
//       zoom: 7, // Adjust zoom level for better visibility of the route
//     });

//     // Add OpenStreetMap tile layer
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors',
//       maxZoom: 18,
//     }).addTo(map);

//     // Geocoding locations to get latitude and longitude
//     const geocodeLocation = async (location) => {
//       const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`);
//       const data = await response.json();
//       if (data.length > 0) {
//         return [data[0].lat, data[0].lon];
//       }
//       return null;
//     };

//     const addRoute = async () => {
//       const fromCoords = await geocodeLocation(from);
//       const toCoords = await geocodeLocation(to);

//       if (fromCoords && toCoords) {
//         const control = L.Routing.control({
//           waypoints: [
//             L.latLng(fromCoords[0], fromCoords[1]),
//             L.latLng(toCoords[0], toCoords[1]),
//           ],
//           routeWhileDragging: true,
//         }).addTo(map);

//         control.on('routesfound', (e) => {
//           const routes = e.routes;
//           const summary = routes[0].summary;
//           setDistance((summary.totalDistance / 1000).toFixed(2)); // Convert to kilometers
//           setDuration((summary.totalTime / 60).toFixed(2)); // Convert to minutes
//         });
//       }
//     };

//     addRoute();

//     // Cleanup function
//     return () => {
//       map.remove();
//     };
//   }, [from, to]);

//   return (
//     <div>
//       <div id="map" style={{ height: '50vh', width: '100%' }}></div>
//       {distance && duration && (
//         <div>
//           <p>Distance: {distance} km</p>
//           <p>Duration: {duration} mins</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MapPage;



// import React, { useEffect, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
// import 'leaflet-routing-machine';

// const MapPage = () => {
//   const [distance, setDistance] = useState('');

//   useEffect(() => {
//     // Initialize map
//     const map = L.map('map', {
//       center: [12.9716, 77.5946], // Bangalore coordinates
//       zoom: 7, // Adjust zoom level for better visibility of the route
//     });

//     // Add OpenStreetMap tile layer
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors',
//       maxZoom: 18,
//     }).addTo(map);

//     // Add routing control
//     const control = L.Routing.control({
//       waypoints: [
//         L.latLng(12.9716, 77.5946), // Bengaluru coordinates
//         L.latLng(11.6643, 78.1460)  // Salem, Tamil Nadu coordinates
//       ],
//       routeWhileDragging: true
//     }).addTo(map);

//     control.on('routesfound', function(e) {
//       const routes = e.routes;
//       const summary = routes[0].summary;
//       const distanceInKm = (summary.totalDistance / 1000).toFixed(2); // Convert meters to kilometers
//       setDistance(`Distance: ${distanceInKm} km`);
//     });

//     // Cleanup function
//     return () => {
//       map.remove();
//     };
//   }, []);

//   return (
//     <div>
//       <div id="map" style={{ height: '50vh', width: '600px' }}>
//         {/* Map container */}
//       </div>
//       <div>
//         <p>{distance}</p>
//       </div>
//     </div>
//   );
// };

// export default MapPage;

import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';

const MapPage = ({ from, to }) => {
  useEffect(() => {
    // Initialize map
    const map = L.map('map', {
      center: [12.9716, 77.5946], // Default center, you can adjust this
      zoom: 7, // Adjust zoom level for better visibility of the route
    });

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map);

    // Geocoding locations to get latitude and longitude
    const geocodeLocation = async (location) => {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`);
      const data = await response.json();
      if (data.length > 0) {
        return [data[0].lat, data[0].lon];
      }
      return null;
    };

    const addRoute = async () => {
      const fromCoords = await geocodeLocation(from);
      const toCoords = await geocodeLocation(to);

      if (fromCoords && toCoords) {
        L.Routing.control({
          waypoints: [
            L.latLng(fromCoords[0], fromCoords[1]),
            L.latLng(toCoords[0], toCoords[1]),
          ],
          routeWhileDragging: true,
        }).addTo(map);
      }
    };

    addRoute();

    // Cleanup function
    return () => {
      map.remove();
    };
  }, [from, to]);

  return (
    <div id="map" style={{ height: '50vh', width: '100%' }}>
     
    </div>
  );
};

export default MapPage;