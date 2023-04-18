import React from 'react';
import {motion} from 'framer-motion';
import '../App.css';


const Description = () => {
  return (
    <div>
    <motion.p
             initial={{
               x:1000,
               y:-1000,
               opacity:0,
               skewX:90,
               skewY:90
             }}
     
             animate={{
                 x: 20,
                 y: 20,
                 opacity: 1,
                 skewX:0,
                 skewY:0
             }}
             transition={{
               delay:0,
               duration: 1,
               type:'tween'
             }}
             >
                 <div className='desc px-5 py-3' id='desc'>
        Грузия в последнее время становится все более привлекательной страной для путешественников из России. Всему виной не только горы, которые являются главной достопримечательностью в этих краях. Гостеприимная Грузия, где чувствуешь себя, как дома, предлагает понежиться на морском побережье, прогуляться по колоритным улочкам со старинной архитектурой и запахом вкуснейшего шашлыка.
Попробуем разобраться, что находят туристы в этой стране, какие места самые красивые, а где можно получить незабываемые впечатления от случайного присутствия на каком-нибудь традиционном гулянье. Да, да, не удивляйтесь! Вас могут запросто пригласить на праздник едва знакомые люди и, это будет очень весело.
    </div>     
    </motion.p>
             
               
               <motion.div id='div2'
               initial={{
                 opacity:1,
                 x:1000,
                 y:1000,
                 skewX:180,
                 skewY:180
               }}
               animate={{
                 x:0,
                 y:0,
                 opacity:1,
                 skewX:0,
                 skewY:0
               }}
               transition={{
                 delay:0,
                 duration:1
               }}>
                 <motion.img
                 src='img/banner-new.jpeg'
                 className='banner'
                 width={850}
     
                 initial={{
                  x:0,
                  y:0,
                  opacity:1,
                  skewX:0,
                  skewY:0
                 }}
                 animate={{
                  x:0,
                  y:0,
                  opacity:1,
                  skewX:0,
                  skewY:0
                }}
                 transition={{
                   duration:3
                 }}
                 whileHover={{
                  delay:0.2,
                  scale:1.4
                 }}>

                 </motion.img>
     
               </motion.div>
               <div id='divImg'>
               <motion.div id='div3'
               initial={{
                 opacity:0,
                 scale:0.5
               }}
               animate={{
                 scale:1,
                 opacity:1
               }}
               transition={{
                 duration:2
               }}>
                 <motion.img
                 src='img/ball.jpg'
                 className='ball'
                 width={130}
     
                 initial={{
                   opacity:1,
                   x:-500,
                   y: 0
                 }}
     
                 transition={{
                   duration:3
                 }}
     
                 whileHover={{
                   y:-400,
                   rotate:360,
                   repiat:10,
                   scale:1.2,
                   transition:{
                     duration:1
                   }
                 }}/>
     
               </motion.div>
     
     
               <motion.div id='div4'
               initial={{
                 opacity:0,
                 scale:0.5
               }}
               animate={{
                 scale:1,
                 opacity:1
               }}
               transition={{
                 duration:2
               }}>
     
               </motion.div>
     
                 <motion.button className='btn btn-primary'
                 whileHover={{
                  rotate:180,
                   x:-400,
                 }}>
                 Нажми</motion.button>
                 </div>
      </div>
  )
}

export default Description