import { CSSProperties, FC } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router';

//Importar de react el CSSProperties
//Para asegurar que todas las propiedades
//esten bien escritas
const estiloCssA: CSSProperties= {
  color: '#0070f3',
  textDecoration: 'underline'
}

//Se especifica el texto y href, en react
interface Props{
  //obligatorio
  texto: string;
  href: string;
}


//ActiveLink es un funcional componen = FC
// Y extiende <> de la interfaz props
// Se traduce a un funcional componen pero internamente 
// las propiedades lucen como la interfaz Props
export const ActiveLink: FC<Props> = ({ texto, href}) => {

  //export const ActiveLink = ( {texto, href}: {texto:string; href:string} ) => {
  //Se desestructura el useRouter()
  const { asPath } = useRouter();
  console.log(asPath);

  return (
    <Link legacyBehavior href={href}>
        <a style={asPath === href ? estiloCssA : undefined}>{texto}</a> 
    </Link>
  )
}
