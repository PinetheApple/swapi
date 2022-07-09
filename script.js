"use strict";

const btn = document.querySelector('.button');
const info=document.querySelector('.info')
const char_name=document.querySelector('.name')
const char_yob = document.querySelector('.birthyear')
const char_height = document.querySelector('.height')
const char_hcolor = document.querySelector('.hair_c')
const char_gender = document.querySelector('.gender')
const char_planet = document.querySelector('.homeworld')

btn.addEventListener('click', e => {

    // 83 characters
    let randomNum = Math.ceil(Math.random()*83)

    fetch(`https://swapi.dev/api/people/${randomNum}/`)
        .then(response => response.json())
        .then(data => {
            const {name, height, hair_color, birth_year, gender, homeworld} = data
            let person_name=name
            fetch(homeworld)
                .then(response => response.json())
                .then(data2 =>{
                    const {name}=data2
                    char_name.innerHTML = person_name
                    char_yob.innerHTML = birth_year
                    char_height.innerHTML = height
                    char_hcolor.innerHTML = hair_color
                    char_gender.innerHTML = gender
                    char_planet.innerHTML = name
                    
                    if(!info.classList.contains('visible'))
                    {
                        info.classList.add('visible')
                    }

                })
        })
})