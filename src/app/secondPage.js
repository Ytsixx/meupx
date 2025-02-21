'use client'

import Link from 'next/link';

export default function OutraPagina() {
  return (
    <div>
      <h1>Esta é a outra página</h1>
      <Link href="/">
        <button>Voltar para a página inicial</button>
      </Link>
    </div>
  );
}