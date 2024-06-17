import { Box, Button, HStack, Input, Text } from '@chakra-ui/react';


export function Me({ message }: { message: string }){
    return (
      <Box p="6px 10px">
        <Text as="p">Me</Text>
        <Box
          bgColor="blue"
          color="white"
          maxW="320px"
          borderRadius={8}
          p="6px 8px"
          display="inline-block"
        >
          <Text>{message}</Text>
        </Box>
      </Box>
    );
  };
  

  
// 상대 메시지
export function Other ({ user, message }: { user: string; message: string }){
    return (
      <Box p="6px 10px" textAlign="right">
        <Text as="p" textAlign="right">
          {user}
        </Text>
        <Box
          bgColor="green"
          color="white"
          maxW="320px"
          borderRadius={8}
          p="6px 8px"
          display="inline-block"
        >
          <Text>{message}</Text>
        </Box>
      </Box>
    );
  };
  