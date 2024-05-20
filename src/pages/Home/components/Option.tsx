import { Link } from 'react-router-dom';
import React from 'react';

type OptionProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  to: string;
};

export const Option: React.FC<OptionProps> = ({
                                                Icon,
                                                title,
                                                description,
                                                to,
                                              }) => (
  <Link
    className="flex flex-col items-center justify-center p-20 bg-white rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out"
    to={to}
  >
    <Icon className="w-24 h-24 mb-4" />
    <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
      {title}
    </h3>
    <p className="text-xl text-gray-600 dark:text-gray-400">{description}</p>
  </Link>
);