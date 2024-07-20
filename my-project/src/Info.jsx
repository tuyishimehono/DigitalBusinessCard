import Profile from './assets/profile.png'
export default function Info(){
    return (
        <div className='flex flex-col'>
            <img src= {Profile} alt="profile image" className='px-10'/>
            
            <div className='bg-[#1A1B21]'>
                <div className='text-white text-center'>
                    <h1 className='text-3xl font-black'>Laura Smith</h1>
                    <h5 className='text-[#F3BF99] text-sm'>Frontend Developer</h5>
                    <p className='text-xs'>laurasmith.website</p>
                </div>
                <div className='flex justify-between px-14 py-4 pt-4 shadow-lg '>
                    <button className='bg-white text-slate-800 px-4 py-2 rounded-sm flex text-sm'> <img src="./src/assets/Mail.png" alt="" className='w-6 pr-2 pt-1'/>Email</button>
                    <button className='bg-[#5093E2] text-white px-4 py-2 ml-5 rounded-sm flex text-sm'><img src="./src/assets/linkedin.png" alt="" className='w-8 pr-2 pt-1' />LinkedIn</button>
                </div>
            </div>
        </div>
    )
}