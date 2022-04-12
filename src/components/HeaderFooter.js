

const HeaderFooter = (props) => {
  return (
    <div>
        <div className="HeaderFooterColorBar" />
        <div className="Logo"> The Movie Database</div>
        {props.children}
        <div className="Copyright"> &copy; 2022 KheffyC </div>
    </div>
  )
}

export default HeaderFooter