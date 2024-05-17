// import { ItemInfo } from './components/ItemInfo';
// import { ItemLocation } from './components/ItemLocation';
// import { ItemImage } from './components/ItemImage';
// import { ItemMap } from './components/ItemMap';
// import { ItemActions } from './components/ItemsActions';
//
//
// export default function ItemDetail() {
//   // You would normally fetch these details based on the item id
//   const itemDetails = {
//     title: 'Lost Cat',
//     description: 'Tabby cat, 3 years old, last seen on Main Street.',
//     phone: '555-1234',
//     location: '123 Main St, Anytown USA',
//     email: 'owner@email.com',
//     dateReported: 'Reported on: April 15, 2023',
//     imageSrc: '../../../placeholderImg.svg',
//     mapSrc: '../../../placeholderImg.svg',
//   };
//
//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="flex-1  tbg-gray-100 dark:bg-gray-900 p-4 md:p-6">
//         <div className="container mt-8 mx-auto max-w-4xl max-h-5xl">
//           <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
//             <ItemInfo
//               title={itemDetails.title}
//               description={itemDetails.description}
//               phone={itemDetails.phone}
//             />
//             <ItemLocation
//               location={itemDetails.location}
//               email={itemDetails.email}
//               dateReported={itemDetails.dateReported}
//             />
//             <ItemImage src={itemDetails.imageSrc} />
//             <ItemMap src={itemDetails.mapSrc} />
//             <ItemActions />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }