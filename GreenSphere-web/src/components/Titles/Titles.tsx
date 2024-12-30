import React from 'react';
import styles from './Titles.module.css';

interface TextProps {
  titleText?: string;
  highlightText?: string;
  text?: string; // A propriedade text é opcional
}

const Titles: React.FC<TextProps> = ({ titleText, highlightText, text }) => {
  return (
    <div className={styles.container}>
      <h1>
        {titleText && <span className={styles.titleText}>{titleText}</span>}&nbsp;
        {highlightText && <span className={styles.highlightText}>{highlightText}</span>}
      </h1>
      {text && (
        <p className={styles.text}>
          {text.split('\n').map((line) => (
            <>
              {line}
              <br />
            </>
          ))}
        </p>
      )}
    </div>
  );
};

export default Titles;
