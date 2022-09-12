export default function Root(props: {
  name: string;
  firebaseLibApp: typeof import("firebase/app");
  firebaseLibAuth: typeof import("firebase/auth");
  firebaseLibFirestore: typeof import("firebase/firestore");
}) {
  const {
    firebaseLibApp: { getApp },
    firebaseLibAuth: { signInWithRedirect, getAuth, GoogleAuthProvider },
  } = props;

  const redirect = () => {
    signInWithRedirect(getAuth(getApp()), new GoogleAuthProvider());
  };

  return (
    <section>
      {props.name} is mounted! App login aquis
      <button onClick={redirect}>logar</button>
    </section>
  );
}
