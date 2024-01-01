import PropTypes from 'prop-types';

function Footer({textColor, bgcolor}) {
    console.log(textColor, 'textcolor')
    return(
        <footer className={`mt-auto bg-${bgcolor}-600 border-t-2 min-w-screen px-8 py-4 -mx-8 text-${textColor}-200`}>
            <div className="flex justify-between min-w-screen items-center">
                <div className={`flex gap-2 cursor-pointer items-center text-${textColor}-200`}>
                    <a>2023@SpaceHarbor,Inc</a>
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

Footer.propTypes = {
    textColor: PropTypes.string,
    bgcolor: PropTypes.string
}

export default Footer;