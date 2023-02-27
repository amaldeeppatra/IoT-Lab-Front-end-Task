document.querySelector("#carousel1right").addEventListener('click', function(){
    var i;
    for(i=0; i<4; i++){
        document.querySelectorAll('.helmettext')[i].innerHTML="Molestias deleniti, sapiente a dignissimos in iste! Lorem ipsum dolor consectetur, adipisicing elit.";
        document.querySelectorAll('.helmetdate')[i].innerHTML="By Aman, 19/02/2022";
        document.querySelectorAll('.helmetpic')[i].outerHTML='<img src="images/hammer.jpg" class="helmetpic" alt="" width="280.51px" height="214.05px">';
    }
})

document.querySelector("#carousel1left").addEventListener('click', function(){
    var i;
    for(i=0; i<4; i++){
        document.querySelectorAll('.helmettext')[i].innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non sapien auctor.";
        document.querySelectorAll('.helmetdate')[i].innerHTML="By Himanshu , 03/02/2022";
        document.querySelectorAll('.helmetpic')[i].outerHTML='<img src="images/helmet.png" class="helmetpic" alt="">';
    }
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// const searchHandler = ()=>{
//     window.open("./search.html")
// }

// async function demo() {
//     for (let i = 0; i < 5; i++) {
//         console.log(`Waiting ${i} seconds...`);
//         await sleep(i * 1000);
//     }
//     console.log('Done');
// }

// demo();

async function timer(){
    var i = 0;
    document.querySelector('.d4').style.background='#037FFB';
    document.querySelector('.d5').style.background='#C4C4C4';
    document.querySelector('.d6').style.background='#C4C4C4';
    for (i; i<100000000000000000000000000000000000000000000000000000000000000000000;){
        for (var i=0; i<3; i++){
            // console.log(`Waiting ${i} seconds...`);
            await sleep(i*1000);
        }
        for(var i=0; i<2; i++){
            document.querySelector('.d4').style.background='#C4C4C4';
            document.querySelector('.d5').style.background='#037FFB';
            document.querySelector('.d6').style.background='#C4C4C4';
            document.querySelectorAll('.sixthpt')[i].innerHTML='<img src="images/rick astley.png" alt="" style="width: 98.06px; height: 98.06px;"><p>Rick Astley</p><p>Singer</p><div><p>Never gonna give you up. Never gonna let you down. Never gonna run around and desert you. Never gonna make you cry. Never gonna say goodbye.</p></div>';
        }
        for (var i=0; i<3; i++){
            // console.log(`Waiting ${i} seconds...`);
            await sleep(i*1000);
        }
        for(var i=0; i<2; i++){
            document.querySelector('.d4').style.background='#C4C4C4';
            document.querySelector('.d5').style.background='#C4C4C4';
            document.querySelector('.d6').style.background='#037FFB';
            document.querySelectorAll('.sixthpt')[i].innerHTML='<img src="images/sixth pic2.png" alt="" style="width: 98.06px; height: 98.06px;"><p>Jacob Müller</p><p>Developer</p><div><p>Neque, orci faucibus sit feugiat gravida urna. Tristique volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pulvinar ipsum at nunc.</p></div>';
        }
        for (var i=0; i<3; i++){
            // console.log(`Waiting ${i} seconds...`);
            await sleep(i*1000);
        }
        for(var i=0; i<2; i++){
            document.querySelector('.d4').style.background='#037FFB';
            document.querySelector('.d5').style.background='#C4C4C4';
            document.querySelector('.d6').style.background='#C4C4C4';
            document.querySelectorAll('.sixthpt')[i].innerHTML='<img src="images/sixth pic.png" alt="" style="width: 98.06px; height: 98.06px;"><p>Ricky Master</p><p>Developer</p><div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pulvinar ipsum at nunc. Neque, orci faucibus sit feugiat gravida urna. Tristique volutpat.</p></div>';
        }
    }
}

timer();