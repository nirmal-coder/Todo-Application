const Footer = () => {
  return (
    <footer className="w-full mt-10 border-t py-4 bg-gray-50 dark:bg-gray-900 dark:border-gray-700 fixed bottom-0 left-0 right-0">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Section - Name */}
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Built by <span className="font-semibold">Nirmal Kumar</span>
        </p>

        {/* Right Section - Links */}
        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://github.com/nirmal-coder/Todo-Application"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="mailto:v.nirmalkumar12@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/nirmal-kumarv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
