"use client"
import axios from 'axios'
import { useEffect, useState } from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

interface Ip {
    id: number;
    nome: string;
    estoque: number;
    preco: number;
    min: number;
    status: string;
}

export const Produtos = () => {
    const [Produtos, setProdutos] = useState<Ip[]>([])

    useEffect(() => {
        const api = async () => {
            const res = await axios.get("http://localhost:5258/api/produto")
            const produtos = res.data as Ip[]
            setProdutos(produtos)
        }
        api()
    }, [])

    return (
        <article className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 px-8 pb-8">
            {Produtos.map((produto: Ip) => {
                const status = produto.status.toLowerCase()
                const statusColor = status.includes("crit")
                    ? "text-red-700"
                    : status.includes("aten") || status.includes("alert")
                      ? "text-amber-700"
                      : "text-emerald-700"
                const dotColor = status.includes("crit")
                    ? "bg-red-600"
                    : status.includes("aten") || status.includes("alert")
                      ? "bg-amber-500"
                      : "bg-emerald-600"
                const estoqueBaixo = produto.estoque <= produto.min
                const diferencaEstoque = produto.estoque - produto.min
                const valorEmEstoque = produto.estoque * produto.preco

                return (
                    <HoverCard key={produto.id}>
                        <HoverCardTrigger
                            render={<div tabIndex={0} />}
                            className="group flex min-h-48 cursor-default flex-col rounded-md border border-border-light bg-white p-5 text-left shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <h2 className="line-clamp-2 min-w-0 text-base font-semibold text-text-primary transition-colors group-hover:text-emerald-800">
                                    {produto.nome}
                                </h2>
                                <span className={`inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold ${statusColor}`}>
                                    <span aria-hidden="true" className={`size-2 rounded-full ${dotColor}`} />
                                    {produto.status}
                                </span>
                            </div>

                            <div className="mt-auto border-t border-border-light pt-5">
                                <div className="flex items-end justify-between gap-4">
                                    <div>
                                        <p className="text-xs text-text-secondary">Estoque atual</p>
                                        <p className={`mt-1 text-2xl font-semibold ${estoqueBaixo ? "text-red-700" : "text-text-primary"}`}>
                                            {produto.estoque}<span className="ml-1 text-xs font-medium text-text-secondary">un.</span>
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-text-secondary">Mínimo</p>
                                        <p className="mt-1 text-sm font-medium text-text-primary">{produto.min} un.</p>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center justify-between border-t border-border-light pt-3 text-sm">
                                    <p className="text-text-secondary">Preço</p>
                                    <p className="font-semibold text-text-primary">
                                        {produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                                    </p>
                                </div>
                            </div>
                        </HoverCardTrigger>

                        <HoverCardContent side="right" align="start" className="w-72 border border-border-light bg-white p-4 shadow-lg">
                            <p className="text-xs font-semibold uppercase text-text-secondary">Resumo do produto</p>
                            <h3 className="mt-1 font-semibold text-text-primary">{produto.nome}</h3>
                            <p className={`mt-3 text-sm ${estoqueBaixo ? "text-red-700" : "text-emerald-700"}`}>
                                {estoqueBaixo
                                    ? diferencaEstoque === 0
                                        ? "Estoque no limite mínimo"
                                        : `${Math.abs(diferencaEstoque)} un. abaixo do mínimo`
                                    : `${diferencaEstoque} un. acima do mínimo`}
                            </p>
                            <div className="mt-3 border-t border-border-light pt-3">
                                <p className="text-xs text-text-secondary">Valor estimado em estoque</p>
                                <p className="mt-1 font-semibold text-text-primary">
                                    {valorEmEstoque.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                                </p>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                )
            })}
        </article>
    )
}
