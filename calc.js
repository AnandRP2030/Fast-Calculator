function sum(){
    let number1 = ( document.getElementById( "num1" ).value );
    let number2 = ( document.getElementById( "num2" ).value );  
    let sumAns = parseInt(number1) +  parseInt(number2) ;
    console.log( "ans is "+sumAns);

    // display ans inside the box
    document.getElementById( "ansBox" ).textContent = sumAns;
}

function sub(){
    number1 = ( document.getElementById( 'num1' ).value ); 
    number2 = ( document.getElementById( 'num2' ).value );
    let subAns = parseInt( number1 ) - parseInt( number2 );
    console.log( "ans is "+subAns );

    // display the ans inside box
    document.getElementById("ansBox").innerHTML = subAns;

}

function mul(){
    number1 = document.getElementById( 'num1' ).value;
    number2 = document.getElementById( 'num2' ).value;
    let mulAns = parseInt( number1 ) * ( number2 );
    console.log( "ans is "+mulAns );
    document.getElementById('ansBox').innerHTML = mulAns;

}

function div(){
    number1 = document.getElementById( 'num1' ).value;
    number2 = document.getElementById( 'num2' ).value;
    let divAns = Math.floor( parseInt( number1 ) / ( number2 ) );
    console.log( "ans is " +divAns );
    document.getElementById('ansBox').textContent = divAns;
}
