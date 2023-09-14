import React from "react";
import { Button } from "@mui/material";
const ButtonEl = (props) =>{
    return(
        <>
            <Button
                sx={{
                    bgcolor: props.bgColor,
                    color:props.color || "white",
                    "&:hover": {
                    bgcolor: props.hoverBgColor,
                    },
                    px:props.px || 4,
                    py:props.py || 1,
                    fontFamily: "'Montserrat', sans-serif",
                }}
                variant="contained"
                type={props.buttonType}
                >
                {props.buttonTxt}
            </Button>
        </>
    )
}

export default ButtonEl;