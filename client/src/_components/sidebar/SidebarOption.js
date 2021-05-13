import React from 'react'
import './SidebarOption.css'
import Grid from "@material-ui/core/Grid"
import { useTheme } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';

function SidebarOption({active,text,Icon}) {



    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    
     
    
    return (
        <Grid container>
            <div className={`sidebarOption ${active && 'sidebarOption--active'} `}>     
                <Icon />
                
                {matches ? <></> : <h2>{text}</h2>}
                     
            </div>   
        </Grid>
    );
}

export default SidebarOption
