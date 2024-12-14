import React from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Highlight,
  HStack,
  Image,
  useBreakpoint,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from "../Styles/Home.module.css";
import Typewriter from "typewriter-effect";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import gif from './Images/introGif.gif'

export const Intro = () => {
  const { introRef } = useContext(RefContext);
  const varient = useBreakpointValue(
    {
      base: true,
      md: false,
      lg: false,
      
    }
  )
  return (
    <Center ref={introRef} >
      <Flex
        // w={"95%"}
        h="90vh"
        margin="auto"
        justifyContent={"space-around"}
        alignItems="center"
        spacing={5}
        borderRadius={"8px"}
        color="#fff"
        
      >
        {varient ? (
          <>
            <Box>
              
          <Heading lineHeight="tall" textAlign="start">
            <Heading fontFamily="monospace" color='#fff' mb={'15px'} size="sm" fontSize="35px">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 35,
                  cursor:"",
                  
                  typeString:('A simple yet powerful native javascript'),
                  strings: [
                    
                    "HELLO!",
                    "MAGANDANG BUHAY!",
                    "WELCOME!" ,
                  ],
                  
                }}
              />
            </Heading>
          </Heading>
         
          <Heading lineHeight="tall">
            <Highlight
              query={"Mateo Navarro"}
              styles={{ px: "2", py: "1", color: "#e1b75e" }}
            >
              I am Mateo Navarro
            </Highlight>
          </Heading>
          <Heading lineHeight="tall">
            <Highlight
              query={"Web Developer"}
              styles={{ px: "0", py: "1", color: "#4dbdfa" }}
            >
              An aspiring
            </Highlight>
          </Heading>
          <Heading lineHeight="tall">
            <Highlight
              query={"Web Designer"}
              styles={{ px: "0", py: "1", color: "#e1b75e" }}
            >
              Web Designer
            </Highlight>
          </Heading>
        </Box>
        </>

      ):(
      <>
              <Box w={"42%"}>
              {}
          <Heading lineHeight="tall" textAlign="start">
            <Heading fontFamily="monospace" color='#fff' mb={'15px'} size="sm" fontSize="45px">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 35,
                  cursor:"",
                  
                  typeString:('A simple yet powerful native javascript'),
                  strings: [
                    
                    "HELLO!",
                    "MAGANDANG BUHAY!",
                    "WELCOME!" ,
                  ],
                  
                }}
              />
            </Heading>
          </Heading>
         
          <Heading lineHeight="tall">
            <Highlight
              query={"Mateo Navarro"}
              styles={{ px: "2", py: "1", color: "#e1b75e" }}
            >
              I am Mateo Navarro
            </Highlight>
          </Heading>
          <Heading lineHeight="tall">
            <Highlight
              query={"Web Developer"}
              styles={{ px: "0", py: "1", color: "#e1b75e" }}
            >
              An aspiring 
            </Highlight>
          </Heading>
          <Heading lineHeight="tall">
            <Highlight
              query={"Web Designer"}
              styles={{ px: "0", py: "1", color: "#e1b75e" }}
            >
              Web Designer
            </Highlight>
          </Heading>
        </Box>



        <Box w={"40%"}>
          <Image
            src={
              gif
            }
            alt="img2"
          />
                {}
        </Box>
      </>
        )}
        
      </Flex>
    </Center>
  );
};