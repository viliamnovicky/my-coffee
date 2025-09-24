function Footer() {
    const date = new Date().getFullYear()
    return (
        <footer className="flex bg-primary-400 justify-center py-2 sticky bottom-0 w-full h-[4vh] text-primary-50">
            <p>&copy; Viliam Novický {date}</p>
        </footer>
    )
}

export default Footer
