import rock from '../assets/rock.mp4'
import tokyo from '../assets/tokyo.jpg'
import phuket from '../assets/phuket.jpg'
import paris from '../assets/paris.webp'
import norway from '../assets/norway.webp'
import maldives from '../assets/maldives.jpg'
import bali from '../assets/Bali.jpg'
import safety from '../assets/safety.svg'
import suitcase1 from '../assets/suitcase1.svg'
import world from '../assets/world.svg'
import stockholm from '../assets/stockholm.jpg'
import fiji from '../assets/fiji.jpg'
import kazakhstan from '../assets/kazakhstan.jpg'
import { DatePicker, Input } from 'antd';
import Card from '../components/Card'
const { RangePicker } = DatePicker;

export default function Main(){
    const tours = [{img: tokyo, name: "Tokyo", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 679}, {img: bali, name: "Bali", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 569},
                   {img: norway, name: "Norway", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 879}, {img: phuket, name: "Phuket", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 479},
                   {img: paris, name: "Paris", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 659}, {img: maldives, name: "Maldives", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 879} 
                   ]
    const onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      };

      const onOk = (value) => {
        console.log('onOk: ', value);
      };

      


    return(
        <main className="main">
               <section className="about">
                     <div className="video">
                        <div className="video-wrapper">
                            <video className="video_media" src={rock} autoPlay muted loop />
                        </div>
                     </div>
                     <div className='about-text'>
                        <div className='text-wrapper'>
                            <h1>Love is a food of life, Travel is dessert</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue neque ac massa volutpat fermentum. Curabitur sit amet faucibus enim. Nullam sit amet aliquet massa. Nunc nec sodales dui. Phasellus non tellus pharetra, suscipit tellus nec, semper tortor. Vestibulum efficitur velit ac mi pretium convallis.</p>
                            <button>Read more</button>
                        </div>
                     </div>
                     <form className='form'>
                        <label>
                            Check in
                            <RangePicker
                                showTime={{ format: 'HH:mm' }}
                                format="YYYY-MM-DD HH:mm"
                                onChange={onChange}
                                onOk={onOk}
                            />
                        </label>
                        <label>
                            Destination
                            <Input placeholder="Enter city" />
                        </label>
                        <label>
                            Adults
                            <Input placeholder="00" type='number' name="adults"/>
                        </label>
                        <label>
                            Children
                            <Input placeholder="00" type='number' name="adults"/>
                        </label>
                        <button>Search</button>
                     </form>
               </section>

               <section className='tours'>
                      <h3>SIMPLY AMAZING PLACES</h3>
                      <h1>POPULAR DESTINATIONS</h1>
                      <div className='tours-item'>
                            {
                                tours.map((item, index) => {
                                    return (
                                        <Card key={index} img={item.img} name={item.name} descr={item.descr} price={item.price}></Card>
                                    )
                            })
                            }
                      </div>
               </section>
               <section className='choice'>
                    <div className='choice-text'>
                          <h1>Why Choose Us?</h1>
                          <h3>Enjoy your holiday with us</h3>
                    </div>
                    <div className='choice-info'>
                        <div className='choice-items'>
                            <span>
                                <img src={safety} alt="Safety"/>
                            </span>
                            <span>
                                Safety Guarantee
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a lectus vulputate, imperdiet nibh commodo, placerat dolor.</p>
                            </span>
                        </div>

                        <div className='choice-items'>
                            <span>
                                <img src={world} alt="Safety"/>
                            </span>
                            <span>
                                Variety of destinations
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a lectus vulputate, imperdiet nibh commodo, placerat dolor.</p>
                            </span>
                        </div>

                        <div className='choice-items'>
                            <span>
                                <img src={suitcase1} alt="Safety"/>
                            </span>
                            <span>
                                Affordable Price
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a lectus vulputate, imperdiet nibh commodo, placerat dolor.</p>
                            </span>
                        </div>
                     </div>
               </section>

               <section className='hot-prices'>
                    <div className='prices-text'>
                        <h1>Hot Prices</h1>
                        <h3>Live a life with a moment</h3>
                    </div>
                    <div className='hot-prices-items'>
                          <div>
                             <div className='prices-items--photo'>
                                <img src={stockholm} alt=""/>
                             </div>
                             <div className='prices-items--info'>
                                <h3>590$</h3>
                                <h1>Stockholm</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a lectus vulputate, imperdiet nibh commodo, placerat dolor.</p>
                             </div>
                          </div>

                          <div>
                             <div className='prices-items--info'>
                                <h3>590$</h3>
                                <h1>Fiji Island</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a lectus vulputate, imperdiet nibh commodo, placerat dolor.</p>
                             </div>
                             <div className='prices-items--photo'>
                                <img src={fiji} alt=""/>
                             </div>
                          </div>

                          <div>
                             <div className='prices-items--photo'>
                                <img src={kazakhstan} alt=""/>
                             </div>
                             <div className='prices-items--info'>
                                <h3>590$</h3>
                                <h1>Kazakhstan</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a lectus vulputate, imperdiet nibh commodo, placerat dolor.</p>
                             </div>
                          </div>
                    </div>
               </section>               
        </main>
    )
}