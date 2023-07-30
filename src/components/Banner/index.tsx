import { FiAlertOctagon } from 'react-icons/fi';
import { BsFillPlayFill } from 'react-icons/bs';
import top10 from 'assets/img/Top10.png';
import styles from './Banner.module.scss';

export default function Banner(){

    return(
        <section className={styles.banner}>
            <h1 className={styles.banner__title}>HEntai de Waifu</h1>
            <h3 className={styles.banner__titlemini}><img src={top10} alt='top'/> Putaria com desenho japones</h3>
            <p className={styles.banner__descri}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae in sequi eos, magni placeat quis modi nobis accusamus corporis voluptatem optio sapiente, natus voluptatibus voluptas inventore! Ipsa, officiis provident!</p>
            <div className={styles.banner__butonsDiv}>
                <button className={styles.banner__butonsDiv__btnPlay}><BsFillPlayFill/>Assistir</button>
                <button className={styles.banner__butonsDiv__btnInfo}><FiAlertOctagon/>Ver detalhes</button>
            </div>
        </section>
    )
}