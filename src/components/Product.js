import { Button, TextField } from '@material-ui/core'
import React from 'react'

export default function Product() {
    return (
        <div>
            <br></br><br></br>
            <br></br><br></br>
            <TextField
            type="text"
            variant="outlined"
            label="Product name"
            />
            <br></br><br></br>
            <TextField
            type="text"
            variant="outlined"
            label="Manufacturer "
            />
            <br></br><br></br>
            <TextField
            type="text"
            variant="outlined"
            label="Distributor"
            />
            <br></br><br></br>
            <TextField
            type="date"
            variant="outlined"
            label="Manufacturing date"
            />
            <br></br><br></br>
            <TextField
            type="date"
            variant="outlined"
            label="Expiry date"
            />
            <br></br><br></br>
            <TextField
            type="text"
            variant="outlined"
            label="Retail price"
            />
            <br></br><br></br>
            <TextField
            type="text"
            variant="outlined"
            label="Wholesale price"
            />
            <br></br><br></br>
            <Button
            color="primary"
            variant="contained"
            >SUBMIT</Button>
        </div>
    )
}
