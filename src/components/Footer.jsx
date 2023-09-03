import React, {useEffect} from 'react'

const Footer = () => {

    const canvas = () => {
        const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
    
            // Configuración del canvas
            canvas.width = window.innerWidth;
            canvas.height = 100; 
    
            // Función para dibujar las olas
            function drawWaves() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
    
                ctx.fillStyle = '#caf0ff';
                ctx.beginPath();
    
                let x = 0;
                let y = 50;
                const frequency = 0.008; 
                const amplitude = 40; 
    
                ctx.moveTo(x, canvas.height);
    
                while (x < canvas.width) {
                    x += 2;
                    y = canvas.height / 2 + Math.sin(x * frequency) * amplitude;
                    ctx.lineTo(x, y);
                }
    
                ctx.lineTo(canvas.width, canvas.height);
                ctx.lineTo(0, canvas.height);
                ctx.closePath();
                ctx.fill();
            }
            drawWaves();
    
            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                drawWaves();
            });
    }
    
    useEffect(()=> {
        canvas();
    })

    return (
        <div className='footer'>
            <canvas id="canvas"></canvas>
            <span className='footerTitle'>Join the green revolution without <br/> commitment</span>
            <br/>
            <span className='footerText'>if you are missing and don´t want to miss future <br/> promotions or our future products</span>
            <form>
                <input type='email' className='inputEmail' placeholder='your email' name='email' id='email' />
                <input type="submit" className='btnSubmit' value="SEND" />
            </form>
        </div>
    )
}

export default Footer