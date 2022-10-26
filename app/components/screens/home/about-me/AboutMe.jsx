import Image from 'next/image'
import { APP_URL } from '../../../../constants'
import styles from './AboutMe.module.scss'
import DescriptionButton from './description-button/DescriptionButton'
import EmailButton from './email-button/EmailButton'
import GitHubButton from './github-button/GitHubButton'
import TelegramButton from './telegram-button/TelegramButton'

const AboutMe = ({ me }) => {
	return (
		<div className={styles.me}>
			<div className={styles['image-wrapper']}>
				<Image
					src={`${APP_URL}${me.avatar}`}
					width={190}
					height={190}
					className={styles.image}
					alt={me.siteName}
					quality={100}
				/>
			</div>
			<div className={styles.heading}>
				<span>Александр Аверьянов</span>
			</div>
			<EmailButton />
			<TelegramButton />
			<GitHubButton />
			<DescriptionButton description={me.description} />
		</div>
	)
}

export default AboutMe
