import { Card, CardContent } from '../../@/components/ui/card.tsx';
import React from 'react';

type Tip = {
  title: string;
  description: string;
};

type TipsProps = {
  tips: Tip[];
};

export const Tips: React.FC<TipsProps> = ({ tips }) => {
  return (
    <div className="mt-10 animate-fade-in-up-delay-4">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
        Tips
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip, index) => (
          <Card
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden animate-fade-in-up-delay-5"
          >
            <CardContent className="p-10 flex items-center justify-between">
              <div>
                <h3 className="text-2xl pb-2 font-medium text-gray-900">
                  {tip.title}
                </h3>
                <p className="text-xl text-gray-600">{tip.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
