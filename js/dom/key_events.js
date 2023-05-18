const d = document;
let x = 0,
    y = 0;

export function shortcuts(e) {
    if (e.altKey && e.key === 'a') alert('Hello');

    if (e.altKey && e.key === 'p') prompt('Ingrese sus Credenciales');

    if (e.altKey && e.key === 'c') confirm('Confirme sus credenciales');
}


export function moveBall(e, ball, table) {
    const $ball = d.querySelector(ball),
          $table = d.querySelector(table),
          $limitBall = $ball.getBoundingClientRect(),
          $limitTable = $table.getBoundingClientRect();

        console.log($limitBall,$limitTable);  
        switch (e.keyCode) {
        
        case 37:
            if($limitBall.left > $limitTable.left) x-=10;
            e.preventDefault()
        break;
    
        case 38:
            if($limitBall.top > $limitTable.top) y-=5
            e.preventDefault()
        break;
        
        case 39:
            if($limitBall.right < $limitTable.right) x +=10
            e.preventDefault()
        break;

        case 40:
            if($limitBall.bottom < $limitTable.bottom) y+=5
            e.preventDefault()
        break;

        default:
        break;
    }
    $ball.style.transform = `translate(${x}px,${y}px)`;
}


