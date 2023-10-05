// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [dogData, setDogData] = useState({ name: '', imageUrl: ''});

//   const getRandomBreed = () => {
//     const breeds = ['golden retriever', 'labrador', 'german shepherd', 'poodle', 'bulldog', 'boxer', 'beagle'];
//     const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
//     return randomBreed;
//   };

//   const fetchData = () => {
//     const breedName = getRandomBreed();
//     fetch(`https://api.api-ninjas.com/v1/dogs?name=${breedName}`, {
//       headers: {
//         'X-Api-Key': 'jmMimSwMPqZphdBPG6zZ5g==zpzfQwRCVZ7NQ8zj'
//       }
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         if (data && data.length > 0) {
//           const breedInfo = data[0];
//           setDogData({
//             name: breedInfo.name,
//             imageUrl: breedInfo.image_link,
//           });
//         } else {
//           throw new Error('Dog breed not found');
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching dog data:', error);
//       });
//   };

//   return (
//     <div className="App">
//       <h1>{dogData.name}</h1>
//       <img src={dogData.imageUrl} alt='Dog' />
//       <button onClick={fetchData}>Get Random Dog Breed!</button>
//     </div>
//   );
// }

// export default App;
