import Fireball from "@/components/Fireball"
import Glitch from "@/components/Glitch"
import Image from 'next/image'
import exclaim from "@/public/img/exclaim.svg"

export default function Page() {
    return (
        <>
            <div className="h-screen w-screen flex align-items-center">
                <div className="flex justify-content-around w-full">
                    <div className="pt-5">
                        <h1 className="tech-head mt-5 mb-2">Tech</h1>
                        <h1 className="tech-head"><span className="tie-head">Tie</span>tans<span className="ml-2 colored-exclamation">!</span></h1>
                        <Glitch />
                    </div>
                    <div className=""><Fireball /></div>
                </div>
            </div>
        </>
    )
}