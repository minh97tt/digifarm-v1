import { useNavigate } from "react-router-dom";

export function BreadCrumb(props: {
  breadCrumbList: {
    title: string;
    link?: string;
    active?: boolean
  }[];
}) {
  const { breadCrumbList } = props;
  const navigate = useNavigate()

  return (
    <div className="fixed md:top-3 md:ml-10 md:px-[10px] md:py-2 top-2 max-md:right-2 px-2 py-1 bg-black/30 rounded-xl z-999 text-white">
      <div className="flex flex-row items-center">
        {breadCrumbList.map((item, index) => (
          <div key={item.title} onClick={
            () => {
              if (item.link) navigate(item.link, { viewTransition: true })
            }
          } className={`${item.link ? 'cursor-pointer' : ''}`}>
            <span className={`text-sm text-text-secondary mr-1 ${item.active ? 'font-semibold' : ''}`}>
              {index === breadCrumbList.length - 1 ? item.title : `${item.title}  /`}
            </span>
          </div>
        ))}
      </div>
    </div >
  )
}