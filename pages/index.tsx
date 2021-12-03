import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Grid } from '@lib-ui/Grid';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseConfigFile } from '@lib/ParseConfigFile';

export async function getServerSideProps(context: any) {
const config = parseConfigFile(join(__dirname, '../../../config', 'gol.txt'));
  return {
    props: config
  }
}

const Home: NextPage = (data) => {

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Game of Life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Game of life
        </h1>


        <div className={styles.grid}>
          <Grid generation={0} x={0} y={0} initialState={[]} {...data}/>
        </div>
      </main>

    </div>
  )
}

export default Home
