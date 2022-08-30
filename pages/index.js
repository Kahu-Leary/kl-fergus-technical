import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Base.module.css'

import { 
  SiteHeader,
  JobList,
  Modal,
} from '../components'

export default function Home() {
  const router = useRouter()
  const [search, setSearch ] = useState('')
  const [showModal, setShowModal ] = useState(false)

  const handleDelete = () => {
    dispatch(
      jobRemoved(router.query.id)
    )
    console.log(job.jobID)
    console.log(router.query.id)
    // console.log(selectJobById(jobs, router.query.id).jobID)
  }

  useEffect(() => {
    console.log(showModal)
  }, [showModal])

  return (
    <div>
    <div className={styles.container}>
      <Head>
        <title>Kahu Leary | Fergus Technical</title>
        <meta name="description" content="Job listing app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      {showModal &&
        <Modal showModal={showModal} setShowModal={setShowModal}/>
      }
        <SiteHeader search={search} setSearch={setSearch} showModal={showModal} setShowModal={setShowModal} />
        <JobList search={search} handleDelete={handleDelete}/>
      </main>
    </div>
    </div>
  )
}
