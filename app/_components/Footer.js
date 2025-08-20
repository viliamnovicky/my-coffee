function Footer() {
    const date = new Date().getFullYear()
    return (
        <footer className="flex bg-primary-400 justify-center py-2">
            <p>&copy; Viliam Novický {date}</p>
        </footer>
    )
}

export default Footer
