import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <footer className='row row-col-cols-1 row-cols-sm-3 row-cols-md-6 py-3 my-3 border-top'>
            <div className='col mb-3'>
                  <a className=''>
                      <img src='img/logo1.png' className='bi me-2' width={180} height={180}>
                      </img>
                  </a>
                <p>
                  A&B - надежный друг
                </p>
            </div>
                   <div className='col mb-3'>

                  </div>
                    <div className='col-6 col-md-4'>
                        <h5>Туристам</h5>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> Акции</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Подбор тура</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Отзывы и предложения</a>
                          </li>
                        </ul>
                    </div>

                    <div className='col-6 col-md-4'>
                        <h5>Корпоративным клиентам</h5>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> Корпоративные программы</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Оформление заявки</a>
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