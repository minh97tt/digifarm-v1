
type HeroProps = {
  coverImage: string;
  title: string;
  description: string;
};

export default function Hero({ coverImage, title, description }: HeroProps) {
  return (
    <section className="debug relative rounded-2xl mb-8 overflow-hidden bg-green-200">
      <img src={coverImage} alt="Cover" className="w-full h-auto block" />
      <div className="absolute inset-0 flex flex-col justify-center p-8 bg-white/70">
        <h2 className="text-amber-500 text-2xl font-bold mb-4">{title}</h2>
        <p className="max-w-3xl">
          {description}
        </p>
      </div>
    </section>
  );
}