import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type {NextPage} from 'next'
import { ReactElement, ReactNode } from 'react';

//Para permitir utilizar diversos Layout en la app
export type PaginaConLayout<P = {}, IP = P> = NextPage<P, IP> &{
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsConLayout = AppProps & {
  Component: PaginaConLayout
}

//Punto central de la aplicacion
export default function App({ Component, pageProps }: AppPropsConLayout) {
//se puede obtener mediante constantes elemento react.
//Lo que permite revisar el componente que se esta queriendo 
//renderizar(generar) en ese momento.
// es igual (page) => page a una nueva funcion que regresa la misma pagina 

//Usar el diseño definido en el nivel de página, si está disponible
//                Revisa el componenete que se quiere renderizar, si existe getLayout
//                obtiene el layout si no retorna la page
const getLayout = Component.getLayout  || ( (page) => page );
//Renderizar el componente 
  return getLayout (<Component {...pageProps} />)
}
