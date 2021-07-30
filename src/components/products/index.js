import './products.css';

const Products = (props)=>{
    const productContainerClass = "product-container";
    
    return (
        <main>        
            <h2>Welcome</h2>
            <div className= {productContainerClass}>
                {console.log(props.list)}
                {props.list.map((item, index)=>{
                    return(
                        <article id={index} className="product">
                            <img src= {item.image} className="product-img" alt="produto"/>

                            <div className="product-content">
                                <h2>{item.title}</h2>
                                <p className="product-text">{item.text}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </main>
    );
}

export default Products;