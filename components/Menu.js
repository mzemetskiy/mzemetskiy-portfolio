import styles from "../styles/components/Menu.module.css"
import Link from "next/link";
import Image from "next/image";

const Menu = ({ setMenu }) => {
    return ( 
        <>
            <section id={styles.menuContainer}>
                <div id={styles.menu}>
                    <button onClick={() => setMenu(false)} id={styles.closeContainer}>
                        <div id={styles.close}>
                            <Image alt='close' src="/navigation/close.svg" height={20} width={20} />
                        </div>
                    </button>
                    <div id={styles.aboutSection}>
                        <h3 id={styles.aboutTitle}>About Me</h3>
                        <h5 id={styles.aboutSubtitle}>Front-End Javascript Developer</h5>
                        <p className={styles.aboutText}>I am Matthew Zemetskiy, an American front-end developer.</p>
                        <p className={styles.aboutText}>I enjoy learning about and experimenting with UI and UX, optimizing webpages for SEO, and creating custom CSS layouts.</p>
                        <p className={styles.aboutText}>When I'm not programming, I play chess and practice my typing skills.</p>
                        <div id={styles.skills}>
                            <Image title="Next.js" alt='Next.js' id={styles.nextjs} src="/skills/nextjs.svg" height={60} width={60} />
                            <Image title="React.js" alt='React.js' src="/skills/react.svg" height={60} width={60} />
                            <Image title="Google Lighthouse" alt='Google Lighthouse' src="/skills/google-lighthouse.svg" height={60} width={60} />
                        </div>
                    </div>
                    <div id={styles.contactSection}>
                        <p>mzemetskiy@gmail.com</p>
                        <p className={styles.contactLinks}><Link href="https://github.com/mzemetskiy"><a target="_blank">Github</a></Link></p>
                        <p className={styles.contactLinks}><Link href="https://www.linkedin.com/in/matthew-zemetskiy-305a07245"><a target="_blank">LinkedIn</a></Link></p>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Menu;