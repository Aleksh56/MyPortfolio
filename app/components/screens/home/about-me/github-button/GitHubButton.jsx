import Image from 'next/image'
import { APP_URL } from '../../../../../constants'
import styles from './GitHubButton.module.scss'

const GitHubButton = () => {
	return (
		<div className={styles.button}>
			<a
				href="https://github.com/Aleksh56"
				target="_blank"
				rel="noreferrer"
				title="My GitHub: Aleksh56"
			>
				<span>
					<Image
						src={`${APP_URL}/icons/octocat.png`}
						alt="1"
						height={18}
						width={18}
					/>
				</span>
				<span>GitHub</span>
			</a>
		</div>
	)
}

export default GitHubButton;
