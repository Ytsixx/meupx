'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Alterar para 'next/navigation'

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/secondPage');
    }, 3000);
  }, [router]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Redirecionando para a segunda página em 3 segundos...</h1>
      </main>
    </div>
  );
}