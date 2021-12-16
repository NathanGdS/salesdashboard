import { Avatar, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import { RiArrowDownCircleLine, RiArrowDownLine, RiArrowDownSFill, RiCalendar2Fill, RiNotification2Line, RiSearchLine } from "react-icons/ri";

export function Header()
{
    return (
        <Flex
            as="header"
            w="100%"
            maxW={1480}
            h="20"
            mx="auto"
            align="center" 
            ml="6"
        >

        <Flex
            as="label"
            ml="2"
            maxWidth={400}
            alignSelf="center"
            color="gray"
            border="1"
            borderColor="gray"
            borderRadius="full"
        >
            <Icon as={RiSearchLine} fontSize="20"  />
            <Input 
                color="gray.500"
                px="4"
                ml="2"
                variant="unstyled"
                placeholder="Search for anything"
                _placeholder={{ color: 'gray.400 '}}
            />
        </Flex>

        <Flex
            align="center"
            m="auto"
        >
            <HStack spacing="2">
                <Icon as={RiCalendar2Fill} fontSize="20"/>
                <Text color="gray.500">Today</Text>
                <Text fontWeight="bold">August 29</Text>
                <Icon as={RiArrowDownSFill} />
            </HStack>
        </Flex>

        <Flex
            align="center"
            mr="8vh"
        >
            <HStack spacing="6">
                <Text
                    bg="white"
                    // mr="8"
                    p="2"
                    borderRadius="6"
                >You have 27 new leads 👉 </Text>
                <Icon as ={RiNotification2Line} fontSize="20"/>
                <Avatar size="sm" name="Nathan Santos" src="https://github.com/nathangds.png"/>
            </HStack>
            <Icon as={RiArrowDownSFill} fontSize="20" ml="2"/>
        </Flex>
        
    </Flex>
    );

}