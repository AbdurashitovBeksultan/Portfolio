

import styles from './About.module.css'
import { ImageUrl } from '../../utils'

export const About = () => {
	return (
		<section className={styles.container} id='about'>
			<h2 className={styles.title}>About Me</h2>
			<div className={styles.content}>
				<img
					src={ImageUrl('about/aboutImage.png')}
					alt='Me sitting with a laptop'
					className={styles.aboutImage}
				/>
				<ul className={styles.aboutItems}>
					<li className={styles.aboutItem}>
						<img
							src={ImageUrl('about/cursorIcon.png')}
							alt='Cursor icon'
						/>
						<div className={styles.aboutItemText}>
							<h3 className={styles.Abouth3}>Коротко о себе</h3>
							<p>
								
								Я являюсь опытным Frontend, разработчиком со
								знаниями, Html, Css, JavaScript, ReactJs, Redux,
								Redux Toolkit, REST API, Firebase и Axios, Git,
								GitHub, Formik, Tailwind, Webpack, Adaptive и
								Response, Styled Components, Toastify Figma,
								NextJs, Typescript, Sass Подробнее вы можете
								узнать на странице :(❁´◡`❁)
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	)
}
