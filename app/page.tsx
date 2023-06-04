import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
     <div>
      <h1>BLeader</h1>
      <span>An unofficial redesign of the <a href="https://www.beatleader.xyz/" target='_blank'>Beatleader Website</a></span>
      <br />
      <span>Most of the stuff here doesn&apos;t work yet.</span>
      <br />
      <br />
      <span>To try out something working, visit any User page with an User id.</span>
      <br />
      <span>Example: <code><Link href="/User/76561198091727754">/User/76561198091727754</Link></code> </span>
     </div>
    </main>
  )
}
