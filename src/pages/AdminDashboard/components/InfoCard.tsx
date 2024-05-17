// InfoCard.js
import { CardTitle, CardHeader, CardContent, Card } from "../../../../@/components/ui/card";

export function InfoCard({ title, icon, children }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-2xl font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}