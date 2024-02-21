import { useParams } from "react-router-dom"
import ItemsForm from "../components/itemsForm.jsx"
import useStock from "../hooks/useStock.js"


export default function UpdateItem () {
  
const {getItem} = useStock()
const {id} = useParams()
const item = getItem(id)

  return (
    <>
    <h1>Atualizar items</h1>
    <ItemsForm itemToUpdate={item} />
    </>
  )
}