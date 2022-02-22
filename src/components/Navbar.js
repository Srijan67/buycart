import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Navbar = () => {
  return (
    <>
      <div className="NavLink">
        <nav>
          <div>
            <MenuIcon className="menuicon" />
          </div>
          <div>
            <ShoppingCartOutlinedIcon className="shoppingcart" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
