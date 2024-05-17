// ReportTable.tsx
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../../../@/components/ui/table";

export function ReportTable({ data }) {
  return (
    <Table className="text-xl">
      <TableHeader>
        <TableRow>
          <TableHead>Report ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Reported By</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{row.reportId}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.reportedBy}</TableCell>
            <TableCell>{row.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}