import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';

//Paginas q se encuentran dentro de la carpeta
//pages tienen que llevar siempre la sintaxis
//export default
//Los nombres de archivos deben estar
//nombrados en minusculas
//El nombre del archivo es el path de la url
export default function HomePage() {
  return (
      <MainLayout>
        
        {/* Estos tag se lo envia al componente */}

        <h1>Home Page</h1>
        {/* title se toma de la clase global de css */}
        <h1 className={'title'}>
            Ir a <Link href="/about"> About</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>
            pages/index.js
          </code>
        </p>

      </MainLayout>
  )
}
