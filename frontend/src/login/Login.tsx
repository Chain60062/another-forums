import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../common/NavBar";
export const Login: FunctionComponent = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full max-w-md absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="usuário@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*****"
              required
            />
          </div>
          <div className="flex items-center justify-between flex-wrap">
            <div className="align-baseline">
              <Link
                to="/esqueceu-a-senha"
                className="block font-bold text-sm text-emerald-500 hover:text-emerald-800"
              >
                Esqueceu a senha?
              </Link>
              <Link
                to="/cadastro"
                className="block font-bold text-sm text-emerald-500 hover:text-emerald-800"
              >
                Não está cadastrado?
              </Link>
            </div>
            <button
              className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg w-1/3 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
