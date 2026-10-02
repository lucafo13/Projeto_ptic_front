"use client";
import axios from 'axios';
import { FormEvent, useState } from 'react';
const ApiGet = () => {
    let [nome , SetNom] = useState("")
    const input = "p-[10px] mt-[15px] border text-black"
    let [preco, SetPreco ] = useState(0.0)
    let [estoque,  SetEstoque] = useState(0)
    let [min, SetMin] = useState(0)
    
    interface Iproduto{
        id: number
        nome: string
        preco: number
        estoque: number
        min: number
        status: string
    }
 
        const submit = async (e:any) => {
            e.preventDefault()
            if(!nome || ! preco || !estoque || !min){
                alert('dnv')
                return
            }
             const pass: Iproduto = {
                id: 0,
                nome: nome,
                preco : preco,
                estoque : estoque,
                min : min,
                status: "a"
             } 
             try {
                const consulta = await axios.post("http://localhost:5258/api/Produto", pass)
                console.log(consulta.data)
             } catch (error : any) {
                console.log(error.message)
             }

        }
        return(
            
        <form onSubmit={submit} className=''>
            <input className={input} type="text" placeholder='Nome' onChange={(e) => {SetNom(e.target.value)}} />
            <br />
            <input className={input} type="number" placeholder='Preço' onChange={(e) => {SetPreco(Number(e.target.value))}} />
            <br />
            <input className={input} type="number" placeholder='Estoque' onChange={(e) => {SetEstoque(Number(e.target.value))}} />
            <br />
            <input className={input} type="number" placeholder='Min' onChange={(e) => {SetMin(Number(e.target.value))}} />
            <br />
            <br />
            <div className='flex justify-center items-center '>

            <button type="submit" className='text-center border p-[20px] w-[150px] cursor-pointer '>manda</button>
            </div>
        </form>
        )
   
}

export default ApiGet