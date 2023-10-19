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
        <a className="link link-likes svg" href=""></a>
        <a className="link link-favourites svg" href=""></a>
        <a className="link link-dislikes svg" href=""></a>
    </div>
</div>)
}