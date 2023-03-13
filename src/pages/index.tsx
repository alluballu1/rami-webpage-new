import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ParallaxTesting from '@/components/parallax'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        testing
      </Head>
      <main className={styles.main}>
        <div>
        <ParallaxTesting data='pogu hehe ' />

        </div>
      </main>
    </>
  )
}
