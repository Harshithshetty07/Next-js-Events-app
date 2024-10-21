import {Sheet,SheetContent,SheetTrigger,} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"
import MenuImg from '../../public/assets/icons/menu.svg';
import LogoImg from '../../public/assets/images/logo.svg'

function MobileNav() {
  return (
    <nav className="md:hidden">
      <Sheet>
  <SheetTrigger className="align-middle">
    <Image src={MenuImg} alt="menu" width={24} height={24} 
    className="cursor-pointer" />
  </SheetTrigger>
  <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
    <Image src={LogoImg} alt="logo" width={128} height={38}/>
    <Separator className="border border-gray-50"/>
    <NavItems/>
  </SheetContent>
</Sheet>
    </nav>
  )
}

export default MobileNav
