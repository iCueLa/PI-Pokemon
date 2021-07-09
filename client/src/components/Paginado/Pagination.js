import React from "react"
import s from "./Pagination.module.css"
const Pagination =( props) =>{
    const {onLeftClick, onRightClick, page , totalPage} = props;
    return(
        <div className={s.Pagination}>
            <button onClick={onLeftClick} className={s.button}>➖</button>
            <div> {page} de {totalPage} </div>
            <button onClick={onRightClick} className={s.button}>➕</button>
        </div>
    )
}


export default Pagination;