function Sticer_List({img, title}){
        return(
            <div className="Sticer">
                <img src={img} alt="logo" />
                <h4>{title}</h4>
            </div>
        );
}

export default Sticer_List;