import { useForms } from '../../hooks/useForms';
import { FormSchema } from '../../schemas/formSchema';
import style from './Form.module.css';
import Button from '../Button/Button';
import axios from 'axios';
import useFetchPlants from '../../hooks/useFetchPlant/useFetchPlants';
import { useState } from 'react';
const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const { register, handleSubmit, reset, errors } = useForms();
  const { fetchData } = useFetchPlants('https://run.mocky.io/v3/5371015a-8bee-41cc-a419-3c9b71404b58');

  const onSubmit = async (data: FormSchema) => {
    setIsSubmitting(true);
    try {
      const { type, ...rest } = data;
      const formattedData = {
        ...rest,
        label: `${data.label}, ${type}`,
      };

      console.log(formattedData);
      const response = await axios.post('https://run.mocky.io/v3/5371015a-8bee-41cc-a419-3c9b71404b58', formattedData);
      console.log('Success post: ', response.data);
      await fetchData();
      setMessage('Plant successfully registered!');
      reset();
      setTimeout(() => setMessage(''), 2000);
    } catch (error) {
      setMessage('Failed to register the plant. Please try again.');
      console.error('Failed post: ', error);
      setTimeout(() => {
        setMessage('');
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.formContainer}>
      <header>
        <h1>Plant registration</h1>
        <hr />
      </header>
      <div className={style.formGroup}>
        <label htmlFor="name">Plant name {errors.name && <small className={style.errorMessage}>{errors.name.message}</small>}</label>
        <input type="text" id="name" placeholder="Echinocereus Cactus" {...register('name')} />
      </div>
      <div className={style.formGroup}>
        <label htmlFor="subtitle">Plant subtitle {errors.subtitle && <small className={style.errorMessage}>{errors.subtitle.message}</small>}</label>
        <input type="text" id="subtitle" placeholder="A majestic addition to your plant collection" {...register('subtitle')} />
      </div>
      <div className={style.formGroup}>
        <label htmlFor="type">Plant type {errors.type && <small className={style.errorMessage}>{errors.type.message}</small>}</label>
        <input type="text" id="type" placeholder="Cactus" {...register('type')} />
      </div>
      <div className={style.formGroup}>
        <div className={style.prices}>
          <div>
            <label htmlFor="price">Price</label>
            <input type="number" id="price" placeholder="$139.99" {...register('price')} />
            {errors.price && <small className={style.errorMessage}>{errors.price.message}</small>}
          </div>
          <div>
            <label htmlFor="discount">Discount percentage</label>
            <input type="number" id="discount" placeholder="20%" {...register('discount')} />
            {errors.discount && <small className={style.errorMessage}>{errors.discount.message}</small>}
          </div>
        </div>
      </div>
      <div className={style.formGroup}>
        <label>Label: {errors.label && <small className={style.errorMessage}>{errors.label.message}</small>}</label>
        <div className={style.formRadioGroup}>
          <label>
            <input type="radio" value="Indoor" {...register('labelOption')} className={style.radioInput} />
            <p>Indoor</p>
          </label>
          <label>
            <input type="radio" value="Outdoor" {...register('labelOption')} className={style.radioInput} />
            <p>Outdoor</p>
          </label>
        </div>
      </div>
      <div className={style.formGroup}>
        <label htmlFor="features">Features {errors.features && <small className={style.errorMessage}>{errors.features.message}</small>}</label>
        <textarea id="features" placeholder="Species: Echinocereus..." {...register('features')} />
      </div>
      <div className={style.formGroup}>
        <label htmlFor="description">Description {errors.description && <small className={style.errorMessage}>{errors.description.message}</small>}</label>
        <textarea id="description" placeholder="Ladyfinger cactus..." {...register('description')} />
      </div>
      <div className={style.submitBtn}>
        {message && <p>{message}</p>}
        <Button text={isSubmitting ? 'Submitting...' : 'Register'} />
      </div>
    </form>
  );
};

export default Form;
