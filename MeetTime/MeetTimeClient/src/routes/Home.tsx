export default function Home() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/login';
  };

  return (
    <div>
      <h1>Welcome to Meet Time</h1>
      <button onClick={handleLogin}>
        Login with Microsoft
      </button>
    </div>
  );
};
