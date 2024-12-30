import { SignInButton } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <div>
      <h1>Bem vindo a Green Sphere</h1>
      <p>Faça login para acessar a loja</p>
      <SignInButton mode="modal" forceRedirectUrl="/welcome" />
    </div>
  );
};

export default SignInPage;
