import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "../Navbar";
import styles from '../../styles/Home.module.css'

interface LayoutProps {
    children : ReactNode,
    title: string,
}

export default function Layout(props: LayoutProps) {
    const {children, title} = props
    return (
        <div>
        <Head>
            <meta name="description" content="Membuat Website menggunakan NEXT-JS AND TYPESCRIPT" />
            <title>{title}</title>
        </Head>
         <Navbar />
         <main className={styles.container}>
             {children}
         </main>
        </div>
    )
}
