import Image from 'next/image'
import { APP_URL } from '../../../../../constants'
import styles from './TelegramButton.module.scss'

const TelegramButton = () => {
	return (
		<div className={styles.button}>
			<a
				href="https://t.me/avr_03"
				target="_blank"
				rel="noreferrer"
				title="@avr_03"
			>
				<span>
					<Image
						src={`${APP_URL}/icons/telegram.webp`}
						alt=""
						height={18}
						width={18}
					/>
				</span>
				<span>Telegram</span>
			</a>
		</div>
	)
}

export default TelegramButton;
