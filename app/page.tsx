import { About, Featured, Intro } from "./components";

function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Intro />
      <About />
      <Featured />
    </main>
  );
}

export default Home;
