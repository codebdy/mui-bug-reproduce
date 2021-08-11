import { Box, Grid } from "@material-ui/core"
import { ColorPicker } from "./ColorPicker"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import intl from 'react-intl-universal';
import { PREDEFINED_PRIMARYS, PREDEFINED_THEMES } from "../../util/consts";
import React from "react";

export const ThemeOptionsPannel = (
  props:{
    primary:string,
    skin:string,
    onSkinChange:(skin:string)=>void,
    onPrimaryChange:(primary:string)=>void,
  }
)=>{
  const {primary, skin, onSkinChange, onPrimaryChange} = props;

  const handleSkinChange = (event:React.ChangeEvent<any>)=>{
    onSkinChange(event.target.value);
  }

  return (
    <Box sx={{mt:2, pl:2}}>
      <Grid container spacing={2} sx={{width:'360px'}}>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel >{intl.get('theme-mode')}</FormLabel>
            <RadioGroup 
              row 
              aria-label="skin" 
              name="skin-radio-group" 
              value={skin}
              onChange = {handleSkinChange}
            >
              {
                Object.keys(PREDEFINED_THEMES).map(name=>{
                  return (
                    <FormControlLabel key={name} value={name} control={<Radio />} label={intl.get(name)} />
                  )
                })
              }
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <ColorPicker
            label = {intl.get('primary')}
            color = {primary}
            colorList = {PREDEFINED_PRIMARYS}
            onColorChange = {onPrimaryChange}
          />
        </Grid>
      </Grid>
    </Box>
  )
}