import { CheckCircle2 } from "lucide-react";

export const FeatureItem = ({ feature }: { feature: string }) => (
  <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-lg">
    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
    <span>{feature}</span>
  </div>
);