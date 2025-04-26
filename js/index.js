const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("hero-bg-animation").appendChild(renderer.domElement);

  const geometry = new THREE.PlaneGeometry(20, 20, 50, 50);
  const material = new THREE.MeshBasicMaterial({
    color: 0x977251, // sua cor #977251
    wireframe: true,
    transparent: true,
    opacity: 0.12
  });
  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  camera.position.z = 5;

  function animateWave() {
    const time = Date.now() * 0.001;
    const pos = geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = Math.sin(x * 2 + time) * 0.1 + Math.cos(y * 3 + time) * 0.1;
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
    requestAnimationFrame(animateWave);
    renderer.render(scene, camera);
  }

  animateWave();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const triggerSection = document.getElementById('section2');

    if (triggerSection && window.scrollY > triggerSection.offsetTop - 80) {
      navbar.classList.remove('-translate-y-full');
    } else {
      navbar.classList.add('-translate-y-full');
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.testimonial-swiper', {
      // Show one slide at a time
      slidesPerView: 1,
      spaceBetween: 20,
      
      // Enable autoplay
      autoplay: {
        delay: 5000, // 5 seconds
        disableOnInteraction: false,
      },
      
      // Enable loop (continuous cycling)
      loop: true,
      
      // Add pagination dots
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      // Smooth transitions
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
    });
  });

  