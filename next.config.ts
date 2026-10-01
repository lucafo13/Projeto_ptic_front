import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // OBRIGATÓRIO: Força o Next.js a gerar arquivos estáticos puros
  images: {
    unoptimized: true, // Evita erros com carregamento de imagens locais no app desktop
  },
};

export default nextConfig;
