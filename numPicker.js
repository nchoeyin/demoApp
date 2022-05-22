function getNum()
{
    return Math.floor(Math.random()*10)+1;
}
class NumPicker extends React.Component{
render() {
    const num=getNum();
    let msg;
    if(num==7)
    {
        msg= <div>
                 <h2>Congratulations!</h2>
                 <img src ="winner.webp"/>
             </div>
    }
    else
    {
        msg = 
        <div>
            <p>Sorry You lose!!</p>
            <img src ="loser.webp"/>
         </div>
    }
    return (
              <div>
                  <h1> Your num is {num}</h1>
                  {msg}
              </div>
            
           );
         }
}