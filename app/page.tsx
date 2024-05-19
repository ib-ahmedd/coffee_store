import { About, Buy, Featured, Intro, Reviews } from "./components";

function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Intro />
      <About />
      <Featured />
      <Reviews />
      <Buy />
    </main>
  );
}

export default Home;
