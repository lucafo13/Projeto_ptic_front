import ApiGet from "./_components/ApiGet.";
const Home = () => {

  return(
    <div className="flex  border justify-center p-[10px] items-center w-screen h-screen m-0 ">
      <div className=" m-auto w-[350px] border flex-col  p-[20px] flex items-center justify-center rounded shadow">

      <h1 className="text-4xl ">Hello world</h1>
      <ApiGet />
      </div>
    </div>
  )
}

export default Home;