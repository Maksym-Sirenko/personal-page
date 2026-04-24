import { siteContent, type Language } from "../../../i18n/siteContent";
import styles from "./TelegramChatButton.module.scss";

type TelegramChatButtonProps = {
  language: Language;
};

function TelegramChatButton({ language }: TelegramChatButtonProps) {
  return (
    <a
      className={styles.button}
      href="https://t.me/Yambren"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={siteContent[language].ui.telegramChat}
    >
      <span className={styles.icon} aria-hidden="true">
        @
      </span>
      <span className={styles.text}>Telegram</span>
    </a>
  );
}

export default TelegramChatButton;
