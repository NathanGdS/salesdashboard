import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiBarChart2Fill, RiHome2Fill, RiGroupFill, RiDashboardFill, RiMailFill, RiWalletFill, RiSettingsFill } from "react-icons/ri"

export function Sidebar() {
    return (
       <Box bg="white" w="20" as="aside">
           <Stack spacing="8" align="flex-start">
                <Box>
                    <Stack ml="6" mt="20vh" align="center" spacing="8">
                        <Link display="flex" align="center">
                            <Icon as={RiHome2Fill} fontSize="20" color="gray.400" />
                        </Link>

                        <Link display="flex" align="center">
                            <Icon as={RiBarChart2Fill} fontSize="20" color="blue" />
                        </Link>

                        <Link display="flex" align="center">
                            <Icon as={RiGroupFill} fontSize="20" color="gray.400" />
                        </Link>

                        <Link display="flex" align="center">
                            <Icon as={RiDashboardFill} fontSize="20" color="gray.400" />
                        </Link>

                        <Link display="flex" align="center">
                            <Icon as={RiMailFill} fontSize="20" color="gray.400" />
                        </Link>

                        <Link display="flex" align="center">
                            <Icon as={RiMailFill} fontSize="20" color="gray.400" />
                        </Link>

                        <Link display="flex" align="center">
                            <Icon as={RiWalletFill} fontSize="20" color="gray.400" />
                        </Link>

                        <Link display="flex" align="center">
                            <Icon as={RiSettingsFill} fontSize="20" color="gray.400" />
                        </Link>
                    </Stack>
                </Box>
           </Stack>
       </Box>
    );
}