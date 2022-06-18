const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className="w-full text-center py-12">
            <p>Copyright {date} &copy; <a href="https://www.instagram.com/Fajar3108.i" target="_blank" rel="noreferrer" className="text-blue-600">Maulana Fajar Ibrahim</a></p>
        </footer>
    )
}

export default Footer;