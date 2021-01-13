import styles from './styles'
import Link from 'next/link'

const options = ["Home", "About Me", "proyects", "Contact"] 

export default function Nav(){

    return(
        <>
        <div className = "main-nav-container">
            <div className = "logo"><p>Sergio</p><p>Rodriguez</p></div>
            <div className = 'options-container'><ul className = "list-container">
            <li className = "nav-list-item">
                <Link href="/"><a titte = "Home"><span>Home</span></a></Link>
            </li>
            <li className = "nav-list-item">
                <Link href="/"><a titte = "About Me"><span>About Me</span></a></Link>
            </li>
            <li className = "nav-list-item">
                <Link href="/"><a titte = "proyects"><span>Proyects</span></a></Link>
            </li>
            <li className = "nav-list-item">
                <Link href="/"><a titte = "Contact"><span>Contact</span></a></Link>
            </li>
            </ul></div>
            <div className = "footer">powered by <p>Sergio</p></div>
        </div>
        <style jsx>{styles}</style>
        </>
    )
}