// get slideer items 
var sliderImges = Array.from(document.querySelectorAll('.slides-container img'));


//get namber of slide 
var slideCount = sliderImges.length;

var currenSlide = 1 ;

//slide namber elmets
var sliderNamberElment = document.getElementById('slide-number');
//next and prev 
var nextButton = document.getElementById('next');

var prevButton = document.getElementById('prev');

nextButton.onclick = nextSlide ;

prevButton.onclick = prevSlide ;


// crete ul 
var pacdgElmaent = document.createElement('ul');

//set id on ul 
pacdgElmaent.setAttribute('id', 'pacdg-ul');

// crete li 
for (var i = 1; i<= slideCount; i++) {
    //crete li
    var pacdgItem = document.createElement('li');


    pacdgItem.setAttribute('data-index', i);

    //contet 
    pacdgItem.appendChild(document.createTextNode(i));

    pacdgElmaent.appendChild(pacdgItem);
}

//add crte ul pge

document.getElementById('indicators').appendChild(pacdgElmaent);


//get now ul 
var padgeUl = document.getElementById('pacdg-ul');

var padgULBolet = Array.from(document.querySelectorAll('#pacdg-ul li'))

for (var i = 0; i < padgULBolet.length; i++) {

    padgULBolet[i].onclick = function () {
  
      currenSlide = parseInt(this.getAttribute('data-index'));
  
      theChecker();
  
    }
  
  }




theChecker();


//next slide

function nextSlide() {

if (nextButton.classList.contains('disabled')) {

    return  false ;

} else {

    currenSlide++;

    theChecker();

}



}
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {

        return  false ;
    
    } else {
    
        currenSlide--;
    
        theChecker();
    
    }
}

function theChecker(){
    sliderNamberElment.textContent = 'Photo : ' + (currenSlide) + " of " + (slideCount);

    
    removeAllActive();

    sliderImges[currenSlide -1 ].classList.add('active');

    pacdgElmaent.children[currenSlide -1].classList.add('active');

//////////////////////
if (currenSlide ==1) {

    // Add Disabled Class on Previous Button
    prevButton.classList.add('disabled');

  } else {

    // Remove Disabled Class From Previous Button
    prevButton.classList.remove('disabled');

  }
if (currenSlide == slideCount) {

    // Add Disabled Class on next last
    nextButton.classList.add('disabled');

  } else {

    // Remove Disabled Class From next last
    nextButton.classList.remove('disabled');

  }

}




/////
function removeAllActive() {
    

    sliderImges.forEach(function(img) {

        img.classList.remove('active')
        
    })

    padgULBolet.forEach(function (bullet) {

        bullet.classList.remove('active');
    
      });




}