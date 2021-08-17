import { useRouter } from 'next/router';
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Custom404() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000);
    }, [router])
    return (
        <div className={styles.container}>
            <h1>404 | Pages Not Found</h1>
        </div>
    )
}
