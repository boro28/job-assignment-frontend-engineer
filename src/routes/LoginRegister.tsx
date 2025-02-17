import { login } from "../api/users";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const EMAIL = "email";
const PASSWORD = "password";

export default function LoginRegister(): JSX.Element {
  const history = useHistory();
  const [error, setError] = useState<string | null>(null);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get(EMAIL));
    const password = String(formData.get(PASSWORD));
    try {
      await login(email, password);
      history.push("/home");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>
              {error && (
                <ul className="error-messages">
                  <li>{error}</li>
                </ul>
              )}

              <form onSubmit={handleSubmit}>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" name={EMAIL} type="text" placeholder="Email" />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    name={PASSWORD}
                    type="password"
                    placeholder="Password"
                  />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
