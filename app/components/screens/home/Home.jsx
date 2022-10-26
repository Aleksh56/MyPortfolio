import Circles from '../../ui/cicrcles/Circles'
import MetaTitle from '../../ui/MetaTitle'
import AboutMe from './about-me/AboutMe'
import styles from './Home.module.scss'

const Home = ({ me }) => {
	return (
		<section className={styles.section}>
			<MetaTitle title="Alexandr Averianov | Front-end разработчик" />
			<div className={styles.container}>
				<AboutMe me={me} />
			</div>
			<Circles />
		</section>
	)
}

export default Home
