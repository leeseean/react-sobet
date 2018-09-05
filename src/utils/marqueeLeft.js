function createMarqueeStyle(marqueeWidth) {
  const style = document.createElement('style');
  style.id = "marqueeLeftStyle";
  style.innerHTML = `
      .marqueeLeft {
          animation: marqueeLeft ${marqueeWidth/50}s linear infinite;
      }
      @keyframes marqueeLeft {
          100% {
            transform: translateX(-${marqueeWidth}px);
          } 
      }
  `;
  document.head.appendChild(style);
}

export default createMarqueeStyle;