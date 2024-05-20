import { FC, SVGProps } from 'react';

interface ItemCardProps {
  Icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  reportDate: string;
}

const ItemCard: FC<ItemCardProps> = ({ Icon, title, reportDate }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-zinc-50 p-4 dark:bg-gray-700">
      <Icon className="mb-2 h-10 w-24 text-gray-[25252525] dark:text-gray-400" />
      <h3 className="text-base font-medium text-gray-[25252525] dark:text-gray-50 sm:text-lg md:text-xl">
        {title}
      </h3>
      <p className="mt-1 text-3xl text-gray-500 dark:text-gray-400 sm:text-base">
        Reported on {reportDate}
      </p>
    </div>
  );
};

interface ReportedItemsProps {
  title: string;
  items: Array<ItemCardProps>;
}

const ReportedItems: FC<ReportedItemsProps> = ({ title, items }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-sm p-8 dark:bg-gray-800">
      <h2 className="text-2xl text-center font-bold mb-4 dark:text-gray-[25252525] sm:text-2xl md:text-3xl">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-8 sm:gap-6 md:gap-8">
        {items.map((item, index) => (
          <ItemCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export { ReportedItems, ItemCard };
