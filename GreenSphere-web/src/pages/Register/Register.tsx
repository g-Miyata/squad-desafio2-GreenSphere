import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import style from './Register.module.css';
const Register = () => {
  return (
    <div>
      <section className={style.container}>
        <div className={style.formContainer}>
          <Form />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
