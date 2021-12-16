import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard(){
    return (
        <Flex flexDirection="column" h="100vh">
            <Flex h="100%" maxWidth={1480}>
                <Sidebar />
                <Header />
                
            </Flex>
        </Flex>
    );
}