import Link from 'next/link'
import React from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function PricingPage () {
  return (
    <MainLayout>
        <h1> Pricing Page</h1>
        <h1 className={'title'}>
            Ir a <Link href="/"> Home</Link>
        </h1>

        <p className={'description'}>
            Pagina creada para la {' '}

            <code className={'code'}>
                Tarea #1.
            </code>
        </p>
    </MainLayout>
  )
}
