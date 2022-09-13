    const Input = ({_, ...props}) => {
    return (
        <div className='wrapper-input'>
            <legend>{props.label}</legend>
            <input
                {...props}
            />
        </div>
    )
}

export default Input
