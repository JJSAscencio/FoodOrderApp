import React from "react"
import classes from './Input.module.css'

//{...props.input} spread operator on this case makes input highle configurable


const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    )
})

export default Input