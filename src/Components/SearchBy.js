import React from 'react' ;
import { Radio, RadioGroup, Box,HStack, useRadio,useRadioGroup } from "@chakra-ui/react"


function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          color="white"
          _checked={{
            bg: "orange.600",
            color: "white",
            borderColor: "orange.600",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    )
  }
  

  function SearchBy() {
    const options = ["Movie", "Actor", "Genre"]
  
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "basic search",
      defaultValue: "Movie",
      onChange: console.log,
    })
  
    const group = getRootProps()
  
    return (
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard  key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </HStack>
    )
  }
  


  export default SearchBy