import Image from "next/image";
import Link from "next/link";
import logoImg from "../public/macchu_logo.png";

const Header = () => {
  return (
    <div>
      <div className="w-full h-20 pt-2 border shadow-md shadow-gray-300 bg-amber-500 mb-3.5">
        <div className="flex items-center justify-around float-right w-4/6 h-14">
          <div className="pt-2 cursor-pointer">
            <Link href="/">
              <Image src={logoImg} alt="logo" width={190} height={73} />
            </Link>
          </div>
          <ul className="flex items-center justify-between w-56 text-base text-white">
            <Link href="/list">
              <li className="cursor-pointer">리스트</li>
            </Link>
            <Link href="/mypage">
              <li className="cursor-pointer">마이페이지</li>
            </Link>
            <li>로그인</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
