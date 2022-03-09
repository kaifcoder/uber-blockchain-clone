import Image from "next/image";
import React from "react";
import avatar from "../temp/avatar.jpg";
import { BsPerson } from "react-icons/bs";
import { useContext } from "react";
import { UberContext } from "../context/uberContext";
const style = {
  wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 z-20`,
  leftMenu: `flex gap-3`,
  logo: `text-3xl text-white flex cursor-pointer mr-16`,
  menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,

  userAvatarContainer: `mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginBtn: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  logintxt: `ml-2 cursor-pointer`,
};


const Navbar = () => {
  const {currentAccount, connectWallet, currentUser} = useContext(UberContext)
  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo}>Uber</div>
        <div className={style.menuItem}>Ride</div>
        <div className={style.menuItem}>Drive</div>
        <div className={style.menuItem}>More</div>
      </div>
      <div className={style.rightMenu}>
        <div className={style.menuItem}>Help</div>
        <div className={style.menuItem}>{currentUser?.name?.split(' ')[0]}</div>
        <div className={style.userAvatarContainer}>
          <Image
            src={avatar}
            width={40}
            height={40}
            className={style.userImage}
          />
        </div>
        {currentAccount ? (
          <div>
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
          </div>
        ) : (
          <div className={style.loginBtn} onClick={() => connectWallet()}>
            <BsPerson />
            <span className={style.logintxt}>Log in</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
