// import  { useState } from 'react';
// import { Button } from "../../../../@/components/ui/button";
// import { ArrowLeftIcon } from '../../../../public/itemIcons/itemIcons.tsx';
// import { Link } from 'react-router-dom';
//
//
// export function ItemActions() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//
//   const handleButtonClick = () => {
//     setIsModalOpen(true);
//   };
//
//   return (
//     <div className="mt-6 flex justify-between items-center">
//       <Link className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" to="/home/logs">
//         <ArrowLeftIcon className="h-5 w-5 mr-2" />
//         Back
//       </Link>
//       <div className="flex gap-2 items-center">
//         <Button
//           className="bg-gray-950 text-stone-50 text-base transition-colors duration-500 ease-in-out transform hover:bg-gray-800"
//           variant="primary"
//           onClick={handleButtonClick}
//         >
//           Claim Item
//         </Button>
//         <ClaimModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//       </div>
//     </div>
//   );
// }