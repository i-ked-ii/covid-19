import React from 'react';
import Image from 'next/image';

import styles from '../../../styles/Home.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a
            href="https://github.com/i-ked-ii"
            target="_blank"
            rel="noopener noreferrer"
            >
                Powered by{' '} Subhawadee Phothiprugsa
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
                Server by
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </footer>
    )
}

export default Footer
