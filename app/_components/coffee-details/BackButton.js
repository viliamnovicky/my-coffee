import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

function BackButton({href}) {
    return (
        <Link
        href={href}
        className="text-primary-50 z-40 bg-primary-200 hover:bg-primary-300 w-[35px] h-[35px] flex rounded-full fixed left-3 xl:top-[90px] top-[95px] items-center justify-center"
      >
        <IoMdArrowRoundBack className="text-[1.6rem]" />
      </Link>
    )
}

export default BackButton
