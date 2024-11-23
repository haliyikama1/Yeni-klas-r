import { ArrowRight } from "lucide-react";
import styles from "./hero.module.css";
import Link from "next/link"

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}></div>
      
      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          {/* Text Content */}
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              İstanbul Hafriyat Hizmeti
              <span className={styles.heroTitleHighlight}>Özer Hafriyat</span>
            </h1>
            
            <p className={styles.heroDescription}>
              Özer Hafriyat ile aklınıza gelebilecek bütün hafriyat işlerinizi, ekonomik şekilde tamamlıyoruz. Detaylı bilgi için: 
            </p>
            
            <div className={styles.heroButtons}>
              <button className={styles.buttonPrimary}>
              <Link href="tel:905375198067">Hemen Ara</Link>
              <ArrowRight className={styles.buttonIcon} />
              </button>
              
              <button className={styles.buttonSecondary}>
              <Link href="https://wa.me/905375198067?text=Merhabalar,%20hafriyat%20hizmetiyle%ilgili%bilgi%almak%için%yazıyorum">WhatsApp&apostan İletişime Geç</Link>
              </button>
            </div>
            
            {/* Stats */}
            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>%100</h3>
                <p className={styles.statText}>Müşteri Memnuniyeti</p>
              </div>
   
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>7/24</h3>
                <p className={styles.statText}>Hizmet</p>
              </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div className={styles.heroImageContainer}>
            <div className={styles.imageGradient}></div>
            <div className={styles.imageWrapper}>
              <img
                src="4.jpg"
                alt="Business Innovation"
                class={styles.heroImage}
              />
            </div>
            
            {/* Floating Elements */}
            <div className={`${styles.floatElement} ${styles.floatTop}`}></div>
            <div className={`${styles.floatElement} ${styles.floatBottom}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;