"use client"

import { columns, type Produto } from "./produtoos/columns"
import axios from "axios"
import { DataTable } from "./produtoos/data-table"
import { useEffect, useState } from "react"
const Carde = () => {
    const [qnt, setqnt] = useState(0)
    const [nome, setNome] = useState<String[]>([])
    const [ok, setOK] = useState(0)
    const [cr, setcr] = useState(0)
    const [atencao, setat] = useState(0)
      const [produtos, setProdutos] = useState<Produto[]>([])
    useEffect(() => {
        
        const api_qnt = async () => {
            const res = await axios.get("http://localhost:5258/api/produto/quantidade")
            const qntdata = res.data
            setqnt(qntdata)
        }
        const api_nomes = async () => {
            interface Iproduto  {
                estoque: number,
                id: number,
                nome: String,
                preco: Number,
                min: number,
                status: string
            }
            const res = await axios.get("http://localhost:5258/api/produto")
            const produtos: Iproduto[] = res.data
            console.log(produtos)
            setNome(produtos.map((produto) => produto.nome))
            
        }
        const api_ok = async () => {
            const res = await axios.get("http://localhost:5258/api/produto/ok")
            const lista = res.data
            setOK(lista.length)
        }
        const api_criti = async() => { 
            const res = await axios.get("http://localhost:5258/api/produto/critico")
            const lista = res.data
            setcr(lista.length)
        } 
        const api_aten = async() => { 
            const res = await axios.get("http://localhost:5258/api/produto/atencao")
            const lista = res.data
            setat(lista.length)
        } 
            const buscarProdutos = async () => {

            const res = await axios.get(
                "http://localhost:5258/api/produto"
            )

            setProdutos(res.data)
        }

        buscarProdutos()
        api_qnt()
        api_ok()
        api_criti()
        api_nomes()
        api_aten()

    }, [])
    type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
]
    return(
        <div className="flex gap-10 pl-6 m-4">
        
        <div className="w-[200px]  p-7 text-left rounded-xl transition-all cursor-pointer bg-bg-hover hover:scale-110 duration-150 border border-zinc-200 dark:border-zinc-800 shadow-sm text-lg font-medium">
            quantidade: {qnt}
        </div>
        
        <div className="w-[200px]  p-7 text-left rounded-xl transition-all cursor-pointer bg-bg-hover hover:scale-110 duration-150 border border-zinc-200 dark:border-zinc-800 shadow-sm text-lg font-medium">
            Status Ok: {ok}
        </div>
        <div className="w-[200px]  p-7 text-left rounded-xl transition-all cursor-pointer bg-bg-hover hover:scale-110 duration-150 border border-zinc-200 dark:border-zinc-800 shadow-sm text-lg font-medium">
            Status Crítico: {cr}
        </div>
        <div className="w-[210px]  p-7 text-left rounded-xl transition-all cursor-pointer bg-bg-hover hover:scale-110 duration-150 border border-zinc-200 dark:border-zinc-800 shadow-sm text-lg font-medium">
            Status Atenção: {atencao}
        </div>
        <div className="flex wrap gap-5">

        </div>
       
        </div>
    )
}
        // {nome.map((n ) => <div key={n} className="w-[200px]  p-6 text-left rounded-xl transition-all cursor-pointer bg-bg-hover hover:scale-110 duration-150 border border-zinc-200 dark:border-zinc-800 shadow-sm text-lg font-medium">{n}</div>)}

export default Carde