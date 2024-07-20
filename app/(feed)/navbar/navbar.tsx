import SearchBar from "./searchbar/searchbar"
import { NotificationBing } from "iconsax-react"


const Navbar = () => {
  return (
    <header className="flex border min-h-[40px] border-[#D0D0D0] py-2 items-center justify-around relative">
      <SearchBar />
      <div className="flex justify-self-end">
        <NotificationBing size="15"/>
      </div>
    </header>
  )
}

export default Navbar