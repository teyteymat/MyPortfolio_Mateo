import React, { useRef, useState } from "react";
import styles from "../Styles/Skills.module.css";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import { Image, useBreakpointValue } from "@chakra-ui/react";
import reactImg from "./Images/react-400.png";
import visualImg from "./Images/visual.png";
import cImg from "./Images/c.png";
import cplusImg from "./Images/c++.png";
import phpImg from "./Images/php.png";
import javaImg from "./Images/java.png";
import pythonImg from "./Images/python.png";
import { calcLength, motion } from "framer-motion";
import { Variants } from "framer-motion";

export const Skills = () => {
  const variant = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  const handleView = () => {
    console.log("hello");
  };
  const { skillRef } = useContext(RefContext);
  const scrollItem={
      offscreen: {
      y: 100,
        opacity:0
      },
      onscreen: {
        y: 0,
        opacity:1,
        // transition: {
        //   duration: 0.4
        // },
        // viewport:{once:false,amount:1}
    }
    
    };

  return (
    <motion.div ref={skillRef} id={styles.mainBox}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: .5,
        }}
        className={"sectionHeading"}
        id={styles.sectionHeading}
        style={{ color: "#e1b75e" }} 
      >
        Skills
      </motion.h2>
{/* =========================================================================================================================================== */}
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={scrollItem}
          whileHover={{ y: -15 }}
          // viewport={{ once: false, amount: 1 }}
          
        >
          <div className={styles.content}>
            <img
              src="https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png"
              alt=""
            />
            <h3>HTML</h3>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={scrollItem}
          whileHover={{ y: -15 }}
        >
          <div className={styles.content}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
              alt=""
            />
            <h3>CSS</h3>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={scrollItem}
          // exit={{ opacity: 0 }}
          whileHover={{ y: -15 }}
        >
          <div className={styles.content}>
            <img
              src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
              alt=""
            />
            <h3>Javascript</h3>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={scrollItem}
          whileHover={{ y: -15 }}

          // transition={{}}
        >
          <div className={styles.content}>
            <img src={cImg} alt="" />

            <h3>C</h3>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={scrollItem}
          whileHover={{ y: -15 }}
        >
          <div className={styles.content}>
            <img src={reactImg} alt="react-logo" />
            {/* <Image src='./Images/react-400.png' alt='' /> */}
            <h3>REACT</h3>
          </div>
        </motion.div>

        
{/*=============================================================================================================================================================  */}
        <motion.div
          className={styles.card}
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={scrollItem}
          whileHover={{ y: -15 }}
        >
          <div className={styles.content}>
            <img src={cplusImg} alt="" />
            <h3>C++</h3>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={scrollItem}
          whileHover={{ y: -15 }}
        >
          <div className={styles.content}>
            <img src={phpImg} alt="" />
            <h3>PHP</h3>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={scrollItem}
          whileHover={{ y: -15 }}
        >
          <div className={styles.content}>
            <img src={pythonImg} alt="" />
            <h3>Python</h3>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={scrollItem}
          whileHover={{ y: -15 }}
        >
          <div className={styles.content}>
            <img src={javaImg} alt="" />
            <h3>Java</h3>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={scrollItem}
          whileHover={{ y: -15 }}
        >
          <div className={styles.content}>
            <img src={visualImg} alt="" />
            <h3>Visual BASIC</h3>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
