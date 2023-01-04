import Head from "next/head"
import Link from "next/link"
import { ReactElement } from "react"
import { DarkLayout } from "../components/layouts/DarkLayout"
import { MainLayout } from "../components/layouts/MainLayout"


export default function AboutPage(){
    return(
        <>
            <h1>About Page</h1>
            <h2 className={'title'}>
                    Ir a <Link href="/">Home</Link>
            </h2>
            <p className={'description'}>
                Aplicacion simple para mostrar productos de tienda virtual.
            </p>
        </>
    )
}

//<> es un fragmento, que ayuda ha agrupar contenido
//Anadir en un componente anadir en su prototipo
//getLayout()
//En algun punto se le debe decir a next  que ejecute esta funcion,
//esto se lleva a cabo en el archivo _app.tsx
AboutPage.getLayout = function getLayout(page: ReactElement){
    return(
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}