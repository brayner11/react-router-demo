import { useParams } from "react-router-dom";
const ItemPage = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h3>item number{params.itemid}</h3>
        </div>
    );
};

export default ItemPage;