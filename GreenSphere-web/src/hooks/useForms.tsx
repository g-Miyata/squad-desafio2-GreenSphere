import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormSchema, formSchema } from '../schemas/formSchema';
import defaultImg from '../assets/images/default.png';

export const useForms = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imgUrl: defaultImg,
    },
  });

  return { register, handleSubmit, reset, errors }; // Inclua reset no retorno
};
