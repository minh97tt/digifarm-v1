
type InfoCardProps = {
  title: string;
  data: Array<{
    label: string;
    value: string | number;
  }>;
} & React.ComponentProps<'div'>;

export default function InfoCard({ title, data, className }: InfoCardProps) {
  return (
    <div className={`bg-white rounded-[20px] border border-card-border p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-4 border-b border-green-200 pb-2">
        <h3 className="text-xl font-bold text-green-600 m-0">{title}</h3>
      </div>
      <table className="w-full border-collapse">
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index !== data.length - 1 ? 'border-b border-slate-100' : ''}>
              <td className="py-2 text-slate-600 w-2/5">{item.label}</td>
              <td className="py-2 text-right font-medium">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}