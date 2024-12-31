import style from './Button.module.css';
interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button type="submit" className={style.button}>
      {text}
    </button>
  );
};

export default Button;
