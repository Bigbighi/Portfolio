import {useEffect} from 'react'
import Spotify from './imgs/spotify-1.png'
import Franguinho from './imgs/franguinho.png'
import style from './projects-style.module.css'

export default function projects () {

    const projects = [
        {
            nomeProjeto :'Cópia spotify',
            descricao: 'Uma cópia do spotify feita com HTML, CSS Boostrap.',
            linkGithub: 'https://github.com/Bigbighi/SpotifyCopy-frontEnd',
            linkPreview: 'https://spotify-copy-pi.vercel.app/',
            img: Spotify
        },

        {
            nomeProjeto :'Franguinho',
            descricao: 'Um projeto criado por mim, utilizando React e Css puro.',
            linkGithub: 'https://github.com/Bigbighi/projeto-franguinho',
            linkPreview: 'https://projeto-franguinho.vercel.app/',
            img: Franguinho
        },

        
    ]

    const mostraProjetos = () => {
        const divProjetos = document.getElementById('projetos');
        divProjetos.innerHTML = '';

        projects.map((pecorrer) => {
            divProjetos.innerHTML += `
                <div class='${style.Sombra} ${style.cor} p-5'>
                    <h1 class="text-center text-2xl mb-2">${pecorrer?.nomeProjeto}</h1>
                    <img src=${pecorrer?.img} class='mx-auto' alt="Spotify" width='350'/>
                    <p class='text-center'>${pecorrer?.descricao}</p>
                    <div class="mt-2">
                        <div class="flex justify-center">
                            <button class="bg-blue-500 rounded-s py-2 px-3 hover:bg-blue-400">
                                <a href="${pecorrer.linkGithub}" target="_blank">Github</a>
                            </button>

                            <div class="h-auto border-r"></div>

                            <button class="bg-blue-500 rounded-e py-2 px-3 hover:bg-blue-400">
                                <a href="${pecorrer.linkPreview}" target="_blank">Preview</a>
                            </button>
                        </div>
                    </div>
                </div>
            `
        })
    }

    useEffect(() => {
        mostraProjetos();
    }, []);

    return(
        <section id="projects" className='mt-24'>
            <div className="mx-10">
                <h1 className=' text-4xl text-center'><span className='border-b'>Projetos</span></h1>
                <div className={`w-11/12 mx-auto mt-10 p-5`}>
                <div id="projetos" className='grid grid-col-1 lg:grid-cols-2 gap-10'></div>
                </div>
            </div>
            <a href=""></a>
        </section>
    )
}