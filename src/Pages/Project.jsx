
import React from "react";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import styles from "../Styles/Projects.module.css";
import { motion } from "framer-motion";


export const Project = () => {
  const { projectRef } = useContext(RefContext);
  return (
    <div ref={projectRef} className={styles.containerTwo}>
      <section id={styles.projects}>
        <div>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 1 }}
            transition={{
              duration: 0.5,
            }}
            className={"sectionHeading"}
            style={{ color: "#e1b75e" }} 
        
          >
            Projects
          </motion.h2>
          <div className={styles.containerThree}>
            
            {/* ========================================================================================================================================= */}
            <motion.div
              className={styles.item}
              initial={{ x: -70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 300,
              }}
              // transition={{ delay: 0.1 }}
            >
              <div className={styles.left}>
                <div className={styles.img}>
                  <img src="nemsuweb.png" alt="" />
                </div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.projectTitle}>NEMSU-Lianga Campus Website</h2>

                <p className={styles.projectDesc}>
                This website showcases the North Eastern Mindanao State University (NEMSU) - Lianga Campus, providing an online platform for students, faculty, and visitors to explore the campus offerings.

                  <h2>Features</h2>
                  <ul style={{ marginLeft: "30px" }}>
                    <li><b>Home Page:</b> Welcomes users with an overview and visuals of the NEMSU-Lianga Campus.</li>
                    <li><b>About Page:</b> Highlights NEMSU's history, specializations, and achievements, including its role in Coastal Resource Management and recognized programs.</li>
                    <li><b>Facilities Page:</b> Displays key campus facilities like the quadrangle, library, laboratories, and more, with detailed descriptions and images.</li>
                    <li><b>Academics Page:</b> Offers insights into the academic programs and related information.</li>
                    <li><b>Contact Page:</b> Provides communication details for campus inquiries</li>
                    
                  </ul>
                  <h2>
                   <b><i>Programming Languages and Frameworks:</i></b>  HTML | CSS | JavaScript
                  </h2>
                  <h2>
                   <b><i>Area of Responsibility :</i></b>  I developed this static website to present the NEMSU-Lianga Campus effectively, 
                   ensuring an organized layout with responsive design for a seamless user experience. 
                   The Facilities page, in particular, highlights campus infrastructure using clean visuals and structured content.

                  </h2>
                </p>
                
              </div>
            </motion.div>
            {/* ========================================================================================================================================= */}

            <motion.div
              className={styles.item}
              initial={{ x: -70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 300,
              }}
              // transition={{ delay: 0.1 }}
            >
              <div className={styles.left}>
                <div className={styles.img}>
                  <img src="yummy.png" alt="" />
                </div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.projectTitle}>Yummy Neto!</h2>

                <p className={styles.projectDesc}>
                This project is a <strong>Restaurant Management System </strong>
                designed to enhance customer experience and streamline restaurant 
                operations through a modern, user-friendly interface.

                  <h2>Features</h2>
                  <ul style={{ marginLeft: "30px" }}>
                    <li><b>Home Page:</b> Highlights featured dishes like “Yummy Fried Chicken” with clear calls to action for ordering.</li>
                    <li><b>About Page:</b> Provides an overview of the restaurant, its culinary inspirations, and dining ambiance with supporting visuals.</li>
                    <li><b>Menu Section:</b> Displays a list of available dishes with appealing images to attract customers.</li>
                    <li><b>Order Management:</b> Allows customers to place orders directly through the website with a seamless interface.</li>
                    <li><b>Contact Page:</b> Includes a contact form for customer inquiries, allowing users to input their name, contact number, email, and message.</li>
                    <li><b>Cart:</b> Enables users to review and manage items added to their order before checkout.</li>
                  </ul>
                  <h2>
                   <b><i>Tech Stack :</i></b>  HTML | CSS | JavaScript | 
                  </h2>
                  <h2>
                   <b><i>Area of Responsibility :</i></b>  I developed Yummy Neto! with a focus on providing a smooth customer journey, 
                   from exploring the menu to placing an order. The clean design and intuitive navigation 
                   ensure an engaging and efficient experience for restaurant patrons.

                  </h2>
                </p>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
