import { FunctionComponent } from "react";
import { NavBar } from "../common/NavBar";
export const Register: FunctionComponent = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full max-w-md absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Username */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Nome de Usuário:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="usuario123"
              required
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Usuário@email.com"
              required
            />
          </div>
          {/* Password */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Senha:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*****"
            />
          </div>
          {/* Confirm password */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirmar Senha:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="password"
              placeholder="*****"
            />
          </div>
          <div className="">
            <button
              className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 w-1/3 rounded-lg focus:outline-none focus:shadow-outline"
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
