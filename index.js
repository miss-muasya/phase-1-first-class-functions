
function receivesAFunction(funcValue){
    funcValue()
}

function returnsANamedFunction(){
    return function nameFunction () {

    }
}

function returnsAnAnonymousFunction(){
    return function (){
    }
}