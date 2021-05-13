import { Button, Container, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Note } from '../../components/NotesComponents/Note'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { modifyNote, startCreateNote, startLoadNotes } from '../../redux/actions/noteActions';
import { deleteCategory } from '../../redux/actions/categoryActions';
import { useParams } from 'react-router';
import nextId from "react-id-generator";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme)=>({
    container:{
        width:'50%',
        margin:'auto',
        [theme.breakpoints.down("xs")]: {
          width:'90%'  
        },
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
        width:'35%', 
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
    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState('')
    const [modify, setModify] = React.useState(false)
    const [modifyId, setModifyId] = React.useState('')
    


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startLoadNotes({_id}))
    }, [dispatch, _id])


    const handleOnSubmit = (e) =>{
        e.preventDefault()
        setTitle('')
        setContent('')
        if(!modify){
            dispatch(startCreateNote({title,content,_id}))
        }
        else{
            setModify(false)
            const data = {
                idNote : modifyId,
                title, 
                content
            }
            dispatch(modifyNote(data, _id))
        }
    }

    const handleDelete = () =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteCategory(_id))
            }
          })
    }

    return (
        
        <div style={{width: '100%'}}>
            <Paper className={classes.container} component='form' onSubmit={handleOnSubmit}>
                <div className={classes.img}>
                <IconButton component={Link} to='/' onClick={handleDelete} aria-label="delete" style={{color: 'white'}}>
                    <DeleteIcon />
                </IconButton>
                </div>
                <div className={classes.textContainer}>
                    
                <Typography align="center" variant="h6" className={classes.text}>
                    {!modify?('Create Note'):('Modify Note')}
                </Typography>
                <TextField autoComplete="off" variant='outlined'  value={title} onChange={(e)=>setTitle(e.target.value)} className={classes.title} label="Title"/>
                <TextField variant="outlined" value={content} onChange={(e)=>setContent(e.target.value)} placeholder='Content' multiline rows={2} rowsMax={2}/>
                </div>
                <div className={classes.buttonContainer}>
                    {modify&&(
                        <Button variant='outlined' style={{marginRight:'0.5rem'}} color='secondary' onClick={()=>setModify(false)} className={classes.button}>Cancel</Button>
                    )}
                    <Button variant='contained' type='submit' color={modify?('secondary'):('primary')} className={classes.button}>{!modify?('Submit'):('Modify')}</Button>
                </div>
            </Paper>
            <Container>
                <Grid container justify="center">
                    {
                        !loading&&
                                notes.map(eachNote=>(
                                    <Grid item md={3} xs={12} key={nextId()} style={{margin: '0.5rem'}}>
                                        <Note note={eachNote} setModifyId={setModifyId} setModify={setModify} setContent={setContent} setTitle={setTitle} category={_id}/>
                                    </Grid>
                                ))
                    }
                </Grid>
            </Container>
        </div>
    )
}
