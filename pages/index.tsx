import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hansel Donizete</title>
        <meta name="description" content="Hansel Donizete" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <figure>
          <Image
            src="/profile.png"
            alt="Profile Picture"
            width={150}
            height={150}
          />
        </figure>
        <h1 className={styles.title}>
          Hansel Donizete
        </h1>

        <p className={styles.description}>
          Um desenvolvedor apaixonado pelo ecossistema web.
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Conteúdos sobre o universo do desenvolvimento web.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Portifólio &rarr;</h2>
            <p>Projetos pessoais e profissionais.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Profile &rarr;</h2>
            <p>Perfil profissional e características.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Skills &rarr;</h2>
            <p>Habilidades e competências.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.external}>
          <a
            href="https://github.com/hanseld28"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          &nbsp;{'|'}&nbsp;
          <a
            href="https://www.linkedin.com/in/hansel-donizete-783333143"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <p className={styles.copyright}>
          © 2022 Hansel Donizete - Todos os direitos reservados.
        </p>
      </footer>
    </div>
  )
}

export default Home
