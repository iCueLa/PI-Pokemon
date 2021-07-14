import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { clearState, getDisplay } from "../../actions/actions";
import s from "./Pagination.module.css"
const Pagination =( props) =>{
    const state = useSelector(state => state.totalpokemons)
    const dispatch = useDispatch()


    
 //-----------------diferentes paginado--------------//

 if(state.length !== 0 ){
     var pokemon = state[0].slice(0,12)
     var pokemon2 = state[0].slice(12,24)
     var pokemon3 = state[0].slice(24,36)
     var pokemon4 = state[0].slice(36,48)


 }


    const handleClick = ()=>{
        dispatch(clearState())
        dispatch(getDisplay([pokemon]))

    }
    const handleClick2 = ()=>{
        dispatch(clearState())
        dispatch(getDisplay([pokemon2]))

    }
    const handleClick3 = ()=>{
        dispatch(clearState())
        dispatch(getDisplay([pokemon3]))

    }
    const handleClick4 = ()=>{
        dispatch(clearState())
        dispatch(getDisplay([pokemon4]))

    }


    
    return(
        <div className={s.Pagination}>
            <label>PAGES</label>
            <button onClick={()=>handleClick()} className={s.button}>1</button>
            <button onClick={()=>handleClick2()} className={s.button}>2</button>
            <button onClick={()=>handleClick3()} className={s.button}>3</button>
             <button onClick={()=>handleClick4()} className={s.button}>4</button>
        </div>
    )
}


export default Pagination;