import * as S from "./sigIn.style";
import { SignInForm } from "../../components/SignInForm/SignInForm";

export function Login() {
  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <div>test</div>
          <SignInForm />
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
}
