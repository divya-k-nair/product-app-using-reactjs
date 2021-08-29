import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

export default function Navigation() {
    return (
        <div>
           <AppBar>
               <Toolbar>
                   <Typography>Product</Typography>
                
                   <Typography>Brand</Typography>
               </Toolbar>
               </AppBar> 
        </div>
    )
}
