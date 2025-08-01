import React from 'react';

export default function ResetPasswordForm() {
  // const navigate = useNavigate();
  return (
    <form className="flex flex-col bg-white p-[40px] py-[24px]">
      {/* email */}
      <div className="mb-5 flex flex-col gap-2 py-[12px]">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="dark:shadow-xs-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-xs focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      {/* password */}
      <div className="mb-5 flex flex-col gap-2 py-[12px]">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          New password
        </label>
        <input
          type="password"
          id="password"
          className="dark:shadow-xs-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-xs focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-1 flex flex-col gap-2 py-[12px]">
        <button
          type="submit"
          className="rounded-lg bg-[var(--main-color)] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
        >
          Login
        </button>
      </div>
    </form>
  );
}
