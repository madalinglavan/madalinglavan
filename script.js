document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-links a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        pages.forEach(page => {
          page.classList.remove('active');
        });
  
        const targetPageId = link.getAttribute('href').substring(1);
        const targetPage = document.getElementById(targetPageId);
        targetPage.classList.add('active');
      });
    });
  });
  
                        
      const text = "BadDOG-Developer";
      let charIndex = 0;
      const textContainer = document.getElementById("intro-text");
      function type() {
          if (charIndex < text.length) {
              textContainer.textContent += text[charIndex];
              charIndex++;
          } else {
              clearInterval(interval); 
          }
      }
      const interval = setInterval(type, 100);

//video galery

function changeVideo(videoSrc) {
  var videoPlayer = document.getElementById('video-player');
  videoPlayer.src = videoSrc;
  videoPlayer.load();
  videoPlayer.play();
}

window.onload = function () {
var playlistItems = document.querySelectorAll('#playlist li');

if (playlistItems.length > 0) {
  var firstVideo = playlistItems[0].textContent;
  console.log('Primul videoclip din lista:', firstVideo);
  var videoSrc = 'video/' + firstVideo + '.mp4';

  document.getElementById('video-container').addEventListener('click', function() {
      changeVideo(videoSrc);
  });
} else {
  console.error('Nu există elemente în lista de redare.');
}
};

 
          function changeVideo(videoSrc, videoDescription) {
var videoPlayer = document.getElementById('video-player');
videoPlayer.src = videoSrc;
videoPlayer.load();
videoPlayer.play();

var descriptionElement = document.getElementById('video-description');
descriptionElement.textContent = videoDescription;
}

window.onload = function () {
var playlistItems = document.querySelectorAll('#playlist li');

if (playlistItems.length > 0) {
  var firstVideo = playlistItems[0].textContent;
  var firstVideoDescription = "Descrierea pentru primul videoclip...";
  var videoSrc = 'video/' + firstVideo + '.mp4';
  
  document.getElementById('video-container').addEventListener('click', function() {
      changeVideo(videoSrc, firstVideoDescription);
  });
} else {
  console.error('Nu există elemente în lista de redare.');
}
};

document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category");
  const productsContainers = document.querySelectorAll(".products-container");

  categories.forEach((category) => {
      category.addEventListener("click", function () {
          const target = category.dataset.target;

          productsContainers.forEach(container => {
              container.style.display = "none";
          });

          const selectedContainer = document.querySelector(`#${target}-products`);
          if (selectedContainer) {
              selectedContainer.style.display = "block";
          }
      });
  });
});





