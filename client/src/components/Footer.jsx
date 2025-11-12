function Footer() {
    return (
        <div className="bg-gradient-to-t from-bg-tert to-bg-sec w-full text-text flex items-center justify-center h-[60px] shadow shadow-text fixed bottom-0 left-0 z-[1000]">
            <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-[var(--accent-primary)] transition-colors"
            >
                GitHub
            </a>
        </div>
    );
}

export default Footer;
