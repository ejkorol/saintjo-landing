import Image from "next/image";

const Home = () => {
  return (
    <main className="flex items-center justify-center text-center h-svh w-full bg-hero bg-cover bg-center bg-no-repeat">
      <section className="flex flex-col items-center justify-center h-svh w-full backdrop-brightness-50">
        <Image
          src="/logos/logo.png"
          className="absolute top-0 mt-16 w-[173px] md:h-[45px] md:w-[346px]"
          alt="saint jo"
          width={346}
          height={45}
        />
        <h1 className="font-americana uppercase text-4xl md:text-8xl text-white tracking-widest">
          coming soon
        </h1>
      </section>
    </main>
  );
};

export default Home;
