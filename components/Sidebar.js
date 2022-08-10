import styles from "../styles/components/Sidebar.module.css"
import Link from "next/link"
import Image from "next/image"

const Sidebar = () => {
    return ( 
        <nav id={styles.sidebar}>
            <Link href="mailto: mzemetskiy@gmail.com">
                <a title="Email" target="_blank">
                    <div className={styles.links}>
                        <Image className={styles.filter} src="/navigation/email.svg" alt="Email" height="40px" width="40px" />
                    </div>
                </a>
            </Link>
            <Link href="https://github.com/mzemetskiy">
                <a title="Github" target="_blank">
                    <div className={styles.links}>
                        <Image className={styles.filter} src="/navigation/github.svg" alt="Github" height="40px" width="40px" />
                    </div>
                </a>
            </Link>
            <Link href="https://www.linkedin.com/in/matthew-zemetskiy-305a07245">
                <a title="LinkedIn" target="_blank">
                    <div className={styles.links}>
                        <Image className={styles.filter} src="/navigation/linkedin.svg" alt="LinkedIn" height="40px" width="40px" />
                    </div>
                </a>
            </Link>
        </nav>
    );
}
 
export default Sidebar;