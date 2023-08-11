export default {
    mounted(el) {
        el.addEventListener("mousemove", (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            console.log(`Координаты X: ${mouseX}, Координаты Y: ${mouseY}`)
        });
    }
}