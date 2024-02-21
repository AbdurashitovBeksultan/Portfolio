import styles from './Hero.module.css'
import { ImageUrl } from '../../utils'

export const Hero = () => {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Abdurashitov</h1>
				<p className={styles.description}>
					I`m a frontend developer
					<br />
					Beksultan Abdurashitov
				</p>
				<a
					href='mailto:beksultan1709@gmail.com'
					className={styles.contactBtn}
				>
					Contact Me
				</a>
			</div>
			<img
				src={ImageUrl('hero/heroImage.png')}
				alt='Hero image of me'
				className={styles.heroImg}
			/>
			<div className={styles.topBlur} />
			<div className={styles.bottomBlur} />
		</section>
	)
}
