'use client'

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo à Página Inicial</h1>
      <h1>eu sou sixx</h1>
      <Link href="/agora">
        <button>Ir para outra página</button>
      </Link>
    </div>
  );
}
