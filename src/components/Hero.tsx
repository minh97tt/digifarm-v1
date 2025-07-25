
import Navigation from "./Navigation";

type HeroProps = {
  coverImage: string;
  icon?: React.FunctionComponent<any>;
  title?: string;
  description?: string;
};

export default function Hero({ coverImage, icon: Icon, title, description }: HeroProps) {
  return (
    <section className="relative border-none flex flex-col items-center z-0 overflow-hidden">
      <div
        style={{ backgroundImage: `url(${coverImage})` }}
        className="w-full md:h-50 h-32 bg-cover bg-center absolute top-0 z-0"
      >
        <div className="absolute bottom-0 md:h-34 h-20 w-full bg-gradient-to-b to-white from-white/0" />
      </div>
      <div className="md:my-7 mt-6 mb-12 z-1">
        {Icon && <Icon className='w-40 h-12 md:w-auto md:h-auto md:max-w-70' />}
      </div>

      <Navigation />
    </section>
  );
}