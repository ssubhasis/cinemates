import React from 'react';
import {
    Grid,
    GridItem,
    Input,
    Stack,
    Text,
    Center,
    Radio,
    RadioGroup
} from "@chakra-ui/react"


export default function LanguageSelect(props){
   
    const handleRegionChange = (region) => {
        console.log(region)
        props.onSelectRegion(region);           
    }
    return (
        <div> 
            <Grid bg="primary.200" borderRadius="lg" padding="10px" margin="10px">
               <GridItem overflowY="scroll" maxHeight="15vh">
                <h2>Region</h2>
                <RadioGroup onChange={handleRegionChange} >
                        <Stack direction="column">

                        <Radio value="US">US</Radio>
                        <Radio value="GB">GB</Radio>
                        <Radio value="XWW">XWW</Radio>
                        <Radio value="CA">CA</Radio>
                        <Radio value="DE">DE</Radio>
                        <Radio value="RU">RU</Radio>
                        <Radio value="FR">FR</Radio>
                        <Radio value="IN">IN</Radio>
                        <Radio value="JP">JP</Radio>
                        <Radio value="PL">PL</Radio>
                        <Radio value="BR">BR</Radio>
                        <Radio value="ES">ES</Radio>
                        <Radio value="GR">GR</Radio>
                        <Radio value="IT">IT</Radio>
                        <Radio value="AU">AU</Radio>
                        <Radio value="HU">HU</Radio>
                        <Radio value="AR">AR</Radio>
                        <Radio value="TR">TR</Radio>
                        <Radio value="PT">PT</Radio>
                        <Radio value="FI">FI</Radio>
                        <Radio value="MX">MX</Radio>
                        <Radio value="BG">BG</Radio>
                        <Radio value="SE">SE</Radio>
                        <Radio value="RS">RS</Radio>
                        <Radio value="TW">TW</Radio>
                        <Radio value="RO">RO</Radio>
                        <Radio value="UA">UA</Radio>
                        <Radio value="LT">LT</Radio>
                        <Radio value="CN">CN</Radio>
                        <Radio value="DK">DK</Radio>
                        <Radio value="NO">NO</Radio>
                        <Radio value="CZ">CZ</Radio>
                        <Radio value="HR">HR</Radio>
                        <Radio value="HK">HK</Radio>
                        <Radio value="IL">IL</Radio>
                        <Radio value="IE">IE</Radio>
                        <Radio value="LV">LV</Radio>
                        <Radio value="AT">AT</Radio>
                        <Radio value="NL">NL</Radio>
                        <Radio value="EE">EE</Radio>
                        <Radio value="SI">SI</Radio>
                        <Radio value="CL">CL</Radio>
                        <Radio value="KR">KR</Radio>
                        <Radio value="VN">VN</Radio>
                        <Radio value="NZ">NZ</Radio>
                        <Radio value="PE">PE</Radio>
                        <Radio value="UY">UY</Radio>
                        <Radio value="CO">CO</Radio>
                        <Radio value="SK">SK</Radio>
                        <Radio value="IR">IR</Radio>
                        <Radio value="PH">PH</Radio>
                        <Radio value="BE">BE</Radio>
                        <Radio value="ID">ID</Radio>
                        <Radio value="CH">CH</Radio>
                        <Radio value="XEU">XEU</Radio>
                        <Radio value="VE">VE</Radio>
                        <Radio value="TH">TH</Radio>
                        </Stack>
                </RadioGroup>
                </GridItem>
                </Grid>
        </div>
    );
}