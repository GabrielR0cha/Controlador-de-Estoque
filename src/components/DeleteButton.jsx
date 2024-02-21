import PropTypes  from "prop-types"
import { useNavigate } from "react-router-dom"
import useStock from "../hooks/useStock"

DeleteButton.propTypes = {
  itemId : PropTypes.number,
  itemName: PropTypes.string
}

export default function DeleteButton({itemName,itemId}) {
  
  const {deleteItem} = useStock()
  const navigate = useNavigate()

  const handleDelete = () => {

    if (confirm(`Tem certeza que deseja excluir o tem? ${itemName} `)) {
      deleteItem(itemId)
      navigate('/items')
    }
  }

  return (
    <button onClick={handleDelete} className="button is-danger is-small"> Excluir</button>
  )
}