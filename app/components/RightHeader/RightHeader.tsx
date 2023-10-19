import Link from 'next/link'

export function RightHeader(){
    return ( <div className="right-header header">
    <div className="header__burger">
        <span></span>
    </div>
    <div className="header_search">
        <form  className="search-form" action="">
            <input className="search-input"  type="text" placeholder="Search for breeds by name"/>
            <button className="search-btn"></button>
        </form>
    </div>
    <div className="header_links">
        <Link href="/Like" className="link link-likes svg">
        </Link>
        <Link href="/Favourites" className="link link-favourites svg">
        </Link>
        <Link href="/Dislikes" className="link link-dislikes svg" >
        </Link>
        
    </div>
</div>)
}