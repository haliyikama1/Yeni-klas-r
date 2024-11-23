"use client"

import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navList = [
    {
        path: "/",
        name: "/",
        title: "Anasayfa"
    },
    {
        path: "#hakkimizda",
        name: "Hakkimizda",
        title: "Hakkımızda"
    },
    {
        path: "#iletisim",
        name: "iletisim",
        title: "İletişim"
    }
];

export default function Navbar() {
    const pathname = usePathname();
    
    return (
        <header>
        <nav>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/logo.png"  // Replace with your actual image path
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </div>
                <div className={styles.jaja}>
                    <ul className={styles.navs}>
                        {navList.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <li key={item.name}>
                                    <Link 
                                        href={item.path} 
                                        className={isActive ? styles.active : ""}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
}