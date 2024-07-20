import Twitter from './assets/TwitterIcon.png'
import Facebook from './assets/FacebookIcon.png'
import Instagram from './assets/InstagramIcon.png'
import Github from './assets/GitHubIcon.png'
export default function Footer(){
    return (
        <div className="bg-[#161619] flex justify-between px-16 py-6">
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Github} alt="" />
        </div>
    )
}