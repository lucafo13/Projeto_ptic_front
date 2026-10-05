  "use client";
  import Carde from "./Divs";
  import { Dialogo, Dialogo_remover, Dialogo_C, Dialogo_E} from "./Dialog-manage";
  import { FaCheck } from "react-icons/fa";
  import { Chart } from "./chart";
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";
  import { useState } from "react";
  import { IoMdAdd, IoMdTrash } from "react-icons/io";
  import Tabela from "./Tabela";

export  const Title = () => {
      const [abre, setAbre] = useState(false)
      const [abreR, setAbreR] = useState(false)
      const [abreC, setAbreC] = useState(false)
      const [abreE, setAbreE] = useState(false)
      const a = async () => {
        await await 1 + 1
        return await await await await 10
      }
    return (
      <div>
      
        <div>
          <div className="p-10">

          <h1 className="text-4xl">Aplicação de controle de estoque  </h1>
          <br />
          <div className="pr-5 text-l">

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab natus asperiores aperiam voluptatibus consequatur ratione eaque quod temporibus impedit placeat repudiandae quam vel sit vero, rem officia vitae dicta illum!</p>
          </div>
          </div>
          <Dialogo_C abreC={abreC} setAbreC={setAbreC}/>
          <Dialogo_remover abreR={abreR} setAbreR={setAbreR} />
          <Dialogo abre={abre} setAbre={setAbre} />
          <Dialogo_E abreE={abreE} setAbreE={setAbreE}/>
          <Carde/>
          <br/>
          <div className="flex  gap-[20px] items-stretch pr-5">
        <div className="flex-1 min-w-[50%] h-full">

          <Tabela/>
        </div>
        <div className="flex-1 min-w-[30%]">

          <Chart/>
        </div>
          </div>
          <div className="flex gap-16 mt-5 pl-7 items-center">
              <HoverCard >
            <HoverCardTrigger >
              <button onClick={() => {setAbre(true)}} className="w-[220px]  p-6 h-[135px] text-left rounded-xl transition-all cursor-pointer bg-bg-hover hover:scale-110 duration-150 border border-zinc-200 dark:border-zinc-800 shadow-sm text-lg font-medium">
              <div className="flex flex-col items-center text-center">
                  <h1 className="text-xl">Adicionar um Produto</h1>
                  <span className="rounded-full bg-zinc-300  p-2">
                      <IoMdAdd/>
                  </span>
              </div>
              </button>
            </HoverCardTrigger>
            
        
            <HoverCardContent className="w-96 p-6 rounded-xl bg-bg-hover border border-zinc-200 dark:border-zinc-800 shadow-md">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Adicionar produto</h4>
                <p className="text-sm text-muted-foreground">
            Adicionar  produto do banco
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Muita aura</span>
                
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
              <HoverCard >
            <HoverCardTrigger >
              <button onClick={() => {setAbreR(true)}} className="w-[220px] h-[135px] p-6 text-left rounded-xl transition-all cursor-pointer bg-bg-hover hover:scale-110 duration-150 border border-zinc-200 dark:border-zinc-800 shadow-sm text-lg font-medium">
              <div className="flex flex-col items-center text-center">
                  <h1 className="text-xl">Remover um Produto</h1>
                  <span className="rounded-full bg-zinc-300  p-2">
                      <IoMdTrash/>
                  </span>
              </div>
              </button>
            </HoverCardTrigger>
            
        
            <HoverCardContent className="w-96 p-6 rounded-xl bg-bg-hover border border-zinc-200 dark:border-zinc-800 shadow-md">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Remover Produto</h4>
                <p className="text-sm text-muted-foreground">
            Remover produto do banco
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Muita aura</span>
                
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
              <HoverCard >
            <HoverCardTrigger >
              <button onClick={() => {setAbreC(true)}} className="w-[220px] h-[135px] p-6 text-left rounded-xl transition-all cursor-pointer bg-bg-hover hover:scale-110 duration-150 border border-zinc-200 dark:border-zinc-800 shadow-sm text-lg font-medium">
              <div className="flex flex-col items-center text-center">
                  <h1 className="text-xl">Controle de estoque</h1>
                  <span className="rounded-full bg-zinc-300  p-2">
                      <FaCheck/>
                  </span>
              </div>
              </button>
            </HoverCardTrigger>
            
        
            <HoverCardContent className="w-96 p-6 rounded-xl bg-bg-hover border border-zinc-200 dark:border-zinc-800 shadow-md">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Adicionar ou remover estoque</h4>
                <p className="text-sm text-muted-foreground">
              Adiciona ou remove produto do estoque
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Muita aura</span>
                
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
              <HoverCard >
            <HoverCardTrigger >
              <button onClick={()=> {setAbreE(true)}} className="w-[220px] h-[135px]  p-6 text-left rounded-xl transition-all cursor-pointer bg-bg-hover hover:scale-110 duration-150 border border-zinc-200 dark:border-zinc-800 shadow-sm text-lg font-medium">
              <div className="flex flex-col items-center text-center">
                  <h1 className="text-xl">Checar um Produto</h1>
                  <span className="rounded-full bg-zinc-300  p-2">
                      <IoMdAdd/>
                  </span>
              </div>
              </button>
            </HoverCardTrigger>
            
        
            <HoverCardContent className="w-96 p-6 rounded-xl bg-bg-hover border border-zinc-200 dark:border-zinc-800 shadow-md">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Checa o status de Produtos ainda nao vistos</h4>
                <p className="text-sm text-muted-foreground">
              Faz uma checagem de produtos que ainda nao foram vistos
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Muita aura</span>
                
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          </div>
              
        </div>
      </div>
    );
  };
  export const TituloPR = () => {
    return (
      <header className="mb-6 border-b border-border-light px-8 py-7">
     
        <h1 className="text-3xl font-bold leading-tight text-text-primary sm:text-4xl">
          Produtos em estoque
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          Consulte e acompanhe os produtos disponíveis.
        </p>
      </header>
    )
  }

  