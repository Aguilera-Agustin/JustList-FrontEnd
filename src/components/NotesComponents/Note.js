import { Button, Divider, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { deleteNote } from '../../redux/actions/noteActions'

const useStyles = makeStyles({
    paper:{
        padding:'1rem'
    },
    buttonContainer:{
        display:'flex',
        justifyContent: 'space-between'
    }
})


export const Note = ({note,category, setModify, setContent, setTitle, setModifyId}) => {
    const {_id, title, content} = note
    const dispatch = useDispatch()
    const showDeleteMsg = () =>{
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
                setModify(false)
                dispatch(deleteNote(_id,category))
            }
          })
    }

    const handleOnModify = () => {
        setModify(true)
        setModifyId(_id)
        setContent(content)
        setTitle(title)
    }

    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <Typography>
                {title}
            </Typography>
            <Divider style={{marginBottom:'0.5rem'}} />
            <Typography variant="body2">
                {content}
            </Typography>
            <Divider style={{marginTop:'0.5rem', marginBottom:'0.5rem'}} />
            <div className={classes.buttonContainer}>
                <Button variant='outlined' color='secondary' size='small' onClick={showDeleteMsg}>Delete</Button>
                <Button variant='outlined' color='primary' size='small' onClick={handleOnModify}>Modify</Button>
            </div>
        </Paper>
    )
}
