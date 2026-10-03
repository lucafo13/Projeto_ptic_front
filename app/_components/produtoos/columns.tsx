"use client"

import type { ColumnDef } from "@tanstack/react-table"

export type Produto = {
    id: number
    nome: string
    preco: number
    estoque: number
    min: number
    status: string
}

export const columns: ColumnDef<Produto>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "nome",
        header: "Produto",
    },
    {
        accessorKey: "estoque",
        header: "Estoque",
    },
    {
        accessorKey: "preco",
        header: "Preço",
    },
    {
        accessorKey: "min",
        header: "Mínimo",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
]