import React, {useEffect,useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Head from 'next/head'
import styles from '../../../styles/Blogs.module.css'


export default function Blogs() {
    const {query} =useRouter()

    const { id, name } = query;

    



    return (
        <div>
            <Head>
                <title>{name}- Let's Go MY!</title>
                <meta name="description" content="Malaysian Local Travel Tourism Lifestyle Food" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                Welcome to <a href="https://nextjs.org">{name}</a>
                </h1>

                <p className={styles.description}>
                Encouraging Local Tourism
                </p>
            </main>

        </div>
    )
}
