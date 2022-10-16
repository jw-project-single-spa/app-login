import { loginWithRedirect, ApplicationCustomProps } from "@jw-project/api";

export default function Root(props: ApplicationCustomProps) {
  return (
    <section>
      {props.name} is mounted! App login aquis
      <button onClick={loginWithRedirect}>logar</button>
    </section>
  );
}
