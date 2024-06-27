interface TextColumnProps {
  title: string;
  subTitle: string;
  text: string;
}

export default function TextColumn({ title, text, subTitle }: TextColumnProps) {
  return (
    <div className="mx-5 text-left">
      <h2 className="text-6xl text-subtext mb-2">{title}</h2>
      <h3 className="text-2xl font-bold mb-2">{subTitle}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
