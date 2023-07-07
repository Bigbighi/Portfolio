import {FaBars} from 'react-icons/fa';
import style from './style-header.module.css'
import portfolio from '../../assets/Portfólio-isaacBighi.pdf'

import {BiLogoGmail,
     BiLogoLinkedinSquare, 
     BiPhone, 
     BiLogoReact, 
     BiLogoJavascript,
     BiLogoTailwindCss,
     BiLogoGithub} from 'react-icons/bi'

export default function Main () {

    function nav () {
        const navbar = document.getElementById('navbar');
        const buttonNavBar = document.getElementById('buttonNavBar');

        buttonNavBar?.classList.toggle('hidden');
        navbar?.classList.toggle('hidden');
    }

    return(
        <main className="flex flex-col" id='principal'>
            <div className="mt-12 relative">
                <div className="flex justify-between">
                    <h1 className="ml-10 font-bold text-xl">Isaac Bighi</h1>

                    <button className="mr-10 block md:hidden" id='buttonNavBar' onClick={nav}>
                        <FaBars className="hover:text-blue-200 transition-colors text-xl"/>
                    </button>

                    <div className="hidden md:block md:mr-10 absolute right-3" id="navbar">
                        <ul className="flex flex-col md:flex-row gap-5 border border-white p-2 rounded-md">
                            <li className="font-semibold rounded px-2 hover:bg-blue-200">
                                <a href="#principal">Principal</a>
                            </li>
                            <li className="font-semibold rounded px-2 hover:bg-blue-200">
                                <a href="#resumo">Resumo</a>
                            </li>
                            <li className="font-semibold rounded px-2 hover:bg-blue-200">
                                <a href="#projects">Projetos</a>
                            </li>
                            <li className="font-semibold rounded px-2 hover:bg-blue-200">
                                <a href={portfolio} download>Baixar CV</a>
                            </li>
                            <li className='font-semibold text-center block md:hidden'>
                                <button className="hover:bg-blue-200 rounded-full px-2" onClick={nav}>X</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> {/*Cabecalho*/}

            <div className='flex-1 flex justify-center items-center'>
                <div className={`${style.dropAnimation} mb-32 md:mb-0`}>
                    <h1 className=' text-xl font-semibold inline-block mb-3 md:mb-6'>Olá, sou <span className='border-b border-white'>Isaac Bighi.</span></h1>
                    <br />
                    <h1 className={`-mt-7 text-3xl md:text-6xl font-semibold inline-block ${style.sombra}`}>React Developer</h1>
                    <div className='mt-2 flex gap-3'>
                        <BiLogoJavascript fontSize="3em"/>
                        <BiLogoReact fontSize="3em"/>
                        <BiLogoTailwindCss fontSize="3em"/>
                        <BiLogoGithub fontSize='3em'/>
                    </div>
                </div>

                <div className='absolute bottom-10  md:bottom-10 md:right-10'>{/*parte lateral/baixo */}
                <div>
                    <h1 className='block md:hidden text-center text-lg font-semibold'>Contato</h1>
                    <ul className='flex md:block'>
                        <h1 className=' hidden md:block md:rotate-90 md:mb-8 md:text-lg md:font-semibold'>Contato</h1>
                        <div className='hidden md:block w-1 bg-white h-20 mx-auto rounded-full'></div>
                        
                        <li className='flex justify-center'>
                            <a href="mailto:bighisaac@gmail.com" className='p-2 md:p-1  rounded-full text-2xl md:mt-2 hover:bg-blue-200'>
                                <BiLogoGmail/>
                            </a>
                        </li>

                        <li className='flex justify-center'>
                            <a href="https://www.linkedin.com/in/isaac-bighi-2881a5247/" target='_blank' className='p-2 md:p-1  rounded-full text-2xl md:mt-2 hover:bg-blue-200'>
                                <BiLogoLinkedinSquare/>
                            </a>
                        </li>

                        <li className='flex justify-center'>
                            <a href="tel:+5528981137507" className='p-2 md:p-1 rounded-full text-2xl md:mt-2 hover:bg-blue-200'>
                                <BiPhone/>
                            </a>
                        </li>

                        <li className='flex justify-center'>
                            <a href="https://github.com/Bigbighi"target='_blank' className='p-2 md:p-1 rounded-full text-2xl md:mt-2 hover:bg-blue-200'>
                                <BiLogoGithub/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>

           
        </main>
    )
}