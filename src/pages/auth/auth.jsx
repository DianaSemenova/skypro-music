/* eslint-disable import/no-extraneous-dependencies */
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { registrationUserApi, loginUserApi } from "../../api/ApiUsersLogin";
import * as S from "./auth.style";
import { useAccessTokenUserMutation } from "../../servicesQuery/token";
import { setToken } from "../../store/slices/tokenSlice";

export function AuthPage({ setUser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [offButton, setOffButton] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [postToken] = useAccessTokenUserMutation();
  // const { refreshToken } = useSelector((store) => store.token);

  const responseToken = async () => {
    await postToken({ email, password })
      .unwrap()
      .then((token) => {
        console.log("token", token);
        localStorage.setItem("refreshToken", token.refresh);
        localStorage.setItem("accessToken", token.access);
        dispatch(
          setToken({ accessToken: token.access, refreshToken: token.refresh })
        );
      });
  };

  const handleLogin = async () => {
    try {
      const response = await loginUserApi(email, password);
      responseToken();

      console.log(email);
      console.log(response.username);
      setUser(response.username);
      localStorage.setItem("user", response.username);
      setOffButton(true);
      navigate("/");
    } catch (currentError) {
      setError(currentError.message);
    } finally {
      setOffButton(false);
    }
  };

  const handleRegister = async () => {
    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
    } else {
      try {
        const response = await registrationUserApi(email, password);
        responseToken();
        console.log(response);
        setOffButton(true);
        setUser(response.username);
        localStorage.setItem("user", response.username);
        window.location.href = "/";
      } catch (currentError) {
        setError(currentError.message);
        console.log(error);
      } finally {
        setOffButton(false);
      }
    }
  };

  const handleIsLoginMode = () => {
    setIsLoginMode(true);
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/auth">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister} disabled={offButton}>
                {offButton ? "Загружаем информацию..." : "Зарегистрироваться"}
              </S.PrimaryButton>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleLogin} disabled={offButton}>
                {offButton ? "Загружаем информацию..." : "Войти"}
              </S.PrimaryButton>
              <Link to="/auth">
                <S.SecondaryButton onClick={handleIsLoginMode}>
                  Зарегистрироваться
                </S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}
