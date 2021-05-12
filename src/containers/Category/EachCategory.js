import { Button, Container, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Note } from '../../components/NotesComponents/Note'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadNotes } from '../../redux/actions/noteActions';
import { useParams } from 'react-router';
import nextId from "react-id-generator";


const useStyles = makeStyles((theme)=>({
    container:{
        width:'50%',
        margin:'auto',
        marginTop:'1rem',
        display:'block',
        paddingBottom:'0.3rem',
        marginBottom:'2rem'
    },
    img:{
        width:'100%',
        height:'5rem',
        background:'url(https://www.wallpapertip.com/wmimgs/38-385748_material-design.png)',
        backgroundPosition:'center',
        backgroundSize:'cover',
        display:'flex',
        justifyContent:'flex-end'
    },
    text:{
        fontWeight:'400'
    },
    textContainer:{
        padding:'2rem',
        paddingBottom:'0',
        display:'flex',
        flexDirection:'column'
    },
    title:{
        width:'30%', 
        marginBottom:'1rem',
        [theme.breakpoints.down("xs")]: {
            width: '80%',
            marginTop:'1rem'
        },
    },
    buttonContainer:{
        width:'100%',
        display:'flex',
        justifyContent : 'flex-end',
        paddingRight:'2rem',
        margin: '0.5rem 0'
    },
    
}))

export const EachCategory = () => {
    const classes = useStyles()
    const {_id} = useParams()
    const {loading, notes} = useSelector(state => state.note)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startLoadNotes({categoryId: _id}))
    }, [dispatch, _id])
    return (
        <div style={{width: '100%'}}>
            <Paper className={classes.container}>
                <div className={classes.img}>
                <IconButton aria-label="delete" style={{color: 'white'}}>
                    <DeleteIcon />
                </IconButton>
                </div>
                <div className={classes.textContainer}>
                <Typography align="center" variant="h6" className={classes.text}>
                    Create Note
                </Typography>
                <TextField autoComplete="off" variant='outlined' id="standard-basic" className={classes.title} label="Title"/>
                <TextField variant="outlined" placeholder='Content' multiline rows={2} rowsMax={2}/>
                </div>
                <div className={classes.buttonContainer}>
                    <Button variant='contained' type='submit' color='primary' className={classes.button}>Submit</Button>
                </div>
            </Paper>
            <Container>
                <Grid container justify="center">
                    {
                        !loading&&
                                notes.map(eachNote=>(
                                    <Grid item md={3} xs={12} key={nextId()} style={{margin: '0.5rem'}}>
                                        <Note title={eachNote.title} content={eachNote.content}/>
                                    </Grid>
                                ))
                    }
                
                </Grid>
            </Container>
        </div>
    )
}
