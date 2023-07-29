import { Link, useLocation } from "react-router-dom";
import styles from 'components/Header/Header.module.scss'

interface Props{
    title: string,
    path: string,
    to: string
}

export default function MenuLink({title, path, to}: Props){
    const local = useLocation();

    return(
        <Link className={`
            ${styles.header__navbar__link}
            ${local.pathname === path ? styles.header__navbar__linkDestaque : ''}`} to={to}>
                {title}
        </Link> 
    )
}