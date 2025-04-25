// FINALS.js 파일에 아래 코드를 추가하세요

document.addEventListener("DOMContentLoaded", function() {
    const updateLink = document.querySelector("a[href='#']");
    const updateSection = document.querySelector(".update-section");

    updateLink.addEventListener("click", function(event) {
        event.preventDefault(); // 기본 링크 동작을 막음

        // 부드럽게 스크롤
        updateSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
