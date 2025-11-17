document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('show-more-button');
    const extraProjects = document.querySelectorAll('.project-item-extra-project');
    let expanded = false;

    button.addEventListener('click', () => {
        expanded = !expanded;

        extraProjects.forEach(project => {
            if(expanded) {
                project.classList.add('show');
            }
            else {
                project.classList.remove('show');
            }
        });


        button.textContent = expanded ? 'Show Less' : 'Show More';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('show-more-button-2');
    const extraProjects = document.querySelectorAll('.project-item-extra-project-2');
    let expanded = false;

    button.addEventListener('click', () => {
        expanded = !expanded;

        extraProjects.forEach(project => {
            if(expanded) {
                project.classList.add('show');
            }
            else {
                project.classList.remove('show');
            }
        });


        button.textContent = expanded ? 'Show Less' : 'Show More';
    });
});