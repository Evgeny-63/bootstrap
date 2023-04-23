import React, { useState } from 'react'
import {motion} from 'framer-motion';
import '../../App.css'
import { AppContext } from '../../App';

const Item = (props) => {

    const context = React.useContext(AppContext)

    const [added, setAdded ] = useState(context.isAdded);


    const onClickAdd =()=>{
        setAdded(!added);
        let id = props.id;
        let myId = props.myId;
        let title = props.title;
        let description = props.description;
        let price = props.price;
        let img = props.img;
        props.onPlus({title, description, price, img,id, myId});
    }

  return ( 

    <div className='conteiner py-3 my-5' id={props.myId}>
       
    <main>
        <div className='row row-cols-1 justify-content-evenly 
        row-cols-md-3 row-cols-sm-2 text-center '>



            <div className='col col-md-4 p-3 '>
                <div className='md-3'>
                    <div className='py-2 px-3 justify-content-center'>

                        <div className='bg-primary rounded fs-3 w-50'>
                            <p>Кэшбэк 10%</p>
                        </div>

 {/*                       {context.isFav(props.myId) == true ?
                            <button type='button' className='w-100 btn btn-lg       btn-primary' 
                                onClick={onClickFav}>Добавлен в избранное
                            </button>
                            :
                            <button 
                                    type='button' className='w-100 btn btn-lg btn-primary'
                                    onClick={onClickFav}>Добавить в избранное
                            </button>
                        }
*/}
                
                <motion.img className='rounded' src={props.img} width={'85%'}
                    initial={{
                    x:0,
                    y:0,
                    }}
                    transition={{
                    duration:2
                    }}
                    whileTap={{
                    scale:2,
                    x:500,
                    y:-100,
                    zOrder:0
                 }}></motion.img>

                        

                    </div>

                </div>
            </div>
            <div className='col col-md-4 p-3 fs-5 my-auto'>
                <p className='text-md-start fw-bold'>{props.title}</p>
                <div className='text-md-start pb-3'>
                <img width={25} src='/img/iconRS.png' alt=""/>
                <img width={25} src='/img/iconRS.png' alt=""/>
                <img width={25} src='/img/iconRS.png' alt=""/>
                <img width={25} src='/img/iconRS.png' alt=""/>
                &nbsp;&nbsp;&nbsp;16 отзывов    
                </div>
                
                <p className='text-md-start'><span className='text-secondary'>Экран: </span>{props.description} Пикс</p>
                <p className='text-md-start'><span className='text-secondary'>Технология экрана: </span>{props.technology}</p>
                <p className='text-md-start'><span className='text-secondary'>Тип процессора: </span>{props.processor}</p>
                <p className='text-md-start'><span className='text-secondary'>Встроенная память (ROM): </span>{props.memory} ГБ</p>
                <p className='text-md-start'><span className='text-secondary'>Основная камера МПикс: </span>{props.camera}</p>



            </div>    
            <div className='col col-md-4 p-3 '>
                    <p className='fs-2 '>{props.price}&nbsp;&nbsp;&nbsp;<span className='text-secondary text-decoration-line-through fst-italic fs-4'>{props.old_price}</span></p>
                    <p className='fs-4 text-secondary '><span className='text-danger'>+ 3500 </span>Бонусных рублей</p>
                    <button type='button' className='w-50 btn btn-lg btn-danger'
                        onClick={onClickAdd} > { context.isAdded(props.myId) ?  
                        <img width={25}
                        src={context.isAdded(props.myId) ? '/img/icon.png':'' }
                        alt=""/>:'В корзину' }                 
                </button>
                    <br></br><br></br>
                    <p className='text-md-start'>Самовывоз за 15 минут из 6 магазинов SmartShop Сегодня, бесплатно</p>
                    <p className='text-md-start'>Доставка Завтра, бесплатно</p>
                    <p className='text-md-start'>Экспресс-доставка от 2 часов сегодня после 10:00, бесплатно. После онлайн-оплаты</p>
                    

            </div>    


        </div>
    </main>
</div>
  )
}

export default Item