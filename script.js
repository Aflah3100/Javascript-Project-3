function gameplay(choice) {

    let humanchoice,botchoice;
    humanchoice =choice.id;
    console.log("Human,s choice: " + humanchoice);
    botchoice=compsel(randnumgen());
    console.log("Computer's selection: " +botchoice);
    result= winnerdecide(humanchoice,botchoice);
    console.log("Score of the player: "+result);
    final=finalmessage(result);
    console.log(final);
    frontenddisplay(final,humanchoice,botchoice);
}

function randnumgen(){
    let randomnum=Math.floor(Math.random()*3)
    return randomnum;
}
function compsel(number){
    let options=['rock','paper','scissors']
    return options[number]
}
function winnerdecide(humanchoice,botchoice){

    let gamedatabase={
        'rock':{'paper':0, 'scissors': 1, 'rock': 0.5},
        'paper':{'scissors': 0 , 'rock': 1 , 'paper':0.5},
        'scissors':{'rock': 0 , 'paper': 1, 'scissors':0.5}
    }

    yourscore=gamedatabase[humanchoice][botchoice];
    botscore=gamedatabase[botchoice][humanchoice];

    let score=[yourscore,botscore];

    return score

}
function finalmessage(result){
    if(result[0]==0){
        return {'message':'You,ve LOST! ', 'color': 'red'}
    }else if(result[0]==1){
        return {'message':'You,ve WON! ', 'color': 'green'}
    }else if(result[0]==0.5){
        return {'message':'You,ve TIED! ','color': 'yellow'}
    }

}
function frontenddisplay(message,humanchoice,botchoice){
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let ourseldiv=document.createElement('div');
    let blankdiv=document.createElement('div');
    let botseldiv=document.createElement('div');
    let head1=document.createElement('h1');
    let head2=document.createElement('h1');
    let result=document.createElement('div');
    let button=document.createElement('button');
    head1.innerHTML=" Your choice:  "
    head2.innerHTML=" Opp Choice: "
    head1.setAttribute('class','text-success')
    head2.setAttribute('class','text-danger')
    button.setAttribute('class','btn btn-success')
    button.setAttribute('onclick','window.location.reload()')
    ourseldiv.innerHTML="<img src='"+humanchoice+".jpeg' width=150 height=150 </img>"
    botseldiv.innerHTML="<img src='"+botchoice+".jpeg' width=150 height=150 </img>"
    result.innerHTML="<h1 style=color:"+message['color']+">"+message['message']+"</h1>"
    button.innerHTML="<b> Play Again  </b>"
    document.getElementById('out1').appendChild(head1)
    document.getElementById('out1').appendChild(ourseldiv)
    document.getElementById('out2').appendChild(button)
    document.getElementById('out3').appendChild(head2)
    document.getElementById('out3').appendChild(botseldiv)
    document.getElementById('output').appendChild(result)
    
    
    
    
    



}