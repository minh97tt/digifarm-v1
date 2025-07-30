import ArrowRight from '../assets/ArrowRight.svg'

type InfoCardProps = {
  title: string
  icon?: React.ReactNode
  data: {
    title?: string
    items: {
      label: string
      value: string | number | React.ReactNode
    }[]
  }[]
  link?: {
    label: string
    href: string
  }
} & React.ComponentProps<'div'>

export default function InfoCard({
  title,
  icon,
  data,
  link,
  className,
}: InfoCardProps) {
  return (
    <div
      className={`bg-white rounded-[20px] border border-card-border p-6 ${className}`}
    >
      <div className="flex items-center gap-2 mb-4 border-b border-card-border pb-4">
        {icon}
        <h3 className="text-xl font-bold text-text-primary m-0 ml-2">
          {title}
        </h3>
      </div>
      <table className="w-full border-collapse">
        <tbody>
          {data.map((item, parentIndex) => (
            <>
              {item.title && (
                <tr>
                  <td className="py-2 text-text-label-primary font-bold text-[#202020]">
                    {item.title}
                  </td>
                </tr>
              )}
              {item.items.map(({ label, value }, index) => (
                <tr key={`${parentIndex}-${index}`} className="align-top">
                  <td className="py-2 text-text-label-secondary w-2/5">
                    {label}
                  </td>
                  <td className="py-1 text-text-content text-right font-medium">
                    {value}
                  </td>
                </tr>
              ))}
              {parentIndex !== data.length - 1 && (
                <tr>
                  <td colSpan={2} className="py-2">
                    <hr className="border-card-border" />
                  </td>
                </tr>
              )}
            </>
          ))}
          {link && (
            <tr>
              <td
                colSpan={2}
                className="py-2 text-text-content text-right font-medium"
              >
                <a href={link.href} className="text-[#1677FF]">
                  {link.label}{' '}
                  <img
                    src={ArrowRight}
                    alt="ArrowUp"
                    className="w-[16px] inline"
                  />
                </a>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
