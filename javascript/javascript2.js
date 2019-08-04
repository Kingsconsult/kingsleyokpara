// select all the elements
let add = document.getElementById('address'); // Address div
let img = document.getElementById('img'); // Slideshow img
let bio = document.getElementById('bio'); // Bio heading
let kings = document.getElementById('kings'); // Name heading
let summary = document.getElementById('summary'); // Summary div
let qualification = document.getElementById('Qualification'); // Qualification div
let competencies = document.getElementById('competencies'); // Competencies div
let experience = document.getElementById('experience'); // Experience div
let expertise = document.getElementById('expertise'); // Expertise div
let skills = document.getElementById('skills'); // reference div
let reference = document.getElementById('reference'); // reference div
let gallery = document.getElementById('gallery'); // Gallery div
let pix = document.getElementById('pics'); // Pictures div
let cred = document.getElementById('cert')



// select all navigations
let cont = document.getElementById('contacts'); // Contact Nav
let home = document.getElementById('home'); // Cv Nav
let bioNav = document.getElementById('bioNav'); // Bio Nav
let image = document.getElementById('gallery'); // Gallery Nav 
let qua = document.getElementById('qua'); // Qualification Nav
let exp = document.getElementById('exp'); // Experience Nav 
let refer = document.getElementById('refer'); // Reference Nav 
let expert = document.getElementById('expert'); // Expert Nav
let comp = document.getElementById('comp'); // Competencies Nav 
let skill = document.getElementById('skil'); // Skills Nav
let pic = document.getElementById('gallery');
let credentials = document.getElementById('credentials')

//by default, all Biodata is hidden
add.style.display ='none';
bio.style.display = 'none';
kings.style.display ='none';
summary.style.display ='none';
qualification.style.display ='none';
experience.style.display ='none';
expertise.style.display ='none';
skills.style.display ='none';
reference.style.display ='none';
competencies.style.display = 'none';
pix.style.display = 'none';
cred.style.display = 'none';

// // Call the home 
home.addEventListener('click', function() {
    img.style.display = 'block';
    add.style.display ='none';
    bio.style.display = 'none';
    kings.style.display ='none';
    summary.style.display ='none';
    qualification.style.display ='none';
    competencies.style.display ='none';
    experience.style.display ='none';
    expertise.style.display ='none';
    skills.style.display ='none';
    reference.style.display ='none';
    pix.style.display = 'none';
    cred.style.display = 'none';

});

// Call the BioData
bioNav.addEventListener('click', function() {
    img.style.display = 'none';
    add.style.display = 'block';
    bio.style.display = 'block';
    kings.style.display ='block';
    summary.style.display ='block';
    qualification.style.display ='block';
    competencies.style.display ='block';
    experience.style.display ='block';
    expertise.style.display ='block';
    skills.style.display ='block';
    reference.style.display ='block';
    pix.style.display = 'none';
    cred.style.display = 'none';
});

// Call the address
cont.addEventListener('click', function() {
    img.style.display = 'none';
    add.style.display = 'block';
    bio.style.display = 'block';
    kings.style.display ='block';
    summary.style.display ='none';
    qualification.style.display ='none';
    competencies.style.display ='none';
    experience.style.display ='none';
    expertise.style.display ='none';
    skills.style.display ='none';
    reference.style.display ='none';
    pix.style.display = 'none';
    cred.style.display = 'none';
});

// Call the qualification
qua.addEventListener('click', function() {
    img.style.display = 'none';
    add.style.display = 'none';
    bio.style.display = 'block';
    kings.style.display ='block';
    summary.style.display ='none';
    qualification.style.display ='block';
    competencies.style.display ='none';
    experience.style.display ='none';
    expertise.style.display ='none';
    skills.style.display ='none';
    reference.style.display ='none';
    pix.style.display = 'none';
    cred.style.display = 'none';
});

// Call the experience
exp.addEventListener('click', function() {
    img.style.display = 'none';
    add.style.display = 'none';
    bio.style.display = 'block';
    kings.style.display ='block';
    summary.style.display ='none';
    qualification.style.display ='none';
    competencies.style.display ='none';
    experience.style.display ='block';
    expertise.style.display ='none';
    skills.style.display ='none';
    reference.style.display ='none';
    pix.style.display = 'none';
    cred.style.display = 'none';
});

// Call the Gallery
pic.addEventListener('click', function() {
    img.style.display = 'none';
    add.style.display = 'none';
    bio.style.display = 'block';
    kings.style.display ='block';
    summary.style.display ='none';
    qualification.style.display ='none';
    competencies.style.display ='none';
    experience.style.display ='none';
    expertise.style.display ='none';
    skills.style.display ='none';
    reference.style.display ='none';
    pix.style.display = 'block';
    cred.style.display = 'none';
});

// Call the competencies
comp.addEventListener('click', function() {
    img.style.display = 'none';
    add.style.display = 'none';
    bio.style.display = 'block';
    kings.style.display ='block';
    summary.style.display ='none';
    qualification.style.display ='none';
    competencies.style.display ='block';
    experience.style.display ='none';
    expertise.style.display ='none';
    skills.style.display ='none';
    reference.style.display ='none';
    pix.style.display = 'none';
    cred.style.display = 'none';
});

// Call the expertise
expert.addEventListener('click', function() {
    img.style.display = 'none';
    add.style.display = 'none';
    bio.style.display = 'block';
    kings.style.display ='block';
    summary.style.display ='none';
    qualification.style.display ='none';
    competencies.style.display ='none';
    experience.style.display ='none';
    expertise.style.display ='block';
    skills.style.display ='none';
    reference.style.display ='none';
    pix.style.display = 'none';
    cred.style.display = 'none';
});

// Call the skills
skill.addEventListener('click', function() {
    img.style.display = 'none';
    add.style.display = 'none';
    bio.style.display = 'block';
    kings.style.display ='block';
    summary.style.display ='none';
    qualification.style.display ='none';
    competencies.style.display ='none';
    experience.style.display ='none';
    expertise.style.display ='none';
    skills.style.display ='block';
    reference.style.display ='none';
    pix.style.display = 'none';
    cred.style.display = 'none';
});

// Call the references
refer.addEventListener('click', function() {
    img.style.display = 'none';
    add.style.display = 'none';
    bio.style.display = 'block';
    kings.style.display ='block';
    summary.style.display ='none';
    qualification.style.display ='none';
    competencies.style.display ='none';
    experience.style.display ='none';
    expertise.style.display ='none';
    skills.style.display ='none';
    reference.style.display ='block';
    pix.style.display = 'none';
    cred.style.display = 'none';
});

// Call the Certificate
credentials.addEventListener('click', function() {
    img.style.display = 'none';
    add.style.display = 'none';
    bio.style.display = 'block';
    kings.style.display ='block';
    summary.style.display ='none';
    qualification.style.display ='none';
    competencies.style.display ='none';
    experience.style.display ='none';
    expertise.style.display ='none';
    skills.style.display ='none';
    reference.style.display ='none';
    pix.style.display = 'none';
    cred.style.display = 'block';
});