import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

interface TableProps {
  data: string[];
}
const Table = ({ data }: TableProps) => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="max-h-72 overflow-y-scroll">
      <table className="min-w-full divide-y">
        <thead className="bg-gray-900">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
              Episodes
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-500">
          {data.slice(0, showAll ? data.length : 3).map((link, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <a href={link} target="_blank" rel="noreferrer">
                  {link}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.length > 3 && (
        <button
          className="block mx-auto mt-4 text-sm font-medium text-gray-700 focus:outline-none dark:text-white"
          onClick={handleToggle}
        >
          <ChevronDownIcon
            className={`w-4 h-4 inline-block ${showAll ? 'transform rotate-180' : ''}`}
          />
          <span className="ml-2">{showAll ? 'Show Less' : 'Show More'}</span>
        </button>
      )}
    </div>
  );
};

export default Table;
