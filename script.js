document.addEventListener('DOMContentLoaded', () => {
    // 1. Element Selectors
    const toggleBtn = document.getElementById('toggle-btn');
    const cardView = document.getElementById('card-view');
    const resumeView = document.getElementById('resume-view');
    const toggleText = toggleBtn.querySelector('.toggle-text');
    const cardGlass = document.querySelector('.card-glass');

    // 2. State Variable
    let isShowingResume = false;

    // 3. Toggle View Logic (명함 <-> 이력서 전환)
    toggleBtn.addEventListener('click', () => {
        isShowingResume = !isShowingResume;

        if (isShowingResume) {
            // Switch to Resume
            cardView.classList.remove('active');
            resumeView.classList.add('active');
            
            // Add state class to body for global style changes (e.g., button icon rotation)
            document.body.classList.add('show-resume-state');
            
            // Update button texts
            toggleText.textContent = '명함 보기';
            toggleBtn.title = '명함 보기';
            
            // Scroll to top of resume smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Switch to Card
            resumeView.classList.remove('active');
            cardView.classList.add('active');
            
            // Remove state class from body
            document.body.classList.remove('show-resume-state');
            
            // Update button texts
            toggleText.textContent = '이력서 보기';
            toggleBtn.title = '이력서 보기';
            
            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // 4. Interactive Spotlight Effect on Business Card (마우스 움직임 반응 효과)
    if (cardGlass) {
        cardGlass.addEventListener('mousemove', (e) => {
            const rect = cardGlass.getBoundingClientRect();
            // Calculate mouse position relative to the card boundaries
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Set CSS variables that style.css uses for radial gradient glow
            cardGlass.style.setProperty('--mouse-x', `${x}px`);
            cardGlass.style.setProperty('--mouse-y', `${y}px`);
        });
    }
});
