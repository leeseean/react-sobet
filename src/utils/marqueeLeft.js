function createMarqueeStyle(marqueeWidth) {
    const styleText = `
        .marqueeLeft {
            animation: marqueeLeft ${marqueeWidth/50}s linear infinite;
        }
        @keyframes marqueeLeft {
            100% {
                transform: translateX(-${marqueeWidth}px);
            } 
        }
    `;
    if (document.querySelector('#marqueeLeftStyle')) {
        document.querySelector('#marqueeLeftStyle').innerHTML = styleText;
        return;
    }
    const style = document.createElement('style');
    style.id = "marqueeLeftStyle";
    style.innerHTML = styleText;
    document.head.appendChild(style);
}

export default createMarqueeStyle;