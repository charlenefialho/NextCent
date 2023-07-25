import Link from "next/link";

export function Header(){
    return (
        <header className="h-20 bg-white shadow ">
            <nav className="w-3 py-3.5 py-4 md:flex md:items-center md:justify-between ">
                <ul className="md:flex md:items-center md:justify-evenly">
                    <li className="mx-4"><Link  className="text-xl" href="/"/>Home</li>
                    <li className="mx-4"><Link href="/"/>Service</li>
                    <li className="mx-4"><Link href="/"/>Feature</li>
                    <li className="mx-4"><Link href="/"/>Product</li>
                    <li className="mx-4"><Link href="/"/>Testimonial</li>
                    <li className="mx-4"><Link href="/"/>FAQ</li>
                </ul>
            </nav>
        </header>
       
    )
}