import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Ads Playground!</a>
        </h1>

        

<script async type="text/javascript" src="//asset.fwcdn2.com/js/embed-feed.js"></script>
    <fw-embed-feed
      channel="pillow_cube"
      mode="row"
      open_in="default"
      max_videos="0"
      placement="middle"
      player_placement="bottom-right"
    ></fw-embed-feed>
    
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
