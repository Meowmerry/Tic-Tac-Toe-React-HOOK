import React     from 'react';
const Square = ({value, onClick}) =>{
    const style = value ? `squares${value}` :`squares`;
    const styleOX = value==="X" ? 'X' :'O';
    return (
        <button className={`${style} ${styleOX}`} onClick={onClick} >{value}</button>
    )
}
export default Square;