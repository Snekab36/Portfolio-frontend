import avatar from "../assets/avatar.png";
export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <img
        src={avatar}alt="Profile"
        className="w-40 h-40 rounded-full mb-6 shadow-lg"
      />
      <h1 className="text-4xl font-bold">Hello, I'm Sneka</h1>

      <p className="mt-4 text-lg text-gray-600">
        Full Stack MERN Developer
      </p>
    </section>
  );
}
