// Table.tsx
import { TableRow } from "./TableRow.tsx";

export function Table({ data, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="w-full table-auto ">
        <thead>
          <tr className="bg-gray-100 text-gray-600 font-medium">
            <th className="px-8 py-4 text-3xl text-left">User</th>
            <th className="px-6 py-4 text-3xl text-left">Item</th>
            <th className="px-8 py-4 text-3xl text-left">Status</th>
            <th className="px-6 py-4 text-3xl text-left">Time Stamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index} data={item} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
