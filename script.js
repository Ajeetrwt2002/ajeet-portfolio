*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    scroll-behavior:smooth;
}

body{
    background:#0f172a;
    color:white;
    font-family:Segoe UI,sans-serif;
}

header{
    position:fixed;
    width:100%;
    background:#111827;
    z-index:1000;
}

nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 10%;
}

nav ul{
    display:flex;
    gap:25px;
    list-style:none;
}

nav a{
    text-decoration:none;
    color:white;
}

.logo{
    font-size:24px;
    font-weight:bold;
    color:#38bdf8;
}

.hero{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:20px;
}

.hero h1{
    font-size:60px;
}

.hero span{
    color:#38bdf8;
}

.hero h2{
    color:#06b6d4;
    margin:20px 0;
}

.buttons{
    margin-top:20px;
}

.btn{
    padding:12px 25px;
    background:#38bdf8;
    color:white;
    text-decoration:none;
    border-radius:10px;
    margin:10px;
}

.secondary{
    background:#1e293b;
}

section{
    padding:100px 10%;
}

h2{
    text-align:center;
    margin-bottom:40px;
    font-size:40px;
}

.card{
    background:#1e293b;
    padding:30px;
    border-radius:15px;
}

.skills-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
    gap:20px;
}

.skill-card{
    background:#1e293b;
    padding:25px;
    border-radius:15px;
    text-align:center;
    transition:.4s;
}

.skill-card:hover{
    transform:translateY(-10px);
}

.skill-card i{
    font-size:40px;
    margin-bottom:15px;
    color:#38bdf8;
}

.project-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:25px;
}

.project-card{
    background:#1e293b;
    padding:25px;
    border-radius:15px;
    transition:.4s;
}

.project-card:hover{
    transform:translateY(-10px);
}

.project-card a{
    display:inline-block;
    margin-top:15px;
    color:#38bdf8;
}

.contact-card{
    text-align:center;
}

.socials{
    margin-top:20px;
}

.socials a{
    color:white;
    font-size:30px;
    margin:0 15px;
}

footer{
    text-align:center;
    padding:30px;
    background:#111827;
}

@media(max-width:768px){

    nav{
        flex-direction:column;
    }

    nav ul{
        margin-top:10px;
        flex-wrap:wrap;
        justify-content:center;
    }

    .hero h1{
        font-size:40px;
    }
}
