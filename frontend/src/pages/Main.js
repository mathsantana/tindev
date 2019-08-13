import React from 'react';
import './Main.css';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';


export default function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/40031356?v=4" alt="" />
                    <footer>
                        <strong>Matheus Santana</strong>
                        <p>Computer Science Student - UFCG</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt='dislike' />
                        </button>
                        <button type="button">
                            <img src={like} alt='like' />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/40031356?v=4" alt="" />
                    <footer>
                        <strong>Matheus Santana</strong>
                        <p>Computer Science Student - UFCG</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt='dislike' />
                        </button>
                        <button type="button">
                            <img src={like} alt='like' />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/40031356?v=4" alt="" />
                    <footer>
                        <strong>Matheus Santana</strong>
                        <p>Computer Science Student - UFCG</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt='dislike' />
                        </button>
                        <button type="button">
                            <img src={like} alt='like' />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/40031356?v=4" alt="" />
                    <footer>
                        <strong>Matheus Santana</strong>
                        <p>Computer Science Student - UFCG</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt='dislike' />
                        </button>
                        <button type="button">
                            <img src={like} alt='like' />
                        </button>
                    </div>
                </li>
            </ul>
        </div> 
    );

};