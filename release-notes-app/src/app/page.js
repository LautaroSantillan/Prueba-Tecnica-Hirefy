import Head from 'next/head';
import ReleaseNotes from "../components/ReleaseNotes";
import './globals.css';
import styles from "../styles/styles.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Release Notes</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='header'>
        <h1>Release Notes</h1>
      </div>
      <div className={styles.container}>
        <main>
          <ReleaseNotes />
        </main>
      </div>
    </div>
  );
}
