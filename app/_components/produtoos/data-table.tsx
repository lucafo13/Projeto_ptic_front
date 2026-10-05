"use client"

import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table"
import type { ColumnDef } from "@tanstack/react-table"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({  
    columns,
    data,
}: DataTableProps<TData, TValue>) {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: 7,
            },
        },
    })
    const { pageIndex, pageSize } = table.getState().pagination
    const rowCount = table.getRowCount()
    const firstRow = rowCount === 0 ? 0 : pageIndex * pageSize + 1
    const lastRow = Math.min((pageIndex + 1) * pageSize, rowCount)

    return (
        <div className="rounded-md border overflow-hidden">

            <Table>

                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>

                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id}>

                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}

                                </TableHead>
                            ))}

                        </TableRow>
                    ))}
                </TableHeader>

                <TableBody>

                    {table.getRowModel().rows.length ? (

                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id}>

                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>

                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}

                                    </TableCell>
                                ))}

                            </TableRow>
                        ))

                    ) : (

                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
                            >
                                Nenhum produto encontrado.
                            </TableCell>
                        </TableRow>

                    )}

                </TableBody>

            </Table>

            <div className="flex items-center justify-between border-t border-border-light px-3 py-2">
                <p className="text-sm text-text-secondary">
                    {firstRow}–{lastRow} de {rowCount} produtos
                </p>
                <div className="flex items-center gap-1">
                    <Button
                        variant="outline"
                        size="icon-sm"
                        aria-label="Página anterior"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronLeft />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon-sm"
                        aria-label="Próxima página"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}