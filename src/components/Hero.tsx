
type HeroProps = {
  coverImage: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
};

export default function Hero({ coverImage, icon, title, description }: HeroProps) {
  return (
    <section className="relative z-0 overflow-hidden bg-green-200">
      <img src={coverImage} alt="Cover" className="w-full h-auto block" />
      <div className="absolute inset-0 items-center flex flex-col pt-4 mb-6 lg:pt-13">
          {icon}
      </div>
      <div className="absolute bottom-0 h-40 w-full bg-linear-gradient-to-t from-white to-white/1" />
    </section>
  );
}