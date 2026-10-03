"use client"

import { columns, type Produto } from "./produtoos/columns"
import axios from "axios"
import { DataTable } from "./produtoos/data-table"
import { useState, useEffect } from "react"

const Tabela = () => {
      const [produtos, setProdutos] = useState<Produto[]>([])
      useEffect(() => {
        
            const buscarProdutos = async () => {

            const res = await axios.get(
                "http://localhost:5258/api/produto"
            )

            setProdutos(res.data)
        }

        buscarProdutos()
      }, [])
    return(
        <div className="rounded-md m-4 overflow-hidden max-w-[1000px] pl-5">
             <DataTable
            columns={columns}
            data={produtos}
            />
            </div>
    )



}

export default Tabela
    //  <DataTable
    //         columns={columns}
    //         data={produtos}
    //     />