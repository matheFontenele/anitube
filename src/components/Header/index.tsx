import styles from './Header.module.scss'
import { useState } from 'react'
import Buscador from 'components/SubComponents/Buscador';
import MenuLink from 'components/SubComponents/MenuLink';
import Login from 'components/SubComponents/Login';

export default function Header(){
    const [busca, setBusca] = useState('');

    return(
        <header className={styles.header}>
            <div className={styles.header__title}><h1 className={styles.header__title__one}>Ani</h1><h1 className={styles.header__title__two}>Tube</h1></div>
            <nav className={styles.header__navbar}>
                
                <MenuLink title='Home' path='/' to='/'/>

                <MenuLink title='Animes' path='/animes' to='/animes'/>

                <MenuLink title='Filmes' path='/filmes' to='/filmes'/>

                <MenuLink title='Mangas' path='/mangas' to='/mangas'/>

                <MenuLink title='Comunidade' path='/comunidade' to='/comunidade'/>

                <div>
                    <Buscador classe={styles.header__buscador}
                        busca={busca} 
                        setBusca={setBusca}
                    />
                </div>

                <div>
                    <Login/>
                </div>
            </nav>
        </header>
    )
}