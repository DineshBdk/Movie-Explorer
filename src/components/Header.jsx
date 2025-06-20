import { NavLink, useNavigate } from "react-router-dom"

export const Header = () => {
  const navigator = useNavigate()
  const handleSearch = (e) => {
    e.preventDefault()
    const queryTerm = e.target.search.value
    e.target.reset()
    return navigator(`search?q=${queryTerm}`)
  }
  
  return (
    <nav className="navbar navbar-expand-md fixed-top bgcolor" >
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand text-danger"><i className="bi bi-film me-1 text-black"/>MovieExplorer</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/top" className="nav-link">Top Rated</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/popular" className="nav-link">Popular</NavLink> 
        </li>
        <li className="nav-item">
          <NavLink to="/upcoming" className="nav-link">Upcoming</NavLink>
        </li>
    </ul>
        <form onSubmit={handleSearch}>
            <input type="search" name="search" className="form-control" placeholder="search" />           
        </form>
    </div>
  </div>
</nav>
  )
}
