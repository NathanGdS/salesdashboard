import { Input as ChakraInput, FormControl, InputProps as ChakraInputProps, FormLabel } from "@chakra-ui/react";


interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

export function Input({
    name,
    label,
    ...rest
}: InputProps) {

    return (
        <FormControl>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

            <ChakraInput 
                name={name}
                id={name}
                borderColor="cyan.400"
                focusBorderColor="cyan.700"
                bgColor="gray.200"
                variant="filled"
                size="lg"
                {...rest}
            />

        </FormControl>
    );
}