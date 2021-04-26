import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import './SidebarOption.css'
import Grid from "@material-ui/core/Grid"
import { useTheme } from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// sidebarOptions is the functionality of the sidebar since they all
// turn blue on hover only difference is the icon and text
// passing components as props[icons]
function SidebarOption({active,text,Icon}) {

const useStyles = makeStyles((theme)=>({
    icons:{

    
    [theme.breakpoints.down('sm')]:{
        visibility:"hidden",
        
  
        
    },
    },
}));

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('s'));
    console.log(matches)
     const classes=useStyles();
    console.log(Icon)
    return (
        <Grid container>
            <div className={`sidebarOption ${active && 'sidebarOption--active'} `}>     
                <Icon />
               
                <h2 className={`${classes.icons}`}>{text}</h2>        
            </div>   
        </Grid>
    );
}

export default SidebarOption
