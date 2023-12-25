function Footer() {
    return(
        <footer className="fixed bottom-0 left-0 right-0 bg-white min-w-screen px-8 py-4 ">
            <div className="flex justify-between min-w-screen items-center">
                <div className="flex gap-2 cursor-pointer items-center">
                    <a>2023@Airbnb,Inc</a>
                    <p>.</p>
                    <a>Privacy</a>
                    <p>.</p>
                    <a>Terms</a>
                    <p>.</p>
                    <a>Sitemap</a>
                </div>
                <div className="flex gap-2 cursor-pointer items-center font-semibold">
                    <a>English(IN)</a>
                    <a>INR</a>
                    <a>Support & Resources</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;