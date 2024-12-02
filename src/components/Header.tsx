export default function Header() {
  return (
    <header className="header bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
      <div className="container mx-auto text-center">
        <img
          src="./img/profile-pic.jpg"
          alt="Christoph Mitterwallner Portrait"
          className="w-32 h-auto mx-auto mb-4 shadow-lg clip-profile-pic-style"
        />
        <h1 className="text-4xl font-bold">
          Hallo, mein Name ist <span>Christoph Mitterwallner</span>
        </h1>
        <p className="mt-4 text-lg">
          Ich unterrichte in der Erwachsenenbildung die Themem Webentwicklung
          und Webtechnologien.
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 hover:scale-105 transition-transform"
        >
          zu meinen Projekten
        </a>
      </div>
    </header>
  );
}
