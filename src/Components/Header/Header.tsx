import React from 'react';
import Typewriter from 'typewriter-effect';
import style from './header.module.scss'
export default function Header() {
const guessts = window.location.pathname.split('').slice(1);

  return (
    <div className={style.container}>
        <div className={style.textContainer}>
        <p>Дорогие</p>
            <p><strong>{guessts}</strong></p>
            <p>Приглашаем Вас на свадебное торжество по случаю нашего бракосочетания</p>
            <p></p>
            <Typewriter
              options={{
              strings: ['С уважением Марат Айгул'],
              autoStart: true,
              loop: true,
            }}
            />
          <div className={style.navBtn}>
            <a href="#where">Где</a>
            <a href="#when">Когда</a>
          </div>
        </div>
    </div>
  )
}
