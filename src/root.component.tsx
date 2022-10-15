import { loginWithRedirect } from "@jw-project/api";

export default function Root(props: { name: string }) {
  const {} = props;

  return (
    <section>
      {props.name} is mounted! App login aquis
      <button onClick={loginWithRedirect}>logar</button>
    </section>
  );
}
