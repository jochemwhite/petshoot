import { LucideIcon } from "lucide-react";

export const InfoCard = ({ icon: Icon, title, value }: { icon: LucideIcon; title: string; value: string }) => (
  <div className="bg-card p-6 rounded-lg shadow-lg text-center">
    <Icon className="w-8 h-8 mx-auto mb-4 text-primary" />
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-2xl font-bold text-primary">{value}</p>
  </div>
);
