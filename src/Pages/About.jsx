import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  ScaleFade,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../Components/Navbar";
import styles from "../Styles/About.module.css";
import mateoImg from './Images/mateoImg.png'


import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import {motion} from 'framer-motion'


export const About = () => {
  const { aboutRef } = useContext(RefContext);
  const varient = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  return (
    <Box ref={aboutRef} mt={'90px'} pt='90px' pb={'90px'} >
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: .8,
        }}
        
        ref={aboutRef} className={styles.sectionHeading}>
        ABOUT
      </motion.h2>
      
        {varient ? (
          <>
          <Box
        // margin="auto"
            display={'flex'}
        alignItems={"center"}
            justifyContent='space-around'
            flexDirection={'column'}
            mt={"-90px"}
            // border='1px solid white'
            // overflow={""}
      >
             <Box
                display='flex'
                alignItems={'center'}
                justifyContent='center'>
                <Image
                  h={"150px"}
                borderRadius='50%'
                  width={'150px'}
                  objectFit={'cover'}
                  src={mateoImg} alt="man" />
                

            </Box>
            <Box color={"white"} mt='20px' display={'flex'} flexDirection='column' >
              <p style={{ color: "#999999", width: "80%", marginLeft: "30px", textAlign:'justify' }}>
              I am a 4th-year Computer Science student at North Eastern Mindanao State University - Lianga Campus. 
              Passionate about creativity and technology, I aspire to become a skilled web designer. 
              </p>
              <ScaleFade initialScale={0.9} in>
                <TableContainer>
                  <Table
                    className={styles.table}
                    mt="20px"
                    mb={"20px"}
                    size={"sm"}
                    variant="unstyled"
                    w={"80px"}
                    display='flex'
                    
                  >
                    <Tbody>
                      <Tr>
                        <Td>Name :</Td>
                        <Td>Mateo Navarro</Td>
                      </Tr>
                      <Tr>
                        <Td>Date of Birth :</Td>
                        <Td>September 8, 2002</Td>
                      </Tr>
                      <Tr>
                        <Td>Address :</Td>
                        <Td>Lianga, Surigao del Sur</Td>
                      </Tr>
                      <Tr>
                        <Td>Zip Code :</Td>
                        <Td>8307</Td>
                      </Tr>
                      <Tr>
                        <Td>Email :</Td>
                        <Td>navarromateo4@gmail.com </Td>
                      </Tr>
                      <Tr>
                        <Td>Mobile :</Td>
                        <Td>+63 9280373156 </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </ScaleFade>
              <a href="https://drive.google.com/file/d/1MHxCMfg__TLUNRf-E48S9lhbcZ0_biLh/view?usp=sharing" target={"_blank"}>
              <Button mt={"30px"} ml="15px" bg="#e1b75e" color={"black"}>
                Download My Resume
                </Button>
                </a>
              </Box>
              </Box>
          </>
        ) : (
          <>
          <Flex
        margin="auto"
        alignItems={"center"}
        justifyContent='space-around'
        mt={"-100px"}
      >
              <Box
                w="36%"
                // border={'1px solid white'}
                // height={'400px'}
                display='flex'
                alignItems={'center'}
                justifyContent='center'>
                <Image
                  // h={"380px"}
                  borderRadius='10px'
                  // width={'380px'}
                  bg={'#4bb5ee15'}
                  width={'60%'}
                  height='50%'

                  objectFit={'scale-down'}
                  
                  src={ mateoImg} alt="myimg" />
                  {}
                  {}
                {}

            </Box>

            <Box color={"white"} w={"664px"}>
                <motion.p
                  initial={{  opacity: 0 }}
                  whileInView={{  opacity: 1 }}
                  viewport={{ once: false, amount: 1 }}
                  transition={{
                    duration: .8,
                  }}
                  style={{ color: "#999999", width: "80%", marginLeft: "15px" }}>
              I am a 4th-year Computer Science student at North Eastern Mindanao State University - Lianga Campus. 
              Passionate about creativity and technology, I aspire to become a skilled web designer. 
              </motion.p>
              <ScaleFade initialScale={0.9} in>
                <TableContainer>
                  <Table
                    className={styles.table}
                    mt="40px"
                    mb={"20px"}
                    size={"sm"}
                    variant="unstyled"
                    w={"80px"}
                  >
                    <Tbody>
                      <Tr>
                        <Td>Name :</Td>
                        <Td>Mateo Navarro</Td>
                      </Tr>
                      <Tr>
                        <Td>Date of Birth :</Td>
                        <Td>September 8, 2002</Td>
                      </Tr>
                      <Tr>
                        <Td>Address :</Td>
                        <Td>Lianga, Surigao del Sur</Td>
                      </Tr>
                      <Tr>
                        <Td>Zip Code :</Td>
                        <Td>8307 </Td>
                      </Tr>
                      <Tr>
                        <Td>Email :</Td>
                        <Td>navarromateo4@gmail.com </Td>
                      </Tr>
                      <Tr>
                        <Td>Mobile :</Td>
                        <Td> +63 9280373156</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
                </ScaleFade>
                <a href="https://drive.google.com/file/d/1MHxCMfg__TLUNRf-E48S9lhbcZ0_biLh/view?usp=sharing" target={'_blank'}>
              <Button mt={"20px"} ml="15px" bg="#e1b75e" color={"black"}>
                Download My Resume
                  </Button>
                  </a>
              </Box>
              </Flex>
          </>
        )}
      
    </Box>
  );
};
