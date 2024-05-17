// ProgressSection.tsx
import React from 'react';

type ProgressSectionProps = {
  value: number;
  max: number;
};

export const Footer: React.FC<ProgressSectionProps> = ({ value, max }) => (
  <div className="flex flex-col items-center justify-center">
    <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
      Lost Items Found
    </h2>
    <div className="w-full max-w-md">
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gray-950"
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
      <p className="text-gray-600 text-xl dark:text-gray-400 mt-4 text-center">
        {value}% of lost items have been found.
      </p>
    </div>
  </div>
);
