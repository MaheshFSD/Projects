const quizData=[
    {
        question: "Who is the President of The USA of 2021",
        a:'Barak Obama',
        b:'Donald Trumph',
        c:'Joe Biden',
        d:'Paris Hilton',
        correct:'c'
    },
    {
        question: "Which is the most in demand programming language in 2021",
        a:'Java',
        b:'C',
        c:'Python',
        d:'Javascript',
        correct:'d'
    },
    {
        question: "Who won best actor oscar award in 2021",
        a:'Tom Cruise',
        b:'Anthony Hopkins',
        c:'Matt Damon',
        d:'Ben Afleck',
        correct:'b'
    },
    {
        question: "Which is the costliest painting in the world",
        a:'Salvator Mundi',
        b:'Interchange',
        c:'The Card Players',
        d:'Diana and Callisto',
        correct:'a'
    },
    {
        question: "Who is the author of the last lesson",
        a:'Toni Morrison',
        b:'Salman Rushdie',
        c:'J. K. Rowling',
        d:'Alphonse Daudet',
        correct:'d'
    }
]
const qtn=document.getElementById('question')
const a_option = document.getElementById('a_option')
const b_option = document.getElementById('b_option')
const c_option = document.getElementById('c_option')
const d_option = document.getElementById('d_option')
const sub=document.getElementById('sub')
sub.addEventListener('click',loadQ)
let currentQ=0,score=0;
let answers=document.querySelectorAll('.answer')
loadQ()
function getSelected(){
    ans=undefined
    answers.forEach((answer)=>{
        if(answer.checked)
        {
            ans=answer.id
        }
    })
    return ans
}
function deSelect(){
    ans=undefined
    answers.forEach((answer)=>{
        if(answer.checked)
        {
            answer.checked=false
        }
    })
    return ans
}
function loadQ(){    
    if(currentQ<quizData.length) {
        console.log(currentQ,score)
        const q=quizData[currentQ];
        console.log(q)
        qtn.innerText=q.question;
        a_option.innerText=q.a
        b_option.innerText=q.b
        c_option.innerText=q.c
        d_option.innerText=q.d
        let selected=getSelected()
        if(selected){
            if(selected===quizData[currentQ].correct)
            score++

            currentQ++   
            if(currentQ>=quizData.length)
            {
                var scr=document.getElementById('resultOff')
                var tst=document.getElementById("quiz-container")
                // console.log(scr,tst)
                tst.classList.add('testOff')
                scr.classList.add('resultOn')
                var marks=document.getElementById('final')
                marks.innerText=score
                deSelect()
                loadQ()
            }
            else
            {
                deSelect();
                loadQ()    
            }
        }
    }
    else{   
        let fn=document.getElementById('back')
        fn.addEventListener('click', ()=>{ 
            var scr=document.getElementById('resultOff')
            var tst=document.getElementById("quiz-container")

            // console.log(tst,scr)
            tst.classList.remove('testOff')
            scr.classList.remove('resultOn')            
            // console.log(tst.scr)
            currentQ=0;
            score=0;
            loadQ()
        }
        )
    }   
    

}
