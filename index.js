
function receivesAFunction(funX){
    funX();
}

function returnsANamedFunction(){
    return (function fn(){})
}

function returnsAnAnonymousFunction(){
    return(()=>{})
}