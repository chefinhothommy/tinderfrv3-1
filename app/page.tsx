"use client"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Button size="lg" onClick={() => alert("Botão clicado!")} className="px-8 py-4 text-lg">
        Clique Aqui
      </Button>
    </div>
  )
}
