import React from 'react';
import Image from 'next/image';

import styles from '../../../styles/Home.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        Copyright © 2020 {" "}
                        <a
                            className="ml-2"
                            href="https://github.com/i-ked-ii"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            i-ked-ii
                        </a> All Right Reserved.
                        <a
                            className="d-block"
                            href="https://vercel.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Server by
                            <span className={styles.logo}>
                                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            
            
        </footer>
    )
}

export default Footer
