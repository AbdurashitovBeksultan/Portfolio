import  { useState } from 'react'

import styles from './Navbar.module.css'
import { ImageUrl } from '../../utils'

export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<nav className={styles.navbar}>
			<a className={styles.title} href='/'>
				Beksultan
			</a>
			<div className={styles.menu}>
				<img
					className={styles.menuBtn}
					src={
						menuOpen
							? ImageUrl('nav/closeIcon.png')
							: ImageUrl('nav/menuIcon.png')
					}
					alt='menu-button'
					onClick={() => setMenuOpen(!menuOpen)}
				/>
				<ul
					className={`${styles.menuItems} ${
						menuOpen && styles.menuOpen
					}`}
					onClick={() => setMenuOpen(false)}
				>
					<li>
						<a href='#about'>About Me</a>
					</li>
					<li>
						<a href='#skills'> My Skills</a>
					</li>
					<li>
						<a href='#about'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}
