import isaac from '../../assets/isaac.jpg'
import style from './style-section1.module.css'

export default function Aside () {

    return(
        <section className='flex justify-center items-center' id='resumo'>
            <div className={`block m-5 md:w-1/2  p-4 ${style.Sombra}`}  p-5 m-10 rounded-xl style={{background: '#0000006f'}}>
                <img src={isaac} width={120} alt="" className='mx-auto rounded-full'/>
                <h1 className='text-center font-semibold'>Olá, meu nome é Isaac Bighi</h1>
                <p>Sou um desenvolvedor Front-end apaixonado por programação, sempre buscando novos desafios e projetos para desenvolver minhas habilidades. Sou proativo, criativo e capaz de resolver problemas eficientemente. Acredito na colaboração em equipe e sou flexível para lidar com mudanças.</p>
                
                <ul>
                    <li className='list-disc ml-5'>Proativo</li>
                    <li className='list-disc ml-5'>Trabalho em equipe</li>
                    <li className='list-disc ml-5'>Flexível</li>
                    <li className='list-disc ml-5'>Criativo</li>
                </ul>
            </div>
        </section>
    )
}