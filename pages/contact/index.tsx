import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'
//import styles from '../../styles/Home.module.css'

export default function ContactPage(){
  return (
    <MainLayout>
        <h1>Contact Page</h1>
            <h1 className={'title'}>
                Ir a <Link href='/'>Home</Link>
            </h1>

            <p className={'description'}>
                Soy Ing. Kevin Onofre Wong estoy aprendiendo React. 
                {' '}
                <code className='code'>
                    pages/contact.tsx
                </code>
            </p>
    </MainLayout>
  )
}
