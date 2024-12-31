import style from './Label.module.css';
interface LabelProps {
  text: string;
}

const Label = ({ text }: LabelProps) => {
  return <div className={style.label}>{text}</div>;
};

export default Label;
