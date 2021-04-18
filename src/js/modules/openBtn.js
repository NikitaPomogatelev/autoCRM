const openBtn = (btnSelector, ItemSelector, blockActive) => {
    const btn = document.querySelector(btnSelector);
    const featuresItem = document.querySelectorAll(ItemSelector);

    const openItems = () => {
        
        featuresItem.forEach(item => {
            item.style.display = blockActive;  
        }); 
    }

    btn.addEventListener('click', () => {
        console.log(1);
        openItems();
        btn.remove();
    });
}

export default openBtn;