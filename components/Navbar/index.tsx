import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
         <div>
            <nav className={styles.container}>
                    <div className={styles.logo}><Link href="/"><a>NEXT</a></Link></div>
                <ul className={styles.list}>
                    <li className={styles.item}><Link href="/"><a>Home</a></Link></li>
                    <li className={styles.item}><Link href="/blog"><a>Blogs</a></Link></li>
                    <li className={styles.item}><Link href="/user"><a>Users</a></Link></li>
                </ul>
            </nav>
            <main>
                
            </main>
        </div>
    )
}
