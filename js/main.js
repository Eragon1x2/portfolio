AOS.init();
const link_next = document.querySelector('.header-nav');
const links = document.querySelectorAll('.header-nav a');
const blocks = document.querySelectorAll('.block');
const p = document.querySelector('.left_panel p');
const h5_p = document.querySelector('.left_panel h5')
const a = document.querySelectorAll('a');
const border_img = document.querySelector('.left_panel div');
const footer_icon = document.querySelectorAll('.list_gg a span img');
const footer_button = document.querySelector('.footer_list li button');
const block_next = document.querySelector('.block_next');
for (index = 0; index < links.length; index++) {
    const navs = links[index];
    navs.addEventListener('click', function (event) {
        event.preventDefault();
        links.forEach(a => {
            a.style.scale = '0.9';
        })
        event.target.style.scale = '1.2';
        for(gg = 0; gg < blocks.length; gg++) {
            const block = blocks[gg];
            if(block.id === event.target.id) {
                block.style.display = 'block';
                if(block.id === 'portfolio') {
                    block_next.classList.remove('animate__backInRight');
                    block_next.classList.add('animate__backInLeft');
                    border_img.style.border = '2px solid yellow';
                        p.style.color = 'yellow';
                        h5_p.style.color = 'yellow';
                        for(b = 0; b < a.length; b++) {
                            a[b].style.color = 'yellow';
                        }
                        footer_icon.forEach(b => {
                            b.style.backgroundColor = 'rgb(255, 255, 206)';
                        })
                        footer_button.style.backgroundColor = 'rgb(255, 255, 206)';
                        }
                    if(block.id === 'about') {
                
                        border_img.style.border = '2px solid #39ff14';
                            p.style.color = '#39ff14';
                            h5_p.style.color = '#39ff14';
                            for(b = 0; b < a.length; b++) {
                                a[b].style.color = '#39ff14';
                            }
                            footer_icon.forEach(b => {
                                b.style.backgroundColor = 'rgb(207, 255, 202)';
                            })
                            footer_button.style.backgroundColor = 'rgb(207, 255, 202)';
                }
            }
            else {
                block.style.display = 'none';
            }
        }
    });
}
const up = document.querySelector('.up').onclick =() => {
    window.scrollTo(0,0)
}



// const sho = document.querySelector('.sho');
// const govno = document.querySelector('.main-givno');
// // sho.addEventListener('click', (e) => {
// //     console.log(e);
// // })
// window.addEventListener('scroll', (e) => {
//     setTimeout(() => {
//         if(window.scrollY > 700) {
//             border_img.style.border = '2px solid yellow';
//             p.style.color = 'yellow';
//             for(b = 0; b < a.length; b++) {
//                 a[b].style.color = 'yellow';
//             }
//             footer_icon.forEach(b => {
//                 b.style.backgroundColor = 'rgb(255, 255, 206)';
//             })
//             footer_button.style.backgroundColor = 'rgb(255, 255, 206)';
//         }
//         if(window.scrollY < 500) {
//             border_img.style.border = '2px solid #39ff14';
//                                 p.style.color = '#39ff14';
//                                 for(b = 0; b < a.length; b++) {
//                                     a[b].style.color = '#39ff14';
//                                 }
//                                 footer_icon.forEach(b => {
//                                     b.style.backgroundColor = 'rgb(207, 255, 202)';
//                                 })
//                                 footer_button.style.backgroundColor = 'rgb(207, 255, 202)';
//         }
//     },500)
// })

// const nervous = document.querySelector('.funny_nervous');
// window.addEventListener('scroll',gg)

// function gg(e) {
//     setTimeout(() => {
//         if(window.scrollY < 200) {
//             window.addEventListener('scroll', gg)
//         }
//         if(window.scrollY > 150) {
//             console.log(true);
//             window.removeEventListener('scroll',gg)
//             var func = function(i) {
//                 let gg = function(){
//                     nervous.innerHTML = i;
//                  }
//                 let timeoutID = window.setTimeout(gg, 40 * i);
//                 if(i > 499) {
//                     window.clearTimeout(timeoutID);
//                 }
//               };
//               for(i = 1; i < 501;i++){
//                 func(i)
//               };
//         }
//     }, 500)
// }

const burger = document.querySelector('.header_mobile_button');
const close_burger = document.querySelector('.close_left_panel')
const left_panel = document.querySelector('.left_panel');
burger.addEventListener('click', (e) => {
    left_panel.style.display = 'flex';
})
close_burger.addEventListener('click', (e) => {
    left_panel.style.display = 'none';
}) 