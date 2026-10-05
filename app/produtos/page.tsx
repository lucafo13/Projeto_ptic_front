import SideBat from "../_components/SideBar";
import { TituloPR, Title } from "../_components/Title";
import { Produtos } from "../_components/productRender";
const Rota = () => {
    return(
         <main className="flex gap-5 w-full min-h-screen" >
      <div className="w-64 shrink-0">
    <SideBat />

      </div>
      <div className="flex-1">
        <TituloPR />
    <Produtos />
      </div>
    </main>
    )
}
export default Rota




