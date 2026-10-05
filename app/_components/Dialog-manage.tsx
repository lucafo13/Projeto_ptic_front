"use client";
import { FormEvent, useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Dialogo = ({ abre, setAbre }: any) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [estoque, setEstoque] = useState(0);
  const [min, setMin] = useState(0);
  const Api = async (e: FormEvent) => {
    e.preventDefault();
    try {
      interface Ip {
        id: number;
        nome: string;
        preco: number;
        estoque: number;
        min: number;
        status: string;
      }
      const obj: Ip = {
        id: 0,
        nome: nome,
        preco: preco,
        estoque: estoque,
        min: min,
        status: "a",
      };
      const res = await axios.post("http://localhost:5258/api/produto", obj);
      const resposta = res.data;
      console.log(resposta);
      return resposta;
    } catch (error) {
      throw new Error("erro");
    } finally{
      setAbre(false)
      location.reload()
    }
  };
  return (
    <Dialog open={abre} onOpenChange={setAbre}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastre o produto</DialogTitle>
          {/* <DialogDescription> */}
          <form action="" className="flex flex-col gap-2 mt-2" onSubmit={Api}>
            <label htmlFor="Nome">Digite o nome do produto:</label>
            <input
              onChange={(event) => {
                setNome(event.target.value);
              }}
              type="text"
              placeholder="Nome"
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-bg-hover"
            />
            <br />
            <label htmlFor="Preço">Digite o preço do produto:</label>

            <input
              onChange={(event) => {
                setPreco(Number(event.target.value));
              }}
              type="text"
              placeholder="Preço"
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-bg-hover"
            />
            <br />
            <label htmlFor="Estoque">Digite o estoque do produto:</label>

            <input
              onChange={(event) => {
                setEstoque(Number(event.target.value));
              }}
              type="text"
              placeholder="Estoque"
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-bg-hover"
            />
            <br />
            <label htmlFor="Min">Digite o mínimo de estoque do produto:</label>

            <input
              onChange={(event) => {
                setMin(Number(event.target.value));
              }}
              type="text"
              placeholder="Mínimo"
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-bg-hover"
            />
            <br />
            <button
              type="submit"
              className="border p-2 mt-2 cursor-pointer hover:bg-bg-hover duration-200"
            >
              Enviar
            </button>
          </form>
          {/* </DialogDescription> */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export const Dialogo_remover = ({abreR, setAbreR}: {abreR: boolean; setAbreR: (abre: boolean) => void}) => {
  const [id, setId] = useState(0);
  const api = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const res = await axios.delete(`http://localhost:5258/api/produto/${id}`);
      const resposta = res.data;
      return resposta;
    } catch (error) {
      return error;
    } finally {
      setAbreR(false)
      location.reload()
    }
  };
  return (
    <>
      <Dialog open={abreR} onOpenChange={setAbreR }>
       
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Excluir</DialogTitle>
            {/* <DialogDescription> */}
            <form action="" className="flex flex-col gap-2 mt-2" onSubmit={api}>
              <label htmlFor="Preço">Digite o id do produto:</label>

              <input
                onChange={(event) => {
                  setId(Number(event.target.value));
                }}
                type="text"
                placeholder="Id"
                className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-bg-hover"
              />
              <br />

              <button
                type="submit"
                className="border p-2 mt-2 cursor-pointer hover:bg-bg-hover duration-200"
              >
                Enviar
              </button>
            </form>
            {/* </DialogDescription> */}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const Dialogo_C = ({ abreC, setAbreC }: { abreC: boolean; setAbreC: (abre: boolean) => void }) => {
  const [id, setId] = useState(0);
  const [est, setEst] = useState(0);
  const [add, setAdd] = useState(false);
  const api = async (evento: FormEvent) => {
    evento.preventDefault();
    try {
      const res = await axios.patch(
        `http://localhost:5258/api/produto/estoque/${id}`,
        est,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const resposta = res.data;
      return resposta;
    } catch (error) {
      return error;
    }
    finally{
      setAbreC(false)
      location.reload()
    }
  };
  const apiR = async (evento: FormEvent) => {
    evento.preventDefault();
    try {
      const res = await axios.delete(
        `http://localhost:5258/api/produto/estoque/${id}`,
        {
          data: est,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const resposta = res.data;
      return resposta;
    } catch (error) {
      return error;
    } finally{
      setAbreC(false)
      location.reload()
    }
  };
  return (
    <Dialog open={abreC} onOpenChange={setAbreC}>
      
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Estoque</DialogTitle>
          {/* <DialogDescription> */}
          <form
            action=""
            className="flex flex-col gap-2 mt-2"
            onSubmit={add ? api : apiR}
          >
            <label htmlFor="Preço">Digite o id do produto:</label>

            <input
              onChange={(event) => {
                setId(Number(event.target.value));
              }}
              type="text"
              placeholder="Id"
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-bg-hover"
            />
            <br />
            <label htmlFor="Preço">Digite a quantidade:</label>

            <input
              onChange={(event) => {
                setEst(Number(event.target.value));
              }}
              type="text"
              placeholder="Quantidade"
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-bg-hover"
            />

            <div className="flex gap-2 w-full">
              <button
                type="submit"
                onClick={() => {
                  setAdd(true);
                }}
                className="border w-[50%] p-2 mt-2 cursor-pointer hover:bg-bg-hover duration-200"
              >
                Adicionar
              </button>
              <button
                onClick={() => {
                  setAdd(false);
                }}
                type="submit"
                className="border p-2 mt-2  w-[50%] cursor-pointer hover:bg-bg-hover duration-200"
              >
                Remover
              </button>
            </div>
          </form>
          {/* </DialogDescription> */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export const Dialogo_E = ({ abreE, setAbreE }: { abreE: boolean; setAbreE : (abreE: boolean) => void }) => {
  const [id, setId] = useState(0);
  
  const api = async (evento: FormEvent) => {
    evento.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5258/api/produto/status/${id}`)
     
      const resposta = res.data;
      return resposta;
    } catch (error) {
      return error;
    }finally {
      setAbreE(false)
      location.reload()
    }
  };
  return (
    <Dialog open={abreE} onOpenChange={setAbreE}>
      
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Checagem</DialogTitle>
          {/* <DialogDescription> */}
          <form
            action=""
            className="flex flex-col gap-2 mt-2"
            onSubmit={api}
          >
            <label htmlFor="Preço">Digite o id do produto:</label>

            <input
              onChange={(event) => {
                setId(Number(event.target.value));
              }}
              type="text"
              placeholder="Id"
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-bg-hover"
            />
            <br />
           
              <button
                type="submit"
               
                className="border w-[50%] p-2 mt-2 cursor-pointer hover:bg-bg-hover duration-200"
              >
                Checar
              </button>
           
          </form>
          {/* </DialogDescription> */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
