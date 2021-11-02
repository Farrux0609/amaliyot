const span = document.querySelectorAll('span'),
        div = document.querySelectorAll('div');


        let l = 0;

        span[1].addEventListener('click',() =>{
            l++;
            for(let i of div){
                if(l==0){i.style.left = '0'}
                if(l==1){i.style.left = '-600px'}
                if(l==2){i.style.left = '-1200px'}
                if(l==3){i.style.left = '-1800px'}
                if(l==4){i.style.left = '-2400px'}
                if(l==5){i.style.left = '-3000px'}
                
                if(l > 5){l = 5}
            }
        })

        span[0].addEventListener('click', () =>{
            l--;
            for(let i of div){
                if(l==0){i.style.left = '0'}
                if(l==1){i.style.left = '-600px'}
                if(l==2){i.style.left = '-1200px'}
                if(l==3){i.style.left = '-1800px'}
                if(l==4){i.style.left = '-2400px'}
                if(l==5){i.style.left = '-3000px'}
        
                if(l < 0){l = 0}
            }
        })