import { ServiceInclude } from "@/types";

export const ServiceIncludeItem = ({ item }: { item: ServiceInclude }) => {
  const Icon = item.icon;
  return (
    <div className="text-center">
      <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
      <h3 className="font-semibold mb-2">{item.title}</h3>
      <p className="text-muted-foreground">{item.description}</p>
    </div>
  );
};