import { About, Featured, Intro, Reviews } from "./components";

function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Intro />
      <About />
      <Featured />
      <Reviews />
    </main>
  );
}

export default Home;
