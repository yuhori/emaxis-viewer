import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [rows, setRows] = useState<GridRowsProp>([]);

  useEffect(() => {
    const url = 'http://localhost:3000/api/emaxis';
    axios.get(url).then((response) => {
      console.log(response.data);
      const datas = [];
      for (const key in response.data) {
        datas.push(response.data[key])
      }
      setRows(datas);
    });
  }, []);

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: '名前',
    },
    {
      field: 'fund_id',
      headerName: 'ファンドID',
    },
    {
      field: 'koumokuromi',
      headerName: '交付目論見書',
    },
    {
      field: 'seimokuromi',
      headerName: '請求目論見書',
    },
    {
      field: 'kouunyou',
      headerName: '交付運用報告書',
    },
    {
      field: 'zenunyou',
      headerName: '運用報告書（全体版）',
    },
    {
      field: 'geppou',
      headerName: '月報',
    },
    {
      field: 'shuhou',
      headerName: '週報',
    },
  ];
  
  return (
    <>
      <Head>
        <title>Emaxis Viewer</title>
        <meta name="description" content="Emaxis Viewer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Emaxis Viewer
            {/* &nbsp; */}
            {/* <code className={styles.code}>pages/index.tsx</code> */}
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/yuhori.png"
                alt="YuHori Logo"
                className={styles.vercelLogo}
                width={48}
                height={48}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <div style={{ height: 300, width: 1024 }}>
            <DataGrid
              getRowId={(row) => row.fund_id}
              // sx={Styles.grid}
              rows={rows}
              columns={columns}
            />
            </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://emaxis.jp/special/api/pdf/emaxis_api.pdf"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Emaxis API Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Fund 一覧については、こちらの API から取得している。
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
