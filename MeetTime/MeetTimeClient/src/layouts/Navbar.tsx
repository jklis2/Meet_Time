import microsoftIcon from "../assets/icons/microsoftIcon.svg";

export default function Navbar() {
  const handleLogin = () => {
    window.location.href = "http://localhost:3000/auth/login";
  };

  return (
    <nav className="bg-teal-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Meet Time</div>
      <div>
        <button
          onClick={handleLogin}
          className="bg-white text-black px-4 py-2 rounded flex items-center"
        >
          <img
            src={microsoftIcon}
            alt="Microsoft Icon"
            className="w-5 h-5 mr-2"
          />
          Sign in
        </button>
      </div>
    </nav>
  );
}
