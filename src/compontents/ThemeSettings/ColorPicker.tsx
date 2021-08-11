import { Box, useTheme } from "@material-ui/core"


export const ColorPicker = (props:{
  color: string,
  colorList: string[],
  label?:string,
  onColorChange: (color:string)=>void
})=>{
  const {color, colorList, label, onColorChange} = props; 
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column',
      }}
    >
      <Box sx={{
        color: theme.palette.text.secondary,
      }}>
        {label}
      </Box>
      <Box sx={{
        display:'flex',
        mt: 1,
      }}>
        {
          colorList.map((aColor, index)=>{
            return (
              <Box
                key = {index}
                sx={{
                  width: theme.spacing(4),
                  height: theme.spacing(4),
                  backgroundColor: aColor,
                  borderRadius: '5px',
                  mr: 1,
                  cursor:'pointer',
                  border: (color===aColor ?  theme.palette.text.primary : theme.palette.divider)+ ' solid 2px',
                }}
                onClick={()=>{onColorChange(aColor)}}
              ></Box>
            )
          })
        }

      </Box>
    </Box>
  )
}