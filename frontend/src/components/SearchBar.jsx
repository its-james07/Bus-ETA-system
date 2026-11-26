import { Search } from "lucide-react";
import '../styling/SearchBar.css'
export default function SearchBar() {
  return (
    <>
      <label className="search-bar">
        <Search size={20} strokeWidth={2} />
        <input className="search-input" type="text" placeholder="Where are you?" />
      </label>
    </>
  );
}