import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer () {
    return(
        <>
        <div class={styles.container}>
            <div class={styles.footer1}>
                <span class={styles.span1}>
                <Link href="tel:905375198067">Hemen Ara</Link>
                </span>
            </div>
            <div class={styles.footer2}>
                <span class={styles.span2}>
                <Link href="https://wa.me/905375198067?text=Merhabalar,%20hafriyat%20hizmetiyle%20ilgili%20bilgi%20almak%20için%20yazıyorum">WhatsApp&apos;tan İletişime Geç</Link>
                </span>
            </div>

        </div>
        </>
    )
}