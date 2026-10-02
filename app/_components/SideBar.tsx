"use client"
import { useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { FiDatabase } from "react-icons/fi";
import { LuBox } from "react-icons/lu";
import { AiOutlineApi, AiOutlineClose } from "react-icons/ai";


const SideBat = () => {
    const classDiv = "p-[20px] w-[100%] cursor-pointer rounded-lg flex  transition-all hover:bg-bg-hover "
    return(
        <aside className="border-r bg-bg-main border-border-light h-screen w-[17%] p-[10px] fixed top-0 left-0 gap-[30px]  flex flex-col">
            <div className="pl-[10px]">
                <h1 className="text-[60px] border-b font-semibold tracking-wider text-text-primary border-border-light ">PTIC</h1>
            </div>
            <article className="flex flex-col pt-6 gap-[10px]">
                <div className={classDiv}>
                    <span className="flex items-center gap-[20px]">
                    <FaHouse size={24}/>
                    <p>Dashboard</p>
                    </span>
                </div>
                <div className={classDiv}>
                    <span className="flex items-center gap-[20px]">
                    <FiDatabase size={24}/>
                    <p>
                        Produtos
                    </p>
                    </span>

                </div>
                <div className={classDiv}>
                    <span className="flex items-center gap-[20px]">
                        <LuBox size={24}/>
                        <p>Estoque</p>
                    </span>

                </div>
                <div className={classDiv}>
                    <span className="flex items-center gap-[20px]">
                        <AiOutlineApi size={24}/>
                        Api
                    </span>

                </div>
          
            </article>
            <article className="border-t border-border-light   flex mt-auto pt-[10px]">
                 <div className={classDiv}>
                    <span className="flex items-center gap-[10px]">
                        <AiOutlineClose size={24}/>
                        Fechar
                    </span>

                </div>
            </article>
        </aside>
    )
}
export default SideBat