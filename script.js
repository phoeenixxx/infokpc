document.addEventListener("DOMContentLoaded", () => {
    let currentLang = "ka";

    const translations = {
        ka: {
            typewriterText: "FRONT-END დეველოპმენტი",
            collegeTitle: "სსიპ კოლეჯი „ახალი ტალღა“",
            collegeSlogan: "თქვენი წარმატება, ჩვენი მისიაა!",
            heroSubtitle: "შეიცანი მომავლის პროფესია, რომელიც ციფრულ სამყაროში ყველაფერს აცოცხლებს!",
            heroDesc: "ისწავლე ვებ-პროგრამირება უახლესი სტანდარტებით და გახდი მოთხოვნადი სპეციალისტი.",
            whyUsTitle: "რატომ არის ჩვენთან სწავლა გარანტირებული შედეგი?",
            feat1Title: "სახელმწიფო აღიარება",
            feat1Desc: "იღებ ოფიციალურ პროფესიულ დიპლომს, რომელიც აღიარებულია როგორც ადგილობრივ, ისე საერთაშორისო დონეზე.",
            feat2Title: "პრაქტიკული გარემო",
            feat2Desc: "თეორიას ჩაანაცვლებს რეალური კოდირება, ჰიბრიდული სასწავლო გარემო და პროექტებზე მუშაობა თანამედროვე ლაბორატორიებში.",
            feat3Title: "ინდივიდუალური მხარდაჭერა",
            feat3Desc: "თითოეული სტუდენტი იღებს პირად უკუკავშირს , რაც ხელს უწყობს პირად განვითარებას.",
            feat4Title: "კარიერული მომზადება",
            feat4Desc: "პროგრამა ორიენტირებულია იმაზე, რომ სწავლის დასრულებისთანავე გქონდეს მზა პორტფოლიო დამსაქმებლებთან წარსადგენად.",
            syllabusTitle: "რას ისწავლი? - სასწავლო მოდულები",
            mod1Title: "ვებ გვერდის მარკირება და სტილებით გაფორმება",
            mod1Desc: "HTML5 & CSS3 ფუნდამენტური სტრუქტურა და დიზაინი.",
            mod2Title: "ვებ გვერდის სტილიზაცია Sass-scss პრე პროცესორის და Tailwind ფრეიმვორკის საშუალებით",
            mod2Desc: "თანამედროვე პრე-პროცესორები და საუკეთესო ფრეიმვორკები.",
            mod3Title: "ვებგვერდის ინტერაქტიულობისა და ეფექტების შექმნა JavaScript-ის საშუალებით",
            mod3Desc: "DOM მანიპულაცია, ლოგიკა და დინამიური ფუნქციონალი (ES6+).",
            mod4Title: "დინამიური ვებგვერდის შექმნა TypeScript-ის საშუალებით",
            mod4Desc: "მკაცრად ტიპიზირებული კოდი მასშტაბური პროექტებისთვის.",
            mod5Title: "ვებგვერდის ინტერაქტიულობისა და ეფექტების შემუშავება React-ის საშუალებით",
            mod5Desc: "კომპონენტური არქიტექტურა და თანამედროვე State მენეჯმენტი.",
            mod6Title: "ვებ გვერდის ოპტიმიზაცია",
            mod6Desc: "წარმადობის (Performance) გაზრდა, SEO-მეგობრული კოდი და სისწრაფე.",
            mod7Title: "ვერსიების კონტროლი Git ტექნოლოგიის გამოყენებით",
            mod7Desc: "გუნდური მუშაობა, GitHub და კოდის უსაფრთხო მართვა.",
            mod8Title: "დარგობრივი ინგლისური ენა Front-end დეველოპმენტისთვის",
            mod8Desc: "ტექნიკური ტერმინოლოგია, დოკუმენტაციასთან მუშაობა.",
            mod9Title: "პრაქტიკული პროექტი",
            mod9Desc: "მიღებული ცოდნის რეალურ პროექტში (პორტფოლიოსთვის) რეალიზება.",
            mod10Title: "ხელოვნური ინტელექტის გამოყენება",
            mod10Desc: "AI ინსტრუმენტების ჩართვა დეველოპმენტის პროცესში პროდუქტიულობისთვის.",
            faqTitle: "ხშირად დასმული კითხვები",
            faqQ1: "სჭირდება თუ არა კურსს წინასწარი გამოცდილება?",
            faqA1: "არა, სწავლა იწყება საბაზისო ეტაპიდან და პროგრამა აგებულია ისე, რომ დამწყებმა სტუდენტმა ეტაპობრივად აითვისოს ყველა საჭირო ტექნოლოგია.",
            faqQ2: "რა დოკუმენტი გაიცემა სწავლის დასრულებისას?",
            faqA2: "სწავლის წარმატებით დასრულების შემდეგ გაიცემა სახელმწიფოს მიერ აღიარებული ოფიციალური პროფესიული დიპლომი.",
            faqQ3: "როგორ ხდება დავალებებზე მუშაობა?",
            faqA3: "პედაგოგი ინდივიდუალურად განიხილავს თქვენ მიერ დაწერილ კოდს, გიხსნით შეცდომებს და გეხმარებათ საუკეთესო პრაქტიკების დამკვიდრებაში.",
            faqQ4: "რა ფორმატით მიმდინარეობს სწავლება?",
            faqA4: "სწავლება მოიცავს ჰიბრიდულ რეჟიმშიპრაქტიკულ ლექციებს (Live Coding), რეალურ პროექტებზე მუშაობასა და ინდივიდუალურ კონსულტაციებს.",
            faqQ5: "არის თუ არა სწავლა დაფინანსებული?",
            faqA5: "დიახ, სწავლა სრულად დაფინანსებულია სახელმწიფოს მიერ პროფესიული განათლების ფარგლებში.",
            fbTitle: "გაიგე მეტი ჩვენს შესახებ Facebook-ზე",
            fbDesc: "თვალი ადევნეთ კოლეჯის „ახალი ტალღა“ უახლეს მოვლენებსა და სიახლეებს.",
            fbBtn: "იხილეთ Facebook პოსტი",
            footerText: "© 2026 სსიპ კოლეჯი „ახალი ტალღა“. Front-End დეველოპმენტი. ყველა უფლება დაცულია."
        },
        en: {
            typewriterText: "FRONT-END DEVELOPMENT",
            collegeTitle: "LEPL College 'New Wave'",
            collegeSlogan: "Your success is our mission!",
            heroSubtitle: "Discover the profession of the future that brings everything in the digital world to life!",
            heroDesc: "Learn web programming with the latest standards and become an in-demand specialist.",
            whyUsTitle: "Why is studying with us a guaranteed result?",
            feat1Title: "State Recognition",
            feat1Desc: "You receive an official vocational diploma recognized both locally and internationally.",
            feat2Title: "Practical Environment",
            feat2Desc: "Theory is replaced by real coding, a hybrid learning environment, and project work in modern labs.",
            feat3Title: "Individual Support",
            feat3Desc: "Each student receives personal feedback, promoting personal development.",
            feat4Title: "Career Preparation",
            feat4Desc: "The program focuses on having a ready portfolio to present to employers upon completion.",
            syllabusTitle: "What will you learn? - Learning Modules",
            mod1Title: "Web Page Markup and Styling",
            mod1Desc: "HTML5 & CSS3 fundamental structure and design.",
            mod2Title: "Web Page Styling via Sass-scss Preprocessor and Tailwind Framework",
            mod2Desc: "Modern preprocessors and top frameworks.",
            mod3Title: "Creating Web Page Interactivity and Effects with JavaScript",
            mod3Desc: "DOM manipulation, logic, and dynamic functionality (ES6+).",
            mod4Title: "Building Dynamic Web Pages with TypeScript",
            mod4Desc: "Strongly typed code for scalable projects.",
            mod5Title: "Developing Web Page Interactivity and Effects with React",
            mod5Desc: "Component architecture and modern State management.",
            mod6Title: "Web Page Optimization",
            mod6Desc: "Performance enhancement, SEO-friendly code, and speed.",
            mod7Title: "Version Control using Git Technology",
            mod7Desc: "Teamwork, GitHub, and secure code management.",
            mod8Title: "Professional English for Front-end Development",
            mod8Desc: "Technical terminology, working with documentation.",
            mod9Title: "Practical Project",
            mod9Desc: "Realization of acquired knowledge in a real portfolio project.",
            mod10Title: "Use of Artificial Intelligence",
            mod10Desc: "Integrating AI tools into development for productivity.",
            faqTitle: "Frequently Asked Questions",
            faqQ1: "Does the course require prior experience?",
            faqA1: "No, learning starts from the basics, and the program is structured so beginners master all required technologies step by step.",
            faqQ2: "What document is issued upon completion?",
            faqA2: "Upon successful completion, an officially state-recognized vocational diploma is issued.",
            faqQ3: "How does working on assignments work?",
            faqA3: "The instructor individually reviews your code, explains mistakes, and helps implement best practices.",
            faqQ4: "In what format is the training conducted?",
            faqA4: "Training includes practical lectures in hybrid mode (Live Coding), real project work, and individual consultations.",
            faqQ5: "Is the education state-funded?",
            faqA5: "Yes, education is fully funded by the state under vocational education.",
            fbTitle: "Find out more about us on Facebook",
            fbDesc: "Follow the latest events and news of College 'New Wave'.",
            fbBtn: "View Facebook Post",
            footerText: "© 2026 LEPL College 'New Wave'. Front-End Development. All rights reserved."
        }
    };

    const typewriterElement = document.getElementById("typewriter-text");
    let charIndex = 0;
    let typeTimeout;

    function typeEffect() {
        const textToType = translations[currentLang].typewriterText;
        if (charIndex < textToType.length) {
            typewriterElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            typeTimeout = setTimeout(typeEffect, 100);
        }
    }

    function resetTypewriter() {
        clearTimeout(typeTimeout);
        typewriterElement.textContent = "";
        charIndex = 0;
        typeEffect();
    }

    resetTypewriter();

    const langToggleBtn = document.getElementById("lang-toggle");
    langToggleBtn.addEventListener("click", () => {
        currentLang = currentLang === "ka" ? "en" : "ka";
        langToggleBtn.textContent = currentLang === "ka" ? "EN" : "KA";
        document.documentElement.lang = currentLang;

        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
            }
        });

        resetTypewriter();
    });

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.12
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(btn => {
        btn.addEventListener("click", () => {
            const faqItem = btn.parentElement;
            const isActive = faqItem.classList.contains("active");
            
            document.querySelectorAll(".faq-item").forEach(item => {
                item.classList.remove("active");
            });

            if (!isActive) {
                faqItem.classList.add("active");
            }
        });
    });
});