const Footer = () => {
  return (
    <section
      className="c-space
        pt-7 pb-3 border-t border-[#1C1C21] flex justify-between items-center flex-wrap gap-5    "
    >
      <div className="text-[#62646C] flex gap-2">
        <p> Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a href="https://github.com/furkanucgull">
          <div className="social-icon">
            <img
              className="w-1/2 h-1/2"
              src="/assets/github.svg"
              alt="GitHub"
            />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/furkanucgull/">
          <div className="social-icon">
            <img
              className="w-1/2 h-1/2 bg-[#D6D9E9]"
              src="/assets/linkedin.svg"
              alt="GitHub"
            />
          </div>
        </a>
      </div>
      <p className="text-[#62646C]">
        {" "}
        © {new Date().getFullYear()} Furkan. All rights reserved.{" "}
      </p>
    </section>
  );
};
export default Footer;
