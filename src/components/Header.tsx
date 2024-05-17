import { Link } from 'react-router-dom';
import { PageIcon } from '../../public/pageIcon/pageIcon.tsx';

type HeaderProps = {
  title: string;
  paragraph: string;
  iconSize: string;
};

export const Header: React.FC<HeaderProps> = ({
  title,
  paragraph,
  iconSize,
}) => {
  return (
    <div className="max-w-6xl w-full">
      <div className="text-left mb-8">
        <Link to="/home">
          <div className="flex items-center sm:text-left">
            <PageIcon className={`${iconSize} mr-4`} />
            <h1 className="text-6xl text-left font-bold text-gray-900 dark:text-gray-100">
              {title}
              <p className="text-2xl mt-2 mb-5 text-gray-600 dark:text-gray-400">
                {paragraph}
              </p>
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};
