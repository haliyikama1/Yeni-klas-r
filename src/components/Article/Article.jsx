import styles from "./article.module.css"
import { MapPin, Truck, Shield, Clock } from "lucide-react"

export default function Article () {
  return (
    <>
    <article>
      <div className={styles.container}>
        <div className={styles.headings}>
          <h2>Özer Hafriyat: İstanbul&aposun Lider Hafriyat Firması</h2>
        </div>
        <div className={styles.content}>
          <p className={styles.headingsDescription}>
            İstanbul&aposun lider hafriyat firması olarak, her projede kalite, güvenlik ve verimlilik standartlarını en üst seviyede tutuyoruz. Profesyonel ekibimiz ve modern altyapımızla inşaat sektörünün güvenilir çözüm ortağıyız.
          </p>
        </div>
        <div id="hakkimizda" class={styles.headings}>
          <h2>Biz Kimiz?</h2>
        </div>
        <div  class={styles.content}>
          <p>
            Özer Hafriyat 2015 yılında İstanbul&aposda kuruldu. Özer Hafriyat&aposın kurucusu olan Metin Özer babasının mesleği nedeniyle çocukluğundan itibaren inşaatlarda büyük tecrübe kazandı. İnşaatın hemen her alanında çalışan ve sonrasında oparetor olan Metin Özer, 2015 yılında Özer Hafriyat&aposı kurdu.            
            <br></br>
            <br></br>
            Özer Hafriyat olarak başarılı ve büyük hafriyat projelerinin üstesinden gelen köklü şirket, güncel olarak Kadıköy&aposde bulunan Fikirtepe&aposnin bütün altyapısının hafriyat yükünü tek başına sırtlamış ve bu süreci profesyonellikle yönetmektedir. Aynı zamanda şirkte Çekmeköy&aposde bulunan hafriyat işlemlerini de aktif olarak yürütmektedir.
          </p>
        </div>

        <h3>Profesyonel Hafriyat Çözümleri</h3>
        <div className={styles.content}>
          <p>İstanbul hafriyat sektöründe profesyonel ve güvenilir hizmet arıyorsanız, Özer Hafriyat tam size göre! Yılların deneyimi ve uzman ekibimizle her türlü hafriyat projesinde size en kaliteli çözümleri sunuyoruz.</p>
        </div>

        <div className={styles.iconContainer}>
          <div className={styles.iconItem}>
            <MapPin color="#2563eb" size={40} />
            <p>Tüm İstanbul bölgesinde yaygın hafriyat operasyonları</p>
          </div>
          <div className={styles.iconItem}>
            <Truck color="#2563eb" size={40} />
            <p>Hızlı ve güvenilir hafriyat taşımacılığı</p>
          </div>
        </div>

        <div className={styles.headings}>
          <h2>Kapsamlı Hafriyat Hizmetlerimiz</h2>
        </div>
        <div className={styles.content}>
          <p className={styles.headingsDescription}>
            Modern ekipman ve uzman kadromuzla, her türlü hafriyat projesinde maksimum performans ve minimum maliyet hedefiyle çalışıyoruz. Müşteri memnuniyetini her zaman ön planda tutuyoruz.
          </p>
        </div>

        <h3>Geniş Proje Yelpazesi</h3>
        <div className={styles.content}>
          <p>Şantiye alanlarından kentsel dönüşüm projelerine, inşaat hafriyatından altyapı çalışmalarına kadar geniş bir yelpazede hizmet veriyoruz. İstanbul&aposun karmaşık inşaat projelerinde size profesyonel hafriyat desteği sağlıyoruz.</p>
        </div>

        <h3>Teknoloji ve Uzmanlık</h3>
        <div className={styles.content}>
          <p>Modern ekipmanlarımız, deneyimli operatörlerimiz ve titiz çalışma prensibimizle her projede maksimum verimlilik ve güvenlik sağlıyoruz. Hafriyat işlemlerinizi hızlı, ekonomik ve çevre dostu bir şekilde gerçekleştiriyoruz.</p>
        </div>

        <div className={styles.iconContainer}>
          <div className={styles.iconItem}>
            <Shield color="#2563eb" size={40} />
            <p>Profesyonel iş güvenliği standartları</p>
          </div>
          <div className={styles.iconItem}>
            <Clock color="#2563eb" size={40} />
            <p>Zamanında ve verimli proje teslimatı</p>
          </div>
        </div>
        <div id="iletisim" class={styles.headings}>
          <h3>İletişim</h3>
        </div>
        <div class={styles.content}>
          <p>
            <strong>Telefon numarası: </strong>905375198067
          </p>
          <p>
            <strong>Adres: </strong> Fikirtepe / Kadıköy / İstanbul Anadolu (İstanbul hafriyat işlemleriniz, lokasyondan bağımsız olarak yapılır.)
          </p>
        </div>
      </div>
    </article>
    </>
  )
}