const chatIntroduction = "Pick one category and choese the question! I`m happy to meet you! Q and A  #havefun!";
            let waitingForNextQuestion = false;

            const categories = [
                {
                name: "HTML, CSS, JS Projects",
            questions: [
                "What recent projects have you worked on in HTML, CSS, and JavaScript?",
                "What is your experience using HTML and CSS for web design?",
                "Which specific JavaScript technologies do you use in your projects?",
                "What inspires you to choose specific themes or concepts for your recent projects?",
                "How do you approach the process of designing a web interface, from idea to implementation?",
                "Have you ever faced major challenges in developing a project, and how did you overcome them?"
            ],
            answers: [
                "I have recently worked on projects featured on the Live Projects page.",
                "I have extensive experience in developing web interfaces with HTML and CSS.",
                "I use JavaScript (ES6+) to create interactive and appealing web interfaces.",
                "I am inspired by the diversity and innovation around me, and the themes of my projects reflect this diversity.",
                "I start by understanding the purpose and target audience, then create wireframes and prototypes before implementation.",
                "Of course, each project comes with its own challenges. I tackle these situations through research, collaboration, and continuous improvement."
            ]
        },
        {
            name: "Photoshop and Illustrator",
            questions: [
                "How do you use Photoshop for web design?",
                "What are your main skills in Illustrator?",
                "How do you integrate your knowledge of Photoshop and Illustrator into web project development?",
                "What are the main concepts you learned in your Photoshop and Illustrator specialization courses?",
                "How do you use animations in your web projects, and how do you think they add value to your users' experience?",
                "How do you approach the creative process in web design?",
                "What are your favorite features in Adobe Illustrator?",
                "How do you integrate illustrations into your design projects?"
            ],
            answers: [
                "I use Photoshop to create graphic elements and background images for websites.",
                "In Illustrator, I specialize in creating vector graphics and illustrations.",
                "I use Photoshop and Illustrator to create custom graphic elements and enhance the overall look of my web projects.",
                "In my courses, I learned about image manipulation, creating vector illustrations, and applying special effects for visually impressive design.",
                "Animations are an essential part of my creativity. I apply them strategically to highlight certain elements, enhancing interactivity and visual appeal of my web pages.",
                "I always start with a careful analysis of the project's requirements and goals.",
                "I enjoy working with the shape creation tools in Illustrator.",
                "Illustrations add a distinctive and captivating touch to my design."
            ]
        },
        {
            name: "Coding and Programming",
            questions: [
                "What is your preferred programming language and why?",
                "Can you tell me about a coding project that has been a real success for you?",
                "How do you ensure that your code is efficient and easy to maintain?",
                "What particularly attracted you to the field of coding and programming?",
                "How do you see your long-term evolution in the IT field, and what goals do you set for yourself to achieve?"
            ],
            answers: [
                "I enjoy working with JavaScript due to its versatility.",
                "With joy, I can share about the recent project, named L'Authentik, which I officially started working on starting January 4, 2024.",
                "I use clean code principles and conduct regular code reviews.",
                "Fascination for computers and the ability to manipulate and create things brought me into the world of coding.",
                "I see my evolution as a continuous learning and application journey, with long-term goals of becoming an expert in certain technologies and contributing to significant projects."
            ]
        },
        {
            name: "Installation and Configuration of Programs",
            questions: [
                "How do you choose the right software for a particular project?",
                "What is your process for installing and configuring a new application?",
                "How do you manage software updates and compatibility?"
            ],
            answers: [
                "I analyze the project requirements and choose the right tools for the task.",
                "Installation and configuration are integral parts of each project, ensuring everything works efficiently.",
                "Regular updates are managed, and compatibility is carefully checked."
            ]
        },
        {
            name: "Maintenance and Repairs",
            questions: [
                "How do you approach maintaining a site after launch?",
                "How do you handle errors and security issues in your websites?",
                "What backup strategies do you use to protect data?"
            ],
            answers: [
                "I ensure that the site is updated and functions correctly through constant monitoring.",
                "Errors are quickly identified and resolved, and security is a priority.",
                "Regular backups are essential to protect data against losses."
            ]
        },
        {
            name: "Pricing",
            questions: [
                "What are your standard rates for web design projects?",
                "Are you willing to offer exclusivity?"
            ],
            answers: [
                "My rates vary depending on the complexity and specific requirements of each project. For a customized quote, please contact me.",
                "Yes, I am willing to offer exclusivity. I would be delighted to be part of a team!"
            ]
        }
    ];

            let currentQuestionIndex = 0;
            let currentCategoryIndex = 0;
            const chatContainer = document.getElementById("chat-container");
            const categoryContainer = document.getElementById("category-container");
            const answerContainer = document.getElementById("answer-container");

            function displayIntroduction() {
                displayText(chatIntroduction);
                setTimeout(() => {
                    waitingForNextQuestion = true;
                    displayCategoryButtons();
                }, 1000);
            }

            function displayText(text) {
                const paragraph = document.createElement('p');
                paragraph.textContent = text;
                chatContainer.appendChild(paragraph);
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }

            function displayCategoryButtons() {
                categories.forEach((category, index) => {
                    const categoryButton = document.createElement("div");
                    categoryButton.classList.add("category-button");
                    categoryButton.textContent = category.name;
                    categoryButton.onclick = function () {
                        showCategory(index);
                    };
                    categoryContainer.appendChild(categoryButton);
                });
            }

            function showCategory(categoryIndex) {
                currentCategoryIndex = categoryIndex;
                clearContainer(chatContainer);
                clearContainer(answerContainer);
                displayQuestionButtons();
            }

            function displayQuestionButtons() {
                const currentCategory = categories[currentCategoryIndex];
                currentCategory.questions.forEach((question, index) => {
                    const questionButton = document.createElement("div");
                    questionButton.classList.add("question-button");
                    questionButton.textContent = `${index + 1}. ${question}`;
                    questionButton.onclick = function () {
                        showAnswer(index);
                    };
                    chatContainer.appendChild(questionButton);
                });
            }

            function showAnswer(questionIndex) {
        const currentCategory = categories[currentCategoryIndex];
        clearContainer(answerContainer);
        const answerParagraph = document.createElement("p");
        answerParagraph.textContent = currentCategory.answers[questionIndex];
        answerContainer.appendChild(answerParagraph);
    }

    function clearContainer(container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

            displayIntroduction();