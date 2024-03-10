import React from 'react'
import './Projects.css'
import '../index.css'
import {Card} from './Card'
import ongoingcard from '../images/ongoingcard.png'
import nukemap3dcard from '../images/nukemap3dcard.png'
import cryptoclickercard from '../images/cryptoclickercard.png'
import personalsitecard from '../images/personalsitecard.png'

export default function Projects() {
    return (
        <div className='projects'>
            <h1 className='projects-title'>
                projects
            </h1>
            <div className='card-grid-container'>
                <div className='card-grid'>
                    <Card
                        imgSource={personalsitecard}
                        title='Personal Website'
                        desc="This website that you're looking at right now! A simple portfolio website made using React."
                        languages='JavaScript, HTML, CSS'
                        tools='React, Node.js, Git'
                    />
                    <Card 
                        imgSource={nukemap3dcard}
                        title='NUKEMAP3D/VR'
                        desc="A 3D version of Alex Wellerstein's NUKEMAP website, a web-based nuclear weapons effects simulator. Utilize OpenGL API to generate shaders that are imported on models generated by CesiumJS."
                        languages='C++, JavaScript'
                    />
                    <Card
                        imgSource={cryptoclickercard}
                        title="CryptoClicker"
                        desc="A simple clicker game that aims to show the environmental impact of mining cryptocurrencies."
                        languages='JavaScript, HTML, CSS'
                    />
                </div>
            </div>
        </div>
    );
}