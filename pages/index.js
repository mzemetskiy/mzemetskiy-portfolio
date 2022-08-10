import styles from '../styles/pages/Home.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Menu from '../components/Menu'
import Link from 'next/link'
import { useMenuContext } from '../components/Context'

export default function Home() {
  const [menu, setMenu] = useMenuContext()

  let dots = []

  function makeDots() {
    for(let i = 0; i < 100; i++) {
      dots.push(
        <div key={i} style={{
          position: "absolute", 
          top: `${Math.floor(Math.random() * 100)}vh`, 
          left: `${Math.floor(Math.random() * 100)}vw`, 
          zIndex: "-1"
        }}>
          <div className={styles.imgHolder}>
            <Image alt="" src="/shapes/circle.svg" layout='fill' />
          </div>
        </div>
      )
    }
  }
  makeDots()

  return (
    <>
      <Head>
        <title>Matthew Zemetskiy</title>
      </Head>
      <header id={styles.header}>
        <div id={styles.headerText}>
          <h1 id={styles.title}>Matthew Zemetskiy</h1>
          <h2 id={styles.subtitle}>Front-End Developer</h2>
          <button onClick={() => setMenu(true)} id={styles.about}>About &rarr;</button>
        </div>
        <div>
          {dots}
        </div>
      </header>
      {menu && <Menu setMenu={setMenu}/>}
      <section id={styles.work}>
        <h1 id={styles.workTitle}>Recent Work</h1>
        <div id={styles.workFlex}>
          <div className={styles.case}>
            <div className={styles.caseContainer}>
              <h2 className={styles.caseTitle}>
                <Link href="https://nextjs-recipe-app-psi.vercel.app/">
                  <a target="_blank">Recipe App</a>
                </Link>
              </h2>
              <h3 className={styles.caseSubtitle}>Description</h3>
              <p className={styles.caseText}>A cooking website that displays recipes.</p>
              <h3 className={styles.caseSubtitle}>Problems</h3>
              <p className={styles.caseText}>Each recipe data had to be converted into a page through dynamic routing.</p>
              <p className={styles.caseText}>A search feature had to be implemented.</p>
              <h3 className={styles.caseSubtitle}>Solutions</h3>
              <p className={styles.caseText}>Using getStaticProps and getStaticPaths, I made a custom page ID for each recipe.</p>
              <p className={styles.caseText}>Using React state and the Javascript filter method, I made search functionality.</p>
              <h3 className={styles.caseSubtitle}>Google Lighthouse Rating</h3>
              <p className={styles.caseText}>100 Performance, 95 Accessibility, 100 Best Practices, 92 SEO</p>
            </div>
            <div className={styles.workImage}>
              <Image className={styles.boxShadow} alt="" src="/screenshots/recipe-app.png" layout="fill" objectFit='contain' />
            </div>
          </div>
          <div className={styles.case}>
            <div className={styles.caseContainer}>
              <h2 className={styles.caseTitle}>
                <Link href="https://nextjs-shop-app-eta.vercel.app/">
                  <a target="_blank">Shop App</a>
                </Link>
              </h2>
              <h3 className={styles.caseSubtitle}>Description</h3>
              <p className={styles.caseText}>A shopping website that allows you to put ingredients into your cart.</p>
              <p className={styles.caseText}>You can then take those items into checkout.</p>
              <h3 className={styles.caseSubtitle}>Problems</h3>
              <p className={styles.caseText}>The cart data had to be accessed and edited by multiple pages and components.</p>
              <p className={styles.caseText}>The cart data had to be saved and accessable even if the page is refreshed.</p>
              <h3 className={styles.caseSubtitle}>Solutions</h3>
              <p className={styles.caseText}>Using context hooks in a separate component, I provided the context to each element.</p>
              <p className={styles.caseText}>Using localStorage, I saved and made accessable the cart data.</p>
              <h3 className={styles.caseSubtitle}>Google Lighthouse Rating</h3>
              <p className={styles.caseText}>97 Performance, 90 Accessibility, 100 Best Practices, 83 SEO</p>
            </div>
            <div className={styles.workImage}>
              <Image className={styles.boxShadow} alt="" src="/screenshots/shop-app.png" layout="fill" objectFit='contain' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}