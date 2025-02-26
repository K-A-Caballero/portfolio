import GithubIcon from "../../public/github-mark.svg"

const GithubButton = () => {
  return (
    <div className="fixed bottom-12 left-12">
      <a
        className="flex items-center justify-center min-w-8"
        href="https://github.com/K-A-Caballero/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon
          width="32"
          height="32"
          fill="var(--github)"
        />
      </a>
    </div>
  );
}

export default GithubButton;