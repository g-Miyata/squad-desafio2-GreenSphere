import styles from './Titles.module.css';
import { TextProps } from './Titles.types';

const Titles = ({ titleText, highlightText, text }: TextProps) => {
  return (
    <div className={styles.container}>
      <h1>
        {titleText && <span className={styles.titleText}>{titleText}</span>}&nbsp;
        {highlightText && <span className={styles.highlightText}>{highlightText}</span>}
      </h1>
      {text && (
        <p className={styles.text}>
          {text.split('\n').map((line, index) => (
            <span key={`line-${index}`} className={styles.lines}>
              {line}
              <br />
            </span>
          ))}
        </p>
      )}
    </div>
  );
};

export default Titles;
