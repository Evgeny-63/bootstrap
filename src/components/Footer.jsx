import React from 'react'

const Footer = () => {
  return (
    <div className='container'  width={'100%'}>
        <footer className='row  py-3 my-3 bg-warning'>
            <div className='col mb-3 mx-3 '>
                  <a className=''>
                      <img src='img/ss.png' className='bi me-2' width={180} height={100}>
                      </img>
                  </a>
            </div>
                   <div className='col col-md-3'>
                    <p>тел: (999) 800-12-34</p>
                    <p>E-mail: s-shop@gmail.com</p>
                  </div>
                    <div className='col col-md-3'>
                        <h5>Покупателям</h5>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> Акции</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Подбор смартфона</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Отзывы и предложения</a>
                          </li>
                        </ul>
                    </div>

                    <div className='col col-md-3'>
                        <h5>Корпоративным клиентам</h5>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> Корпоративные программы</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Франчайзинг</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Сотрудничество</a>
                          </li>
                        </ul>
                    </div>
          
        </footer>
    </div>
  )
}

export default Footer