import Link from 'next/link';
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css';


const page = async () => {


  const url = process.env.RAPID_URL;

  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b8de995142msh1809ef4c5a58cc8p1a8e77jsn99692e140bd5',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
const res = await fetch(url, options);
const data = await res.json();
const main_data = data.titles;
// console.log(main_data.jawSummary)

return (
    <>
        <section className={styles.movieSection}>
            <div className={styles.container}>
                <h1>Series & Movie</h1>
                <div className={styles.card_section}>
                    {
                        main_data.map((curElem) => {
                            return <MovieCard key={curElem.id} {...curElem} />
                        })
                    }
                </div>
            </div>
        </section>
    </>
);
}

export default page