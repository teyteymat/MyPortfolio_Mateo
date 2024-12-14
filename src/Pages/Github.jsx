import { Box, Button, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Navbar } from "../Components/Navbar";
import { RefContext } from "../Context/RefContext";
import { motion } from 'framer-motion';

export const Resume = () => {
  const variant = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });

  const { githubRef } = useContext(RefContext);

  return (
    <Box ref={githubRef} mt="-140px" pb={'40px'}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: .5 }}
        className="sectionHeading"
        style={{ color: "#e1b75e" }}
       
      >
        CEO of AgriSell
      </motion.h2>
      <p style={{
        color: "#fff", 
        textAlign: "center", 
        paddingLeft: "15px",  
        paddingRight: "15px",
        paddingBottom: "20px",
        fontSize: "1.1rem", 
      }}>
        I am the CEO of <b>Agrisell</b>, a product of Department of Computer Science from North Eastern Mindanao State University-Lianga Campus. 
        Agrisell is an e-commerce platform designed to help agribusinesses in the Philippines reduce food wastage
         and market inefficiencies. It enables farmers to secure sales before harvest, providing a marketplace for 
         agricultural products and facilitating smoother transactions between farmers and buyers. The platform aims 
         to streamline the supply chain, ensuring better prices for both producers and consumers while minimizing food 
         loss.
      </p>

      <h1 style={{
        color: "#fff",
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        marginTop: "20px",
        marginBottom: "10px",
      }}>
        AgriSell's Achievements
      </h1>

      <Box>
        <motion.img 
          src="agrisell1.jpg" 
          alt="AgriSell Achievement 1"
          style={{
            width: "70%",
            display: "block",
            margin: "0 auto",
            paddingBottom: "20px",
            maxWidth: "100%" // Ensure image is responsive
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}  // Slight zoom effect
          transition={{ duration: 0.5 }}
        />
      </Box>

      <Box display="flex" flexWrap="wrap" gap={"20px"} justifyContent="center" alignItems={"center"} flexDirection='column'>
        <Box display="flex" justifyContent="center" alignItems="center" gap="20px" flexDirection={{ base: "column", md: "row" }}>
          <motion.img 
            src="agrisell2.jpg" 
            alt="AgriSell Achievement 2"
            style={{
              width: "50%",
              display: "block",
              margin: "0 auto",
              maxWidth: "100%" // Ensure image is responsive
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.5 }}
          />
          <motion.img 
            src="agrisell3.jpg" 
            alt="AgriSell Achievement 3"
            style={{
              width: "50%",
              display: "block",
              margin: "0 auto",
              maxWidth: "100%" // Ensure image is responsive
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.5 }}
          />
        </Box>

        <Box>
          <motion.img 
            src="agrisell.jpg" 
            alt="AgriSell Achievement 4"
            style={{
              width: "70%",
              display: "block",
              margin: "0 auto",
              paddingBottom: "20px",
              maxWidth: "100%" // Ensure image is responsive
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </Box>

        {/* Add 'Our Team' section */}
        <h2 style={{
          color: "#fff",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          marginTop: "40px",  // Space before heading
        }}>
          Our Team
        </h2>

        <Box display="flex" justifyContent="center" alignItems="center" gap="20px" flexDirection="column" mt="20px">
          <motion.img 
            src="team.jpg" 
            alt="Our Team"
            style={{
              width: "80%",
              display: "block",
              margin: "0 auto",
              paddingBottom: "20px",
              maxWidth: "100%" // Ensure image is responsive
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}  // Slight zoom effect on hover
            transition={{ duration: 0.5 }}
          />
        </Box>

        <Box 
          display="flex" 
          flexDirection={{ base: "column", md: "row" }} 
          justifyContent="space-between" 
          alignItems="center" 
          gap="40px" 
          padding="40px"
        >
          {/* First h3 and image with button */}
          <Box display="flex" flexDirection="column" alignItems="center" width={{ base: "100%", md: "45%" }}>
            <h3 style={{
              color: "#fff", 
              fontSize: "1.2rem", 
              fontWeight: "bold", 
              marginTop: "20px", 
              marginBottom: "20px", 
              textAlign: "center"
            }}>
              Follow AgriSell's Facebook Page for upcoming updates
            </h3>
            <motion.img 
              src="agrisell5.png" 
              alt="AgriSell Facebook"
              style={{
                width: "100%", 
                display: "block", 
                margin: "0 auto", 
                paddingBottom: "30px",
                maxWidth: "100%" // Ensure image is responsive
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.5 }}
            />
            <Button 
              sx={{
                backgroundColor: "#e1b75e", 
                color: "#fff", 
                padding: "15px 30px", 
                border: "none", 
                borderRadius: "8px", 
                fontSize: "1.25rem", 
                cursor: "pointer", 
                transition: "background-color 0.3s", 
                textAlign: "center", 
                marginBottom: "30px",  
                "&:hover": {
                  backgroundColor: "#d4a255",
                }
              }}
              onClick={() => window.location.href = 'https://www.facebook.com/profile.php?id=61562160931455'} 
            >
              Visit Facebook Page
            </Button>
          </Box>

          {/* Second h3 and image with button */}
          <Box display="flex" flexDirection="column" alignItems="center" width={{ base: "100%", md: "45%" }}>
            <h3 style={{
              color: "#fff", 
              fontSize: "1.2rem",  
              fontWeight: "bold", 
              marginTop: "20px", 
              marginBottom: "20px", 
              textAlign: "center"
            }}>
              Follow AgriSell's Website for more information
            </h3>
            <motion.img 
              src="agrisell6.png" 
              alt="AgriSell Website"
              style={{
                width: "100%", 
                display: "block", 
                margin: "0 auto", 
                paddingBottom: "30px",
                maxWidth: "100%" // Ensure image is responsive
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.5 }}
            />
            <Button 
              sx={{
                backgroundColor: "#e1b75e", 
                color: "#fff", 
                padding: "15px 30px", 
                border: "none", 
                borderRadius: "8px", 
                fontSize: "1.25rem", 
                cursor: "pointer", 
                transition: "background-color 0.3s", 
                textAlign: "center", 
                marginBottom: "30px",  
                "&:hover": {
                  backgroundColor: "#d4a255",
                }
              }}
              onClick={() => window.location.href = 'https://agrisell.nemsulc.site/'} 
            >
              Visit AgriSell's Website
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
