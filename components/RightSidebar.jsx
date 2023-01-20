import React from 'react'
import albert from "../assets/1albert.jpg";
import arnold from "../assets/1arnold.jpg";
import drphil from "../assets/1drphil.webp";
import elon from "../assets/1elon.webp";
import kobe from "../assets/1kobe.webp";
import miketyson from "../assets/1miketyson.jpg";
import mrbeast from "../assets/1mrbeast.jpg";
import rihana from "../assets/1rihana.jpg";
import therock from "../assets/1rock.jpg";

import { BsFillCameraVideoFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import dots from "../assets/dots.png";
import Image from "next/image";


const RightSidebar = () => {
  return (
    <div className='flex flex-col gap-4 my-4'>
        <h1 className='w-2/12 hidden sm:block'>Birthdays</h1>
    </div>
  )
}

export default RightSidebar