"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"
import axios from "axios"
import { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"


const chartConfig = {
  ok: {
    label: "Produtos OK",
    color: "var(--color-chart-1)",
  },
  atencao: {
    label: "Produtos Atenção",
    color: "var(--color-chart-2)",
  },
  critico: {
    label: "Produtos Críticos",
    color: "var(--color-chart-3)",
  },
  ncheck: {
    label: "Não Checados",
    color: "var(--color-input)",
  },
} satisfies ChartConfig
export function Chart() {
    const [ok, setOK] = useState(0)
    const [ate, setat] = useState(0)
    const [cr, setcr] = useState(0)
    const [nc, setNc] = useState(0)
    useEffect(() => {
        const api_n = async () => {
            const res = await axios.get("http://localhost:5258/api/produto/ncheck")
            const lista = res.data
            setNc(lista.length)
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
    api_aten()
    api_ok()
    api_n()
    api_criti()
    }, [])
     const description = "A pie chart with no separator"
    
   const chartData = [
    { nome: "ok", quantidade: ok, fill: "var(--color-ok)" },
    { nome: "atencao", quantidade: ate, fill: "var(--color-atencao)" },
    { nome: "critico", quantidade: cr, fill: "var(--color-critico)" },
    { nome: "ncheck", quantidade: nc, fill: "var(--color-ncheck)" },
  ]
  return (
    <Card className="flex flex-col max-w-[500px] max-h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Produtos no estoque</CardTitle>
        <CardDescription>Atualmente</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="quantidade"
              nameKey="nome"
              stroke="0"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    
    </Card>
  )
}
