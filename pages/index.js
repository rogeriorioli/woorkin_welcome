import Head from 'next/head'
import Logo from '../components/Logo'


export default function Home() {
  return (
    <div>
      <Head>
        <title>woorkin - estamos quase chegando!</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
      <div>
        <Logo/>
        <p>Estamos chegando !</p>
      </div>
      </main>
    </div>
  )
}
