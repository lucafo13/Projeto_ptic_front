"use client";
import Carde from "./Divs";
import Dialogo from "./Dialog-manage";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useState } from "react";
import { IoMdAdd, IoMdTrash } from "react-icons/io";
import Tabela from "./Tabela";
const Title = () => {
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
        <Dialogo/>
        <Carde/>
        <br/>
        <Tabela/>
        <div className="flex gap-6 pl-7 items-center">
             <HoverCard >
          <HoverCardTrigger >
            <button className="w-[200px]  p-6 text-left rounded-xl transition-all cursor-pointer bg-bg-hover hover:scale-110 duration-150 border border-zinc-200 dark:border-zinc-800 shadow-sm text-lg font-medium">
             <div className="flex flex-col items-center text-center">
                <h1 className="text-xl">Adicionar Produto</h1>
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
            <button className="w-[200px]  p-6 text-left rounded-xl transition-all cursor-pointer bg-bg-hover hover:scale-110 duration-150 border border-zinc-200 dark:border-zinc-800 shadow-sm text-lg font-medium">
             <div className="flex flex-col items-center text-center">
                <h1 className="text-xl">Remover Produto</h1>
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
            <button className="w-[200px]  p-6 text-left rounded-xl transition-all cursor-pointer bg-bg-hover hover:scale-110 duration-150 border border-zinc-200 dark:border-zinc-800 shadow-sm text-lg font-medium">
             <div className="flex flex-col items-center text-center">
                <h1 className="text-xl">Adicionar Produto</h1>
                <span className="rounded-full bg-zinc-300  p-2">
                    <IoMdAdd/>
                </span>
             </div>
            </button>
          </HoverCardTrigger>
          
      
          <HoverCardContent className="w-96 p-6 rounded-xl bg-bg-hover border border-zinc-200 dark:border-zinc-800 shadow-md">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Adicionar Produto</h4>
              <p className="text-sm text-muted-foreground">
            Adiciona produto no carrinho
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Muita aura</span>
               
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
             <HoverCard >
          <HoverCardTrigger >
            <button className="w-[200px]  p-6 text-left rounded-xl transition-all cursor-pointer bg-bg-hover hover:scale-110 duration-150 border border-zinc-200 dark:border-zinc-800 shadow-sm text-lg font-medium">
             <div className="flex flex-col items-center text-center">
                <h1 className="text-xl">Adicionar Produto</h1>
                <span className="rounded-full bg-zinc-300  p-2">
                    <IoMdAdd/>
                </span>
             </div>
            </button>
          </HoverCardTrigger>
          
      
          <HoverCardContent className="w-96 p-6 rounded-xl bg-bg-hover border border-zinc-200 dark:border-zinc-800 shadow-md">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Adicionar Produto</h4>
              <p className="text-sm text-muted-foreground">
            Adiciona produto no carrinho
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
export default Title;
