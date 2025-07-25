
type InfoCardProps = {
  title: string;
  icon?: React.ReactNode;
  data: Array<{
    label: string;
    value: string | number;
  }>;
} & React.ComponentProps<'div'>;

export default function InfoCard({ title,icon, data, className }: InfoCardProps) {
  return (
    <div className={`bg-white rounded-[20px] border border-card-border p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-4 border-b border-card-border pb-4">
        {icon}
        <h3 className="text-xl font-bold text-text-primary m-0 ml-2">{title}</h3>
      </div>
      <table className="w-full border-collapse">
        <tbody>
          {data.map((item, index) => (
            <tr key={index} >
              <td className="py-2 text-text-label-secondary w-2/5">{item.label}</td>
              <td className="py-2 text-text-content text-right font-medium">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}