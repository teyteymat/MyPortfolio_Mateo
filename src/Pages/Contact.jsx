import { Box, useBreakpointValue } from "@chakra-ui/react";
import React, { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";

export const Contact = () => {
  const variant = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  const { contactRef } = useContext(RefContext);

  return (
    <Box pt="50px" pb={"100px"} ref={contactRef}>
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
        Contact
      </motion.h2>
      <Box display="flex" justifyContent="center" mt="50px">
        <img src="contact.gif" alt="Contact Image" style={{ width: '40%', borderRadius: '8px' }} />
      </Box>
      <Box
        display="flex"
        gap="20px"
        flexWrap={"wrap"}
        justifyContent="center"
        w="80%"
        margin={"auto"}
      >
        {/* Facebook */}
        <a href="https://www.facebook.com/profile.php?id=100008342203874" target={"_blank"}>
          <Box
            w={"220px"}
            as={motion.div}
            initial={variant ? { x: -100, opacity: 0 } : { x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ y: -15 }}
            transition={{
              delay: 2,
              duration: 2,
              type: "spring",
              stiffness: 300,
            }}
            p="20px"
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            h="180px"
            justifyContent="space-between"
            borderRadius={"8px"}
            boxShadow="0 0 10px 5px #e1b75e" 
          >
            <Box
              bgColor={"#1a1a1a"}
              borderRadius="50%"
              h={"80px"}
              w="80px"
              color={"#e1b75e"} // Icon color
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              fontSize={"38px"}
            >
              <AiFillFacebook />
            </Box>
            <Box
              color={"#fff"}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              flexDirection={"column"}
            >
              <h2>Facebook</h2>
              <p style={{ color: "#999999" }}>Mateo Castorico Navarro</p>
            </Box>
          </Box>
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/imjustmateo/profilecard/?igsh=MTU0b3p6dThzMHdwZQ==" target={"_blank"}>
          <Box
            w={"220px"}
            as={motion.div}
            initial={variant ? { x: 100 } : { x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ y: -15 }}
            transition={{
              delay: 2,
              duration: 2,
              type: "spring",
              stiffness: 300,
            }}
            p="20px"
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            h="180px"
            justifyContent="space-between"
            borderRadius={"8px"}
            boxShadow="0 0 10px 5px #e1b75e" // Glow effect outside the box
          >
            <Box
              bgColor={"#1a1a1a"}
              borderRadius="50%"
              h={"80px"}
              w="80px"
              color={"#e1b75e"} // Icon color
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              fontSize={"38px"}
            >
              <BsInstagram />
            </Box>
            <Box
              color={"#fff"}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              flexDirection={"column"}
            >
              <h2>Instagram</h2>
              <p style={{ color: "#999999" }}>@imjustmateo</p>
            </Box>
          </Box>
        </a>

        {/* X (Twitter) */}
        <a href="https://x.com/imjust_mateo?s=21" target={"_blank"}>
          <Box
            w={"220px"}
            as={motion.div}
            initial={variant ? { x: -100, opacity: 0 } : { x: 200 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ y: -15 }}
            transition={{
              delay: 2,
              duration: 2,
              type: "spring",
              stiffness: 300,
            }}
            p="20px"
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            h="180px"
            justifyContent="space-between"
            borderRadius={"8px"}
            boxShadow="0 0 10px 5px #e1b75e" // Glow effect outside the box
          >
            <Box
              bgColor={"#1a1a1a"}
              borderRadius="50%"
              h={"80px"}
              w="80px"
              color={"#e1b75e"} // Icon color
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              fontSize={"35px"}
            >
              <BsTwitter />
            </Box>
            <Box
              color={"#fff"}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              flexDirection={"column"}
            >
              <h2>X (Twitter)</h2>
              <p style={{ color: "#999999" }}>@imjust_mateo</p>
            </Box>
          </Box>
        </a>

        {/* Email */}
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target={"_blank"}>
          <Box
            w={"220px"}
            as={motion.div}
            initial={variant ? { x: 100 } : { x: 200 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ y: -15 }}
            transition={{
              delay: 2,
              duration: 2,
              type: "spring",
              stiffness: 300,
            }}
            p="20px"
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            h="180px"
            justifyContent="space-between"
            borderRadius={"8px"}
            boxShadow="0 0 10px 5px #e1b75e" // Glow effect outside the box
          >
            <Box
              bgColor={"#1a1a1a"}
              borderRadius="50%"
              h={"80px"}
              w="80px"
              color={"#e1b75e"} // Icon color
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              fontSize={"35px"}
            >
              <AiOutlineMail />
            </Box>
            <Box
              color={"#fff"}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              flexDirection={"column"}
            >
              <h2>Email</h2>
              <p style={{ color: "#999999" }}>navarromateo4@gmail.com</p>
            </Box>
          </Box>
        </a>
      </Box>
    </Box>
  );
};
