import { getProviders, signIn } from "next-auth/react";

function Login( {providers} ) {
  return (
    <div>
      <img
        src="https://links.papareact.com/9xl"
        alt="spotify"
        className="w-52 mb-5"
      />
      {Object.values(providers).map((provider) => (
        <div>
          <button>Login with {provider.name} </button>
        </div>
      ))}

    </div>
  );
}
export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  console.log("fetched providers: ", providers);
  return {
    props: {
      providers,
    },
  };
}
