import ApiGet from "./_components/ApiGet.";
import SideBat from "./_components/SideBar";
import Hero from "./_components/Hero";
const Home = () => {

  return(
    <main className="flex gap-5 w-full min-h-screen" >
      <div className="w-64 shrink-0">
    <SideBat />

      </div>
      <div className="flex-1">

    <Hero/>
      </div>
    </main>
  )
}

export default Home;
