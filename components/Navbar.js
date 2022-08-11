import styles from "../styles/components/Navbar.module.css"
import Link from "next/link";
import { useMenuContext } from "./Context";

const Navbar = () => {
    const [menu, setMenu] = useMenuContext()

    function scrollToWork () {
        let scrollY = (window.innerHeight)*1
        window.scrollTo(0, scrollY)
    }

    return ( 
        <>
            <nav id={styles.navbar}>
                <button id={styles.logo} className={styles.button}><Link href="/"><a>M</a></Link></button>
                <button onClick={() => setMenu(true)} className={styles.button}>About</button>
                <button onClick={scrollToWork} className={styles.button}>Work</button>
                <button className={styles.button}><Link href="https://drive.google.com/file/d/1ZlMBfpUUGpXRh_NWBOyc8fLxXcUh9tbm/view?usp=sharing"><a>Résumé</a></Link></button>
            </nav>
        </>
    );
}
 
export default Navbar;