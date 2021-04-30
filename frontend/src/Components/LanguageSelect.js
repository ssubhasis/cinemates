import React from 'react';
import {
    Grid,
    Box,
    Portal,
    GridItem,
    Input,
    Stack,
    Text,
    Center,

    optionGroup,
    Select
} from "@chakra-ui/react"


export default function LanguageSelect(props){
   
    

    const handleRegionChange = (region) => {
        console.log(region)
        props.onSelectRegion(region.target.value);           
    }
    return (
            
            <Grid bg="primary.200" borderRadius="lg" padding="10px" margin="10px" h="15vh" overflowY="scroll" minHeight="1vh">
                <h2>Region</h2>
                <Select onChange={handleRegionChange} 
                 placeholder="Select option"  >
                        
                        <option value="US">US</option>
                        <option value="GB">GB</option>
                        <option value="XWW">XWW</option>
                        <option value="CA">CA</option>
                        <option value="DE">DE</option>
                        <option value="RU">RU</option>
                        <option value="FR">FR</option>
                        <option value="IN">IN</option>
                        <option value="JP">JP</option>
                        <option value="PL">PL</option>
                        <option value="BR">BR</option>
                        <option value="ES">ES</option>
                        <option value="GR">GR</option>
                        <option value="IT">IT</option>
                        <option value="AU">AU</option>
                        <option value="HU">HU</option>
                        <option value="AR">AR</option>
                        <option value="TR">TR</option>
                        <option value="PT">PT</option>
                        <option value="FI">FI</option>
                        <option value="MX">MX</option>
                        <option value="BG">BG</option>
                        <option value="SE">SE</option>
                        <option value="RS">RS</option>
                        <option value="TW">TW</option>
                        <option value="RO">RO</option>
                        <option value="UA">UA</option>
                        <option value="LT">LT</option>
                        <option value="CN">CN</option>
                        <option value="DK">DK</option>
                        <option value="NO">NO</option>
                        <option value="CZ">CZ</option>
                        <option value="HR">HR</option>
                        <option value="HK">HK</option>
                        <option value="IL">IL</option>
                        <option value="IE">IE</option>
                        <option value="LV">LV</option>
                        <option value="AT">AT</option>
                        <option value="NL">NL</option>
                        <option value="EE">EE</option>
                        <option value="SI">SI</option>
                        <option value="CL">CL</option>
                        <option value="KR">KR</option>
                        <option value="VN">VN</option>
                        <option value="NZ">NZ</option>
                        <option value="PE">PE</option>
                        <option value="UY">UY</option>
                        <option value="CO">CO</option>
                        <option value="SK">SK</option>
                        <option value="IR">IR</option>
                        <option value="PH">PH</option>
                        <option value="BE">BE</option>
                        <option value="ID">ID</option>
                        <option value="CH">CH</option>
                        <option value="XEU">XEU</option>
                        <option value="VE">VE</option>
                        <option value="TH">TH</option>
                        
                </Select>
                </Grid>
    );
}