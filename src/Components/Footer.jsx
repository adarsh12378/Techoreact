import { Box, Center, HStack, Heading, Stack, VStack, flexbox,Button } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bg={"blackAlpha.900"} minH={40} p={16} color={'white'}>
<Stack direction={['column','row']}>

    <VStack w={'full'} justifyContent={'flex-start'} alignItems={'flex-start'}>
        <Heading size={'md'} textTransform={'uppercase'}>
            Adarsh Gupta 
        </Heading>
        <h1>Shri Govindram Seksaria Institute of Technology and Science, Indore, Madhya Pradesh, India.</h1>
        <h2>Full Stack Engineer</h2>
        <h3>Intern At Wesupp </h3>
    </VStack >
    <VStack w={'full'} justifyContent={'flex-end'} alignItems={'flex-end'} >
    <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://www.linkedin.com/in/adarsh-gupta-583975224/">
                Linkedin
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://github.com/adarsh12378">
              Github
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://www.instagram.com/ashvin_adarsh_gupta/">
              Instagram
            </a>
          </Button>
        </VStack>
   
</Stack>


    </Box>
  )
}

export default Footer;
