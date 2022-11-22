import { auth, types } from "@jw-project/api";

export default function Root(props: types.ApplicationCustomProps) {
  return (
    <section>
      {props.name} is mounted! App login aquis
      <button onClick={auth.loginWithRedirect}>logar</button>
    </section>
  );
}
