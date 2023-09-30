import { NavLink } from "react-router-dom";
import * as S from "./SignInForm.style";

export function SignInForm() {
  return (
    <S.ModalFormLogin action="#">
      <NavLink href="../">
        <S.ModalLogo>
          <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
        </S.ModalLogo>
      </NavLink>
      <S.ModalInput type="text" name="login" placeholder="Почта" />
      <S.ModalInput type="password" name="password" placeholder="Пароль" />
      <button type="button">Войти</button>
      <button className="modal__btn-signup" type="button">
        Зарегистрироваться
      </button>
    </S.ModalFormLogin>
  );
}
