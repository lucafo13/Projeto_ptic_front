"use client";
import { useState } from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";

import { FaHouse } from "react-icons/fa6";
import { FiDatabase } from "react-icons/fi";
import { LuBox } from "react-icons/lu";
import { AiOutlineApi, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const SideBat = () => {
  const aside =
    "border-r bg-bg-main border-border-light h-screen w-[256px] p-[10px] fixed top-0 left-0 gap-[30px]  flex flex-col";
  const [close, setClose] = useState(false);
  const classDiv =
    "p-[20px] w-[100%] cursor-pointer rounded-lg flex  transition-all hover:bg-zinc-300 duration-150 items-center gap-[10px] text-text-primary font-medium";
  const fecha = async () => {
    await getCurrentWindow().close();
  };
  return (
    <aside className={!close ? aside : "hidden"}>
      <div className="pl-[10px] flex g-2 ">
        <AiOutlineClose
          className="m-2 hover:bg-bg-hover rounded-full"
          onClick={() => {
            setClose(true);
          }}
        />
        <h1 className="text-[60px] border-b font-semibold tracking-wider text-text-primary border-border-light ">
          PTIC
        </h1>
      </div>
      <article className="flex flex-col pt-6 gap-[10px]">
        <Link href="/" className={classDiv}>
          <span className="flex items-center gap-[20px]">
            <FaHouse size={24} />
            <p>Dashboard</p>
          </span>
        </Link>
        <Link href="/produtos" className={classDiv}>
          <span className="flex items-center gap-[20px]">
            <FiDatabase size={24} />
            <p>Produtos</p>
          </span>
        </Link>
        <div className={classDiv}>
          <span className="flex items-center gap-[20px]">
            <LuBox size={24} />
            <p>Estoque</p>
          </span>
        </div>
        <div className={classDiv}>
          <span className="flex items-center gap-[20px]">
            <AiOutlineApi size={24} />
            Api
          </span>
        </div>
      </article>
      <article className="border-t border-border-light   flex mt-auto pt-[10px]">
        <div className={classDiv} onClick={fecha}>
          <span className="flex items-center gap-[10px]">
            <AiOutlineClose size={24} />
            Fechar
          </span>
        </div>
      </article>
    </aside>
  );
};
export default SideBat;
