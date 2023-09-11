import styles from '@/app/styles/common.module.css'
import Image from "next/image";
import Link from "next/link";

const MovieCard = (curElem) => {

    const {id, type, title, synopsis, backgroundImage} = curElem.jawSummary;
    // console.log(backgroundImage.url)
    const fallbackImage = '/msk-logo.png'

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image 
                    src={backgroundImage.url || fallbackImage}
                    alt={title}
                    width={260}
                    height={200}
                    style={{ width: '100%', height: 'auto' }}
                     />
                </div>
                <div className={styles.card_data}>
                    <h2>{title.substring(0,18)}</h2>
                    <p>
                        {`${synopsis.substring(0,66)} ...`}
                    </p>

                    <Link href={`/movie/${id}`}>
                        <button>
                            watch now
                        </button>
                    </Link>
                </div>
            </div>

        </>
    );
};

export default MovieCard;