
import Navigation from "./Navigation";

import farmVideo from '../assets/videos/farm-vid.mp4'


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
        <video
          src={farmVideo}
          autoPlay
          loop
          muted
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="md:my-7 mt-8 mb-10 z-1">
        {Icon && <Icon className='w-40 h-12 md:w-auto md:h-auto md:max-w-70' />}
      </div>
      <div className="md:h-20 h-0" />
      {/* <Navigation /> */}
    </section>
  );
}