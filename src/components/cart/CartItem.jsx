import React from 'react'
import Item from './Item'
import axios from 'axios'

const CardItem = (props) => {


  const onAddOverlay = async (obj)=>{
    try{
      const findOverlay = props.overlayItems.find(objOver=> objOver.myId === obj.myId)
      if(findOverlay){
        axios.delete(`https://6437b3220c58d3b14576ebd7.mockapi.io/cart/${findOverlay.id}`)
        props.setOverlayItems((over) => over.filter(o=>o.myId !== obj.myId))
      }
      else{
        const {data} = await axios.post('https://6437b3220c58d3b14576ebd7.mockapi.io/cart', obj)
        props.setOverlayItems([...props.overlayItems, data])
      }
    }
    catch{
      alert('Произошла ошибка')
    }
  }

  const onAddFav = async (obj)=>{
    try{
      const findFavorites = props.favorites.find(objFav=> objFav.myId === obj.myId)
      if(findFavorites){
        axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites/${findFavorites.id}`)
        props.setFavorites((over) => over.filter(o=>o.myId !== obj.myId))
      }
      else{
        const {data} = await axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites', obj)
        props.setFavorites([...props.favorites, data])
      }
    }
    catch{
      alert('Произошла ошибка')
    }
  }

  return (
<div className='conteiner py-1'>
  
    { 
      props.item.map(obj=>{
        return(
           <Item
           key={obj.id}
           id={obj.id}
           myId={obj.myId}
           title={obj.title}
           description={obj.description}
           technology={obj.technology}
           memory={obj.memory}
           old_price={obj.old_price}
           processor={obj.processor}
           camera={obj.camera}
           price={obj.price}
           img={obj.img}

           favBtn={
            (favObj)=>{
              onAddFav(favObj)
            }
           }

           onPlus={(cartObj)=>{
            onAddOverlay(cartObj)
           }}
           />
        )
      })
    }
  </div>
  )
}

export default CardItem