import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainHead from "../components/MainHead";
import React, { useState, useEffect } from 'react';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [headerStyle, setHeaderStyle] = useState({
  });

  useEffect(() => {
    setHeaderStyle({
      
    });
    
  }, []);

  return (
    <>
      <MainHead titulo="José Nápoles"/>
      <div className={styles.container}>
        <div className={styles.header} style={headerStyle}>
          <h1>Hola, soy <b className={styles.names}>José Nápoles</b></h1>
        </div>
      </div>
    </>
  );
}
