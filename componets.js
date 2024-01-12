function insertion() {

    let int = ["الصفحة الرئيسية ", "من نحن ", "تعرف على الكتاب ", "تواصل معنا ", `<button class="read" onclick="rtl()">الانجليزية</button>`];
    let conta = document.getElementsByTagName('li');

    let arre = ["افعل ما تحلم به ", "حان الوقت لتحقق احلامك وتكون اسعد انسان في العالم ", "لمعرفة المزيد "]
    let herobro = document.getElementById('hero-bro');
    let heroP = document.getElementById('hero-p');
    let read = document.getElementById('read');
    let colection1 = [herobro, heroP, read];



    for (let i = 0; i < int.length; i++) {
        const element = int[i];
        conta[i].innerHTML = element;
    }


    for (let i = 0; i < arre.length; i++) {
        const element = arre[i];
        colection1[i].innerHTML = element;
    }

    let inp = document.getElementById('inp');
    let cards = document.getElementById('cards');
    let gcard = document.getElementById('g-card');
    let cont = document.getElementById('cont');
    let workers = document.getElementById('workers');
    inp.innerHTML = `<input type="text" placeholder="ادخل اسمك ">
<input type="text" placeholder="ادخل الايميل">
<button>متابعة</button>`;


    cards.innerHTML = `<div>
<h1>كن الافضل </h1>
<p>تعلم كيف تصبح الافضل مقارنة بكل من هو حولك وجعل خطتك التطويرية بسهلة لعب النرد وهنا يكمن اهم واول خطوات النجاح الدائم  </p>
</div>
<div>
<h1>كن الاذكى </h1>
<p>تعلم كيف ترفع معدل ذكائك بسرعة رهيبة وبشكل جبار باسرع وقت ممكن بدون عرقلة جدولك العملي وباذكى الطرق النفسية والتحليلة فكما تعلم لكي ترفع مستوى ذكائك عليك التفكير بذكاء اولا  </p>
</div>
<div>
<h1>كن الاسرع </h1>
<p>تعمل كيفية انجاز المهام باسرع شكل ممكن وبكفاءة عالية لترفع من قيمتك الفعلية في هذا المجتمع واجعل من نفسك انسان يتفوق على الالة  </p>
</div>
<div>
<h1>كن الاقوى </h1>
<p>تعلم اقوى اساليب القتال والدفاع عن النفس وكذلك اهم اساليب حماية الشغف فالاخطار من حولك ليست لكمات فحسب بل هي ايضا فن لا يستهان به ولكن يهان به  </p>
</div>`;



    gcard.innerHTML = ` <div>

<h1>لماذا هذا الكتاب </h1>
<p>كن على يقين بان كتابنا هو بالضبط ما تبحث عنه في رحلتك طالما وصلت الى موقعنا فانت بالتاكيد ستستفيد بقوة ?</p>
</div>`;





    cont.innerHTML = ` <div class="card"><img width="460" src="./assets/mountains.jpg" alt="landscape photo">
<article>
    <h1>المنشور الاول </h1>
    <p>لورم إيبصوم ديلور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تمبور إنسيديدونت يوت لابوري إت دولوري ماغنا أليكا. أت إنيم أد ، كيس نوسترود إكسرستيتاشيون أولامكو لابوريس نيسي يوت أليكويب إكس إيا كومودو كونسكوات.?</p>
</article>
</div>
<div class="card"><img width="460" src="./assets/mountains.jpg" alt="landscape photo">
<article>
    <h1>المنشور الثاني </h1>
    <p>لورم إيبصوم ديلور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تمبور إنسيديدونت يوت لابوري إت دولوري ماغنا أليكا. أت إنيم أد ، كيس نوسترود إكسرستيتاشيون أولامكو لابوريس نيسي يوت أليكويب إكس إيا كومودو كونسكوات.?</p>
</article>
</div>
<div class="card"><img width="460" src="./assets/mountains.jpg" alt="landscape photo">
<article>
    <h1>المنشور الثالث </h1>
    <p>لورم إيبصوم ديلور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تمبور إنسيديدونت يوت لابوري إت دولوري ماغنا أليكا. أت إنيم أد ، كيس نوسترود إكسرستيتاشيون أولامكو لابوريس نيسي يوت أليكويب إكس إيا كومودو كونسكوات.</p>
</article>
</div>`;
    workers.innerHTML = ` <article>
<h1>تواصل مع الكاتب  </h1>
<h4>لورم إيبصوم ديلور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تمبور إنسيديدونت يوت لابوري إت دولوري ماغنا أليكا. أت إنيم أد  كيس نوسترود إكسرستيتاشيون أولامكو لابوريس نيسي يوت أليكويب إكس إيا كومودو كونسكوات.</h4>
</article>
<section>

<div class="cardse"><div><img src="./assets/person1.jpg" width="120" alt=""></div>
    <h1>سوزان ويليامز </h1>
    <h2>قائد الكتاب  </h2>
    <h4>لورم إيبصوم ديلور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تمبور إنسيديدونت يوت لابوري إت دولوري ماغنا أليك
    </h4>
</div> 
<div class="cardse"><div><img src="./assets/person2.jpg" width="120" height="120"  alt=""></div>
    <h1>جرايس سميث </h1>
    <h2>زميل  </h2>
    <h4>لورم إيبصوم ديلور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تمبور إنسيديدونت يوت لابوري إت دولوري ماغنا أليك
    </h4>
</div>
<div class="cardse"><div><img src="./assets/person3.jpg" width="120"  height="120" alt=""></div>
    <h1>جون دوو</h1>
    <h2>متخصص تعديلات  </h2>
    <h4>لورم إيبصوم ديلور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تمبور إنسيديدونت يوت لابوري إت دولوري ماغنا أليكا.
    </h4>
</div>
<div class="cardse"><div><img src="./assets/person4.jpg" width="120" height="120"  alt=""></div>
    <h1>كيفن سوانسون</h1>
    <h2>مصمم </h2>
    <h4>لورم إيبصوم ديلور سيت أميت، كونسيكتيتور أديبيسينغ إيليت، سيد دو إيوسمود تمبور إنسيديدونت يوت لابوري إت دولوري ماغنا أليك
    </h4>
</div>
</section>`;














    let col = document.getElementById('nave');
    col.style = "flex-direction: row-reverce"



}


