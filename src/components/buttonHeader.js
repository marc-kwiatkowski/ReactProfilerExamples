import React from "react"
import { useNavigate } from "react-router-dom";

function Button(props) {
    return <button onClick={props?.onClick} className={props?.isDisabled ? "bg-slate-300 text-slate-500 size-10 cursor-not-allowed" : "bg-blue-200 size-10"}>{props?.next ? "next" : "prev"}</button>
}

function ButtonHeader_(props) {
    const navigate = useNavigate();
    return <div className="flex justify-center gap-2">
        <Button isDisabled={!props?.prevPage} onClick={() => navigate(props?.prevPage)} />
        <Button isDisabled={!props?.nextPage} next onClick={() => navigate(props?.nextPage)}/>
    </div>
}

export const ButtonHeader = React.memo(ButtonHeader_)