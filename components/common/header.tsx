import Link from 'next/link'

function Header({image, title, subtitle}) {
    return (
        <header
            className="flex items-center flex-col justify-center mb-16"
            style={{
                height: "550px",
                background: `linear-gradient(
                        rgba(57, 153, 191, 0.7),
                        rgba(57, 153, 191, 0.7)
                    ), 
                    url('${ image }') 
                    no-repeat
                    50%`,
                backgroundSize: "cover"
            }}>
            <h1 className="title">
                { title }
            </h1>
            <p className="subtitle">
                { subtitle }
            </p>
        </header>
    )
}

export default Header