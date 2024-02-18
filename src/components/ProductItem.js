import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addNewProdAction, addProdAction, delProdAction } from "../store/productReducer"

function Product(){
    const product = useSelector(store => store.product)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('product', JSON.stringify(product))
    }, [product])


    return(
        <div className="wrapper">
            <button className="add_button" onClick={() => dispatch(addNewProdAction())}>Add Prod</button>
            <div className="block_main">
                {product.map(e => 
                    <div className="block_main_product">
                        <p>{e.title}</p>
                        <div className="wrapper_counter">
                            <button className="button_count_minus" onClick={() => dispatch(delProdAction(e.id))}>-</button>
                            <span className="product-count">{e.count}</span>
                            <button className="button_count_plus" onClick={() => dispatch(addProdAction(e.id))}>+</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}


export default Product