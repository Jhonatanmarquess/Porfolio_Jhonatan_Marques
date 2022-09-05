
        const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Front-end";
            }, 0);
            
        }

        textLoad();
        setInterval(textLoad, 12000);