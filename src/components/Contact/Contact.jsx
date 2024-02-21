
import styles from './Contact.module.css'
import { ImageUrl } from '../../utils'

export const Contact = () => {
	return (
		<footer id='contact' className={styles.container}>
			<div className={styles.text}>
				<h2>Контакт</h2>
				<h3>тел.номер : +996 555 65 85 60</h3>
			</div>
			<ul className={styles.links}>
				<li className={styles.link}>
					<img
						src={ImageUrl('contact/emailIcon.png')}
						alt='Email icon'
					/>
					<a href='mailto:myemail@email.com'>
						beksultan1709@gmail.com
					</a>
				</li>
			<li className={styles.link}>
					<img
						src={ImageUrl('contact/telegram.png')}
						alt='telegram icon'
					/>
					<a href='https://t.me/BEKSULTANJS'>
						telegram.com/BEKSULTAN ABDURASHITOV
					</a>
				</li> 
				<li className={styles.link}>
					<img
						src={ImageUrl('contact/githubIcon.png')}
						alt='Github icon'
					/>
					<a href='https://github.com/AbdurashitovBeksultan'>
						github.com/AbdurashitovBeksultan
					</a>
				</li>
			</ul>
		</footer>
	)
}
