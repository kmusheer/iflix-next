import React from 'react'
import styles from "@/app/styles/navbar.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'

const Header = () => {
  return (
    <header className={styles.main_header}>
    <div className={styles.navbar_brand}>
        <Link href="/"></Link>
        <Image src="/msk-logo.png" alt='logo image' priority={true} height={100} width={150}></Image>
    </div>
    <Nav />
</header>  )
}

export default Header