import * as S from "./login.style";
import { SignInForm } from "../../components/SignInForm/SignInForm";

export function SignIn() {
  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <SignInForm />
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
}
