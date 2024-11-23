import Hero from "@/components/hero/hero";
import styles from "./page.module.css";
import Article from "@/components/Article/Article";
import SwiperComponent from "@/components/Swiper/SwiperComponent";


export default function Home() {
  return(
    <>
    <main>
    <Hero />
    <SwiperComponent/>
    <Article />
    </main>
    </>
  )
}