import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="w-full flex flex-col sm:flex-row justify-around items-center">
            <small className="text-gray-800">&copy; 2023 facepal</small>
            <ul className="flex flex-row gap-4">
                <li className="text-gray-700 text-sm"><Link href="#">Contact us</Link></li>
                <li className="text-gray-700 text-sm"><Link href="#">About us</Link></li>
                <li className="text-gray-700 text-sm"><Link href="#">FAQs</Link></li>
                <li className="text-gray-700 text-sm"><Link href="#">Privacy Policy</Link></li>
            </ul>
        </footer>
    )
}
