import { Card, CardContent } from '../../@/components/ui/card.tsx';
import React from 'react';
import { Button } from '../../@/components/ui/button.tsx';

type Item = {
  name: string;
  description: string;
};

type RecentItemsProps = {
  items: Item[];
  title: string;
};

export const RecentItems: React.FC<RecentItemsProps> = ({ items, title }) => {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {items.map((item, index) => (
          <Card
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden animate-fade-in-up-delay"
          >
            <CardContent className="p-10 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-medium text-gray-900">
                  {item.name}
                </h3>
                <p className="text-xl text-gray-600">{item.description}</p>
              </div>
              <Button variant="link">
                <span className="text-xl">View Details</span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
