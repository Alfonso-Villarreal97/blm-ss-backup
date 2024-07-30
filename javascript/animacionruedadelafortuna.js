// Función para crear y posicionar círculos alrededor del contenedor
function createCirclesAroundCenter(numCircles) {
    const container = document.getElementById('container');
    const radius = 100; // Radio de la rueda
    const angleStep = (2 * Math.PI) / numCircles; // Paso angular entre cada círculo

  
    for (let i = 0; i < numCircles; i++) {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      container.appendChild(circle);
  
      const angle = i * angleStep; // Ángulo para este círculo
      const x = Math.cos(angle) * radius; // Coordenada x
      const y = Math.sin(angle) * radius; // Coordenada y
  
      // Posiciona el círculo alrededor del centro del contenedor
      circle.style.left = `calc(50% + ${x}px)`; // Ajusta para centrar horizontalmente
      circle.style.top = `calc(50% + ${y}px)`; // Ajusta para centrar verticalmente
    }
  }
  
  // Crea 8 círculos alrededor del centro del contenedor
  createCirclesAroundCenter(8);
  