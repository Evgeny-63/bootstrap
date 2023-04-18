import React from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css'
import axios from 'axios'
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    Tooltip,
    CircleMarker,
    Polygon
} from 'react-leaflet'
import "../App.css"

const colorOptions={color:'purple'}
const centerPolygon=[
    [
        [53.2, 48.1],
        [53.2, 48.8],
        [53.0, 48.8],
        [53.0, 48.1]
    ]
]
const center=[53.1, 48.4]
const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
      axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/form', data)
      alert('Заявка отправлена')
      console.log(data);

  }
return (
  <div className='card w-50 md-6 rounded border-primary col-md-8 offset-md-3 my-3 p-3 text-center text-secondary'>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Заполните заявку на обратную связь</h3>

      {/*Фамилия*/}
      <div className='input-group mb-3'>
        <input
          {
            ...register('lastName', {
              required: true,
              maxLength: 50,
              pattern: /^[A-z]+$/
            })}
              type="text"
              className="form-control border-primary"
              placeholder="Фамилия"
          />  
      </div>
      {errors?.lastName?.type==='required' && (
      <p className='text-danger'>Поле обязательно для заполнения</p>
      )}
      {errors?.lastName?.type==='maxLength' && (
      <p className='text-danger'>Поле не может содержать более 50 символов</p>
      )}
      {errors?.lastName?.type==='pattern' && (
      <p className='text-danger'>Поле заполнено некорректно</p>
      )}  

      {/*Имя*/}
      <div className='input-group mb-3'>
        <input
          {
            ...register('firstName', {
              required: true,
              maxLength: 50,
              pattern: /^[А-Яа-я]+$/
            })}
              type="text"
              className="form-control border-primary"
              placeholder="Имя"
          />  
      </div>
      {errors?.firstName?.type==='required' && (
      <p className='text-danger'>Поле обязательно для заполнения</p>
      )}
      {errors?.firstName?.type==='maxLength' && (
      <p className='text-danger'>Поле не может содержать более 50 символов</p>
      )}
      {errors?.firstName?.type==='pattern' && (
      <p className='text-danger'>Поле заполнено некорректно</p>
      )}  

      {/*Отчество*/}
      <div className='input-group mb-3'>
        <input
          {
            ...register('middleName', {
              required: true,
              maxLength: 50,
              pattern: /^[А-Яа-я]+$/
            })}
              type="text"
              className="form-control border-primary"
              placeholder="Отчество"
          />  
      </div>
      {errors?.middleName?.type==='required' && (
      <p className='text-danger'>Поле обязательно для заполнения</p>
      )}
      {errors?.middleName?.type==='maxLength' && (
      <p className='text-danger'>Поле не может содержать более 50 символов</p>
      )}
      {errors?.middleName?.type==='pattern' && (
      <p className='text-danger'>Поле заполнено некорректно</p>
      )}  

    {/*Email*/}
      <div className='input-group mb-3'>
        <input
          {
            ...register('email', {
              required: true,
              maxLength: 50,
              pattern: /^[A-Za-z@.-_]+$/i
            })}
              type="text"
              className="form-control border-primary"
              placeholder="Email"
          />  
      </div>
      {errors?.email?.type==='required' && (
      <p className='text-danger'>Поле обязательно для заполнения</p>
      )}
      {errors?.email?.type==='maxLength' && (
      <p className='text-danger'>Поле не может содержать более 50 символов</p>
      )}
      {errors?.email?.type==='pattern'&&(
      <p className='text-danger'>Поле заполнено некорректно</p>
      )} 

      <input className='btn btn-outline-primary' type="submit" />
      </form>
      <br></br>
        <MapContainer
        center={center}
        zoom={10}
        style={{
            width:'100vw',
            height:"500px"
        }}
        >
            <TileLayer
            url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=baBC3t9J46G3egoyg6Rg'
           attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
           />

            <CircleMarker
            center={center}
            pathOptions={{color:'black'}}
            radius={10}
            />

           <Marker position={center}>
            <Popup>
                Мы находимся тут 
            </Popup>
            <Tooltip>При наведении</Tooltip>
           </Marker>

           <Polygon positions={centerPolygon} pathOptions={colorOptions}/>
        </MapContainer>
    </div>
  )
}

export default Form