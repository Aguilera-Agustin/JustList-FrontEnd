import { Button, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import ColorPickerField  from 'material-ui-color-picker'

const useStyles = makeStyles(theme=>({
    paper:{
        width:'50%',
        [theme.breakpoints.down("xs")]: { width: '80%' },
        position:'relative',
        margin:'auto',
        top:70,
    },
    img:{
        width:'100%',
        height:'7rem',
        background:'url(https://www.wallpapertip.com/wmimgs/38-385748_material-design.png)',
        backgroundPosition:'center',
        backgroundSize:'cover'
    },
    textContainer:{
        padding:'2rem',
    },
    secondContainer:{
        display:'flex',
        alignItems:'flex-end',
        justifyContent:'space-between'
    },
    colorPicker:{
        marginTop:'2rem',
        width:'45%'
    },
    button:{
        width:'35%',
        [theme.breakpoints.down("sm")]: { width: '50%' },
    },
    text:{
        fontWeight:'400'
    }
   
}))

export const NewCategory = () => {
    const [myColor, setMyColor] = useState('#797070')
    const classes = useStyles()
    return (
        <>
            <Paper component={'form'} className={classes.paper}>
                <div className={classes.img}/>
                <div className={classes.textContainer}>
                <Typography align="center" variant="h6" className={classes.text}>
                    Category Creation
                </Typography>
                    <TextField id="standard-basic" style={{width:'100%'}} label="Name"/>
                    <div className={classes.secondContainer}>
                        <ColorPickerField 
                        name='color'
                        defaultValue='Color'
                        value={myColor}
                        onChange={color => setMyColor(color)}
                        className={classes.colorPicker}
                        />
                            <Button variant='contained' color='primary' className={classes.button} >CREATE</Button>
                    </div>
                </div>
            </Paper>
        </>
    )
}
