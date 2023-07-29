import React from "react"
import { CgSearch } from 'react-icons/cg'

interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>,
    classe: string
}

export default function Buscador({busca, setBusca, classe}: Props){
    return(
        <div className={classe}>
            <input
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
            />
            <CgSearch
                size={20}
                color="#4c4d5e"
                cursor='pointer'/>
        </div>
    )
}