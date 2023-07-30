import Top from 'assets/json/top.json'
import styles from './FirstList.module.scss';

export default function FirstList(){

    return(
        <section className={styles.list}>
            {Top.map((anime) => (
                <div className={styles.list__anime} style={{background: `url(${anime.img})`}}>
                    <h4 className={styles.list__anime__title}>{anime.name}</h4>
                    <ul className={styles.list__anime__types}>{anime.tipo.map((tipo) => (
                        <li className={styles.list__anime__types__type}>{tipo}</li>
                    ))}</ul>
                </div>
            ))}
        </section>
    )
}