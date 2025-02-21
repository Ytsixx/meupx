'use client';

// page.j

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  // Função para navegar para a próxima página
  const handleNavigate = () => {
    router.push('/secondPage');  // Substitua com o caminho da sua próxima página
  };

  return (
    <div>
      <h1>Bem-vindo à Página Inicial</h1>
      <button onClick={handleNavigate}>Ir para outra página</button>
    </div>
  );
}






/*
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Alterar para 'next/navigation'

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000r
  }, [router]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Redirecionando para a segunda página em 3 segundos...</h1>
      </main>
    </div>
  );
}
*/