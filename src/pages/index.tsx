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
        <div style={{ marginTop: -200 }}>
          <ParallaxTesting data='pogu hehe ' />
          <div style={{ padding: 10, textAlign: 'center' }}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi repellat, perspiciatis dolorem necessitatibus temporibus maxime aliquam omnis error quidem rem, repudiandae explicabo, ipsum voluptatum pariatur veritatis tempora sunt libero? Esse.
          </p>
          </div>
        </div>
      </main>
    </>
  )
}
