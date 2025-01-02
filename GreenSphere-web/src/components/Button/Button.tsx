import style from './Button.module.css';
import { ButtonProps } from './Button.types';

const Button = ({ text, disabled = false }: ButtonProps) => {
  return (
    <button type="submit" className={style.button} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