function outertion() {

    let int = ["home", "about us", "Meet the author ", "contact us ", `<button class="read" onclick="rtl()">Arabic</button>`];
    let conta = document.getElementsByTagName('li');

    let arre = ["Do What You Dream Of...", "orem ipsum dolor sit amet, consectetur adipisicing elit.nam tembaro", "Read More"]
    let herobro = document.getElementById('hero-bro');
    let heroP = document.getElementById('hero-p');
    let read = document.getElementById('read');
    let colection1 = [herobro, heroP, read];



    for (let i = 0; i < int.length; i++) {
        const element = int[i];
        conta[i].innerHTML = element;
    }




    for (let i = 0; i < arre.length; i++) {
        const element = arre[i];
        colection1[i].innerHTML = element;
    }


    let inp = document.getElementById('inp');
    let cards = document.getElementById('cards');
    let gcard = document.getElementById('g-card');
    let cont = document.getElementById('cont');
    let workers = document.getElementById('workers');


    inp.innerHTML = `  <input type="text" placeholder="Enter Name ">
<input type="text" placeholder="Enter Email ">
<button>Subscribe</button>`;
    cards.innerHTML = `<div>
<h1>Be better</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia necessitatibus, quisquam incidunt natus
    ipsum pariatur nesciunt </p>
</div>
<div>
<h1>Be Smarter</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia necessitatibus, quisquam incidunt natus
    ipsum pariatur nesciunt </p>
</div>
<div>
<h1>Be Faster</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia necessitatibus, quisquam incidunt natus
    ipsum pariatur nesciunt </p>
</div>
<div>
<h1>Be Stronger</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia necessitatibus, quisquam incidunt natus
    ipsum pariatur nesciunt </p>
</div>`;
    gcard.innerHTML = ` <div>

<h1>Why This Book</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fuga saepe nulla quos ad nesciunt ?</p>
</div>`;
    cont.innerHTML = ` <div class="card"><img width="460" src="./assets/mountains.jpg" alt="landscape photo">
<article>
    <h1>Blog Post one</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae magni laboriosam
        repellendus optio magnam iste itaque voluptatem omnis veritatis quo mollitia, facilis ipsa
        necessitatibus pariatur. Voluptates at odio eos?</p>
</article>
</div>
<div class="card"><img width="460" src="./assets/mountains.jpg" alt="landscape photo">
<article>
    <h1>Blog Post two</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae magni laboriosam
        repellendus optio magnam iste itaque voluptatem omnis veritatis quo mollitia, facilis ipsa
        necessitatibus pariatur. Voluptates at odio eos?</p>
</article>
</div>
<div class="card"><img width="460" src="./assets/mountains.jpg" alt="landscape photo">
<article>
    <h1>Blog Post three</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae magni laboriosam
        repellendus optio magnam iste itaque voluptatem omnis veritatis quo mollitia, facilis ipsa
        necessitatibus pariatur. Voluptates at odio eos?</p>
</article>
</div>`;
    workers.innerHTML = ` <article>
<h1>Meet the Authors </h1>
<h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis error!</h4>
</article>
<section>

<div class="cardse"><div><img src="./assets/person1.jpg" width="120" alt=""></div>
    <h1>Susan Williums </h1>
    <h2>Lead Writer </h2>
    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur deserunt aliquam est similique
    </h4>
</div> 
<div class="cardse"><div><img src="./assets/person2.jpg" width="120" height="120"  alt=""></div>
    <h1>Grace Smith</h1>
    <h2>CoWorker </h2>
    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur deserunt aliquam est similique
    </h4>
</div>
<div class="cardse"><div><img src="./assets/person3.jpg" width="120"  height="120" alt=""></div>
    <h1>John Doe</h1>
    <h2>Editor </h2>
    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur deserunt aliquam est similique
    </h4>
</div>
<div class="cardse"><div><img src="./assets/person4.jpg" width="120" height="120"  alt=""></div>
    <h1>Kevien Swanson</h1>
    <h2>Designer </h2>
    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur deserunt aliquam est similique
    </h4>
</div>
</section>
`;








    let col = document.getElementById('nave');
    col.style = "flex-direction: row-reverce"



}