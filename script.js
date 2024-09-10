document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll("nav a");
    const tabContents = document.querySelectorAll(".tab-content");

    function hideAllSections() {
        tabContents.forEach(content => content.classList.remove('active'));
        tabs.forEach(tab => tab.classList.remove('active'));
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", function(e) {
            e.preventDefault();
            hideAllSections();
            this.classList.add('active');
            const targetId = this.getAttribute("id").split('-')[0] + '-section';
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Відображаємо розклад за замовчуванням
    document.getElementById("schedule-tab").classList.add("active");
    document.getElementById("schedule-section").classList.add("active");
});
