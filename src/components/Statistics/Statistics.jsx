import styles from"./Statistics.module.css"
import PropTypes from 'prop-types';
import randomColor from "randomcolor";

const generateRandomColor = () =>{
    return randomColor()

 }


const Statistics = ({title, stats}) => {
    return(
        <div className= {styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statList}>
                {stats.map(({id, label, percentage}) =>(
                    <li key= {id} className= {styles.item} style={{ backgroundColor: generateRandomColor() }}>
                        <span className={styles.label}>{label}</span>
                        <span className={styles.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </div>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
}

export default Statistics